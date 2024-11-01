from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'properties', views.PropertyListCreateView)
router.register(r'tenancy-agreement', views.TenancyAgreementListCreateView)
router.register(r'roommates', views.RoommateListCreateView)
router.register(r'messages', views.MessageListCreateView)
router.register(r'documents', views.DocumentListCreateView)
router.register(r'agent-listings', views.AgentListingListCreateView)

urlpatterns = [
    path('', include(router.urls)),
]