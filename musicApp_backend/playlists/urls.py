from django.urls import path
from . import views

urlpatterns = [
    path('', views.getPlaylists),
    path('<str:pk>', views.getPlaylist)
]