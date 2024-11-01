from rest_framework import serializers
from .models import User, Property, TenancyAgreement, Roommate, Message, Document, AgentListing


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'profile_info', 'role']
        extra_kwargs = {'password': {'write_only': True, 'required': True}} #hide password in the response

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save() #hash the password
        return user


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'

class TenancyAgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = TenancyAgreement
        fields = '__all__'

class RoommateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roommate
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = '__all__'

class AgentListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgentListing
        fields = '__all__'

