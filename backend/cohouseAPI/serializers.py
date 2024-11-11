from rest_framework import serializers
from .models import User, Property, TenancyAgreement, Roommate, Message, Document, AgentListing


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'role']
        extra_kwargs = {'password': {'write_only': True, 'required': True}} #hide password in the response

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save() #hash the password
        return user
    
    # update the password with harsh 
    def update(self, instance, validated_data):
        instance.set_password(validated_data.get('password'))
        instance.save()
        return instance

# owner = serializers.PrimaryKeyRelatedField(queryset=User.objects)
class PropertySerializer(serializers.ModelSerializer):
    owner = UserSerializer()
    # owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role__in=['landlord','agent','admin']))
    class Meta:
        model = Property
        fields = '__all__'
        # read_only_fields = ['id']

    def validate_pice(self, value):
        if value < 0:
            raise serializers.ValidationError("Price should be greater than zero.")
        return value

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

