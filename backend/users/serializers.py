from rest_framework import serializers
from .models import CustomUser, Address, ClientProfile, ProfessionalProfile

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    address = AddressSerializer()

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'phone_number', 'is_client', 'is_professional', 'address']

class ClientProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = ClientProfile
        fields = ['id', 'user', 'date_of_birth', 'gender']

class ProfessionalProfileSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = ProfessionalProfile
        fields = ['id', 'user', 'specialization', 'license_number', 'years_of_experience']
