from django.shortcuts import render

from rest_framework import generics, permissions, viewsets
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


class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create properties

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user) #set the owner of the property to the authenticated user

class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TenancyAgreementListCreateView(generics.ListCreateAPIView):
    queryset = TenancyAgreement.objects.all()
    serializer_class = TenancyAgreementSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create tenancy agreements


class TenancyAgreementDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TenancyAgreement.objects.all()
    serializer_class = TenancyAgreementSerializer
    permission_classes = [permissions.IsAuthenticated]

class RoommateListCreateView(generics.ListCreateAPIView):
    queryset = Roommate.objects.all()
    serializer_class = RoommateSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create roommates
   
class RoommateDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Roommate.objects.all()
    serializer_class = RoommateSerializer
    permission_classes = [permissions.IsAuthenticated]

class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create messages

class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

class DocumentListCreateView(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create documents

class DocumentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [permissions.IsAuthenticated]

class AgentListingListCreateView(generics.ListCreateAPIView):
    queryset = AgentListing.objects.all()
    serializer_class = AgentListingSerializer
    permission_classes = [permissions.IsAuthenticated] #only authenticated users can create agent listings

class AgentListingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AgentListing.objects.all()
    serializer_class = AgentListingSerializer
    permission_classes = [permissions.IsAuthenticated]
