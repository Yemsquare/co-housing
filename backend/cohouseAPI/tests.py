from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth.models import User
from .models import Property, TenancyAgreement

# Create your tests here.
class TenancyAgreementViewSetTest(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create a landkord user 
        self.landlord = User.objects.create_user(
            username='landlord1',
            password='landlord1',
            role='landlord'
        )

        # Create an tenant user
        self.tenant = User.objects.create_user(
            username='tenant1',
            password='tenant1',
            role='tenant'
        )
        
        # Create a property
        self.property = Property.objects.create(
            owner=self.landlord,
            location='TestLocation',
            price='10000.00',
            availabilty=True
        )
        # Authenticate the tenant User
        self.client.force_authenticate(user=self.tenant)

    def test_create_tenancy_agreement(self):
        data = {
            'property': self.property.id,
            'tenant': self.tenant.id,
            'start_date': '2022-01-01',
            'end_date': '2022-12-31',
            'rent_amount': 1500.00
        }
        response = self.client.post('/api/tenancy-agreements/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TenancyAgreement.objects.count(), 1)
        self.assertEqual(TenancyAgreement.objects.get().tenant, self.tenant)
        self.assertEqual(TenancyAgreement.objects.get().property, self.property)

    def test_create_tenancy_agreement_unathenate(self):
        self.client.force_authenticate(User=None)
        data = {
            'property': self.property.id,
            'tenant': self.tenant.id,
            'start_date': '2022-01-01',
            'end_date': '2022-12-31',
            'rent_amount': 1500.00
        }
        response = self.client.post('/api/tenancy-agreements/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_tenancy_agreement_invalid_data(self):
        data = {
            'property': self.property.id,
            'tenant': self.tenant.id,
            'start_date': '2022-01-01',
            'end_date': '2022-12-31',
            'rent_amount': 'invalid'
        }
        response = self.client.post('/api/tenancy-agreements/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('rent_amount', response.json()['errors'])
        