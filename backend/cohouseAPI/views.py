from django.shortcuts import render

from rest_framework import generics, permissions, viewsets, status
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


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] #only authenticated users can view, update, or delete their accounts


class PropertyListCreateView(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated, IsLandlordOrAgent] #only authenticated users can create properties

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

        serializer.validated_data['owner'] = request.user
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
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
    permission_classes = [permissions.IsAuthenticated]
