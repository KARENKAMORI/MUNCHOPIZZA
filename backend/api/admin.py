from django.contrib import admin
from .models import Role, Customer, Owner, Category

# Register your models here.
admin.site.register(Role)
admin.site.register(Customer)
admin.site.register(Owner)
admin.site.register(Category)