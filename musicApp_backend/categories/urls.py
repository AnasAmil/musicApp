from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getCategories),
    path('<str:pk>', views.getCategorie)
]
