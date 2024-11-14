from rest_framework import serializers
from .models import AgentListing, Property, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

class PropertySerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Property
        fields = '__all__'

class AgentListingSerializer(serializers.ModelSerializer):
    agent = UserSerializer()
    property = PropertySerializer()

    class Meta:
        model = AgentListing
        fields = '__all__'

    def create(self, validated_data):
        agent_data = validated_data.pop('agent')
        property_data = validated_data.pop('property')

        # Ensure owner_id is present in property_data
        owner_id = property_data.get('owner')
        if not owner_id:
            raise serializers.ValidationError("Property must have an owner.")

        # Assuming you want to create new User and Property instances
        agent, _ = User.objects.get_or_create(**agent_data)  # Use get_or_create to avoid duplicates
        property = Property.objects.create(owner_id=owner_id, **property_data)  # Use owner_id

        agent_listing = AgentListing.objects.create(agent=agent, property=property, **validated_data)
        return agent_listing

    def update(self, instance, validated_data):
        agent_data = validated_data.pop('agent', None)
        property_data = validated_data.pop('property', None)

        if agent_data:
            agent_serializer = UserSerializer(instance.agent, data=agent_data)
            agent_serializer.is_valid(raise_exception=True)
            agent_serializer.save()

        if property_data:
            property_serializer = PropertySerializer(instance.property, data=property_data)
            property_serializer.is_valid(raise_exception=True)
            property_serializer.save()

        return super().update(instance, validated_data)