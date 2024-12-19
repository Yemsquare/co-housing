from rest_framework import serializers
from .models import User, Property, TenancyAgreement, Roommate, Message, Document, AgentListing


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','password', 'role', 'profile_info']
        extra_kwargs = {'password': {'write_only': True, 'required': True}} #hide password in the response

# checking username if exist and suggesting username 
    def validate_username(self, value):
        original_value = value
        if User.objects.filter(username__iexact=value).exists():
            # trying pending number to the username to generate a new username 
            for i in range(1, 100):
                new_value = f"{original_value}{i}"
                if not User.objects.filter(username__iexact=new_value).exists():
                    value = new_value
                    break
            else:
                raise serializers.ValidationError(f"Username '{original_value}' is taken. Try '{new_value}' instead.")
        return value
    def create(self, validated_data):
             
       try:
           password = validated_data.pop('password')
       except KeyError:
           None

       user = User(**validated_data)
       if password:
            user.set_password(password)
       user.save()        
       return user
    
    # update the password with harsh 
    def update(self, instance, validated_data):
        instance.set_password(validated_data.get('password'))
        profile_info = validated_data.get('profile_info')
        if profile_info:
            instance.profile_info = profile_info
        instance.save()
        return instance

# owner = serializers.PrimaryKeyRelatedField(queryset=User.objects)
class PropertySerializer(serializers.ModelSerializer):
    # owner = UserSerializer(read_only=True)
    # owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role__in=['landlord','agent']))
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
    # agent = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role__in=['agent']))
    # property = serializers.PrimaryKeyRelatedField(queryset=Property.objects.all())
    agent = UserSerializer()
    property = PropertySerializer()
    class Meta:
        model = AgentListing
        fields = '__all__'

    def create(self, validated_data):
        agent_data = validated_data.pop('agent')
        property_data = validated_data.pop('property')

        # ensure that owner_id is present in property_id 
        owner = property_data.get('owner')
        if not owner:
            raise serializers.ValidationError("Property owner is required.")
        owner_id = owner.id
        # assuming you want to create new User and properties instance 
        agent, _ = User.objects.get_or_create(**agent_data)
        property = Property.objects.create(owner_id=owner_id, **property_data)

        agent_listing = AgentListing.objects.create(agent=agent, property=property, **validated_data)
        return agent_listing
    
    # def update():
    #     pass

