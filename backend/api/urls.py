from django.urls import path
from . import views

urlpatterns = [
    path("customer/", views.CustomerListCreate.as_view(), name="create-customer"),
    path("owner/", views.OwnerListCreate.as_view(), name="create-owner"),
    path("category/", views.CategoryListCreate.as_view(), name="category-list"),
    path("category/delete/<int:pk>/", views.CategoryDelete.as_view(), name="delete-category"),
    # path("add-pizza/", views.AddPizzaListCreate.as_view(), name="add-pizza")
]