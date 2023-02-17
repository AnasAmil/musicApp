from django.urls import path
from . import views

urlpatterns = [
    path('', views.getSongs),
    path('<str:pk>', views.getSong),
]