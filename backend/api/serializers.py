from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Restaurant, Role, Customer, Owner, Pizza, PizzaType, Category, Size

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} #accept password when creating a new user but we don't return the password when we are giving new information

    # implements a method that will be called when you create a new version of this user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ["role"]

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["fname", "lname", "nationalId", "dOB", "gender", "email", "phoneNumber", "role", "user", "created_at"]
        extra_kwargs = {"role":{"read_only":True}, "user":{"read_only":True}}

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ["fname", "lname", "nationalId", "dOB", "gender", "email", "phoneNumber", "role", "user", "created_at"]
        extra_kwargs = {"role":{"read_only":True}, "user":{"read_only":True}}

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ["name", "description", "email", "phoneNumber", "location", "owner", "created_at"]
        extra_kwargs = {"owner":{"read_only":True}}

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "owner", "created_at"]
        extra_kwargs = {"owner":{"read_only":True}}

class PizzaTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PizzaType
        fields = ["pizza_type_id", "name", "category", "ingredients", "owner", "created_at"]
        extra_kwargs = {"owner":{"read_only":True}}

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["size", "owner", "created_at"]
        extra_kwargs = {"owner":{"read_only":True}}

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = ["pizza_type", "size", "price", "customer", "owner", "created_at"]