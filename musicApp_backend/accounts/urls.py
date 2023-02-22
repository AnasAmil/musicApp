from django.urls import path, include 
from . import views

urlpatterns = [
    path('', views.getUsers),
    path('<str:pk>', views.getUser),
    path('register/', views.registerUser),
    path('login/', views.loginView),
    # path('login/', views.LoginView.as_view()),
]
