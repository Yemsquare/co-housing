from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, permissions, viewsets, status, filters
from .models import User, Property, TenancyAgreement, Roommate, Message, Document, AgentListing
from .serializers import (
    UserSerializer,
    PropertySerializer,
    TenancyAgreementSerializer,
    RoommateSerializer,
    MessageSerializer,
    DocumentSerializer,
    AgentListingSerializer,
)
from .permissions import IsAgent, IsLandlord, IsLandlordOrAgent, IsTenant 

# Create your views here.

# class UserListCreateView(generics.ListCreateAPIView):
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny] #allow any user to create accounts
    
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['username', 'email','role']

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        password  = request.data.get('password')
        if password:
            instance.set_password(password)
            request.data['password'] = instance.password

        partial = kwargs.pop('partial', False)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)

        response = super().update(request, *args, **kwargs)

        return Response(serializer.data)
    
    def get_queryset(self):
        queryset = super().get_queryset()

        group_name = self.request.query_params.get('group_name')

        if group_name:
            queryset = queryset.filter(groups__name=group_name)

        # return all users 
        else:
            queryset = User.objects.all()
        return queryset 

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] #only authenticated users can view, update, or delete their accounts


class PropertyListCreateView(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated, IsLandlordOrAgent] #only authenticated users can create properties

    # flitering and sorting properties
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['location', 'property_details__city']
    ordering_fields = ['price', 'property_details__bedrooms', 'property_details__bathrooms']
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user) #set the owner of the property to the authenticated user
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permissions_classes = [permissions.AllowAny]  #any user can view the properties
        else:
            permissions_classes = [permissions.IsAuthenticated] #other action requires permissions
        return [permission() for permission in permissions_classes]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if request.user.role.lower() not in ('landlord','agent','admin'):
            owner_id = request.data.get('owner')
            if not owner_id:
                return Response({"error":"Owner ID is required for non-landlord/agents users."},
                                status=status.HTTP_400_BAD_REQUEST)
            try:
                serializer.validated_data['owner'] = User.objects.get(id=owner_id, role__in=['landlord','agent'])
            except User.DoesNotExist:
                return Response({"error":"User does not exist."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer.validated_data['owner'] = request.user

        # if request.user.role.lower() not in ('landlord', 'agent'):
        #     serializer.validated_data['owner_id'] = request.data.get('owner')
        #     data = request.data.get('owner')
        #     # print(data)
        # else:
        #     serializer.validated_data['owner'] = request.user 
        # self.perform_create(serializer)

        # # serializer.validated_data['owner'] = request.user
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        if partial:
            for field in serializer.validated_data:
                setattr(instance, field, serializer.validated_data[field])
        else:
            serializer.update(instance, serializer.validated_data)

        instance.save()
        return Response(serializer.data)
class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TenancyAgreementListCreateView(viewsets.ModelViewSet):
    queryset = TenancyAgreement.objects.all()
    serializer_class = TenancyAgreementSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create tenancy agreements


class TenancyAgreementDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TenancyAgreement.objects.all()
    serializer_class = TenancyAgreementSerializer
    permission_classes = [permissions.IsAuthenticated]

class RoommateListCreateView(viewsets.ModelViewSet):
    queryset = Roommate.objects.all()
    serializer_class = RoommateSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create roommates
   
class RoommateDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Roommate.objects.all()
    serializer_class = RoommateSerializer
    permission_classes = [permissions.IsAuthenticated]

class MessageListCreateView(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create messages

class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

class DocumentListCreateView(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create documents

class DocumentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [permissions.IsAuthenticated]

class AgentListingListCreateView(viewsets.ModelViewSet):
    queryset = AgentListing.objects.all()
    serializer_class = AgentListingSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create agent listings

class AgentListingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AgentListing.objects.all()
    serializer_class = AgentListingSerializer
    permission_classes = [permissions.IsAuthenticated, IsAgent]

 