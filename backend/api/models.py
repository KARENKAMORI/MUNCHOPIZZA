from django.db import models
from django.contrib.auth.models import User
from datetime import date

# Create your models here.
class Role(models.Model):
    role = models.CharField(max_length=50)

    def __str__(self):
        return self.role

class Customer(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    nationalId = models.CharField(max_length=100)
    dOB = models.DateField(default=date.today)
    gender = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    phoneNumber = models.CharField(max_length=15, unique=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=1, related_name="customerRoles")
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="customerUsers")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fname

class Owner(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    nationalId = models.CharField(max_length=100)
    dOB = models.DateField(default=date.today)
    gender = models.CharField(max_length=100)
    email = email = models.EmailField(max_length=254, unique=True)
    phoneNumber = models.CharField(max_length=15, unique=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=2, related_name="ownerRoles")
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="ownerUsers")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fname

class Restaurant(models.Model):
    name = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    email = email = models.EmailField(max_length=254, unique=True)
    phoneNumber = models.CharField(max_length=15, unique=True)
    location = models.CharField(max_length=500)
    owner = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="restaurantOwners")
    created_at = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
    name = models.CharField(max_length=500)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="categoryOwner")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class PizzaType(models.Model):
    pizza_type_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="categories")
    ingredients = models.CharField(max_length=500)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name="pizzaTypeOwners")
    created_at = models.DateTimeField(auto_now_add=True)

class Size(models.Model):
    size = models.CharField(max_length=15, unique=True)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name="sizeOwner")
    created_at = models.DateTimeField(auto_now_add=True)

class Pizza(models.Model):
    pizza_type = models.ForeignKey(PizzaType, on_delete=models.CASCADE, related_name="pizzaTypes")
    size = models.ForeignKey(Size, on_delete=models.CASCADE, related_name="sizes")
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, default=0)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="customer")
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name="owner")
    created_at = models.DateTimeField(auto_now_add=True)