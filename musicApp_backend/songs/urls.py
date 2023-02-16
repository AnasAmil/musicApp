from django.urls import path
from . import views

urlpatterns = [
    path('', views.showSongs, name='show-songs'),
]