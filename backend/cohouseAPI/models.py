from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
# Create your models here.

class User(AbstractUser):
    USER_ROLES = (
        ('tenant', 'Tenant'),
        ('landlord', 'Landlord'),
        ('agent', 'Agent'),
    )
    profile_info = models.JSONField(null=True, blank=True)
    role = models.CharField(max_length=10, choices=USER_ROLES)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='cohouseAPI_user',
        blank=True,
        help_text='The groups this user belongs to, A user will get all permissions granted to each of their groups',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='cohouseAPI_user',
        blank=True,
        help_text='Specific permissions for this user. A user will get all permissions granted to each of their groups.',
        verbose_name='user permissions',
    )

class Property(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'role__in': ('landlord','agent','admin')}, related_name='properties')
    property_details = models.JSONField(null=True, blank=True)
    location = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.BooleanField(default=True)
    is_listed_by_agent = models.BooleanField(default=False)
    room = models.JSONField(default=list)

class TenancyAgreement(models.Model):
    property = models.ForeignKey('Property', on_delete=models.CASCADE)  # Assuming 'Property' is in the same app
    tenant = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'role': 'tenant'})
    landlord = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='landlord_agreements', limit_choices_to={'role': 'landlord'})
    start_date = models.DateField()
    end_date = models.DateField()
    rent_amount = models.DecimalField(max_digits=10, decimal_places=2)

class Roommate(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    preferences = models.JSONField(null=True, blank=True)
    matched_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='matched_roommate')

class Message(models.Model):
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sent_messages')
    reciever = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='recieved_messages')
    message_content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class Document(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='document')
    document_name = models.CharField(max_length=255)
    document_content = models.FileField(upload_to='documents/')
    encrypted = models.BooleanField(default=False)

class AgentListing(models.Model):
    agent = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'role':'agent'})
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    listing_details = models.JSONField(null=True, blank=True)


