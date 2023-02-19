from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Playlist
from songs.serializers import SongSerializer

class PlaylistSerializer(ModelSerializer):
    songs = SongSerializer(many=True, read_only=True)
    class Meta:
        model = Playlist
        fields = '__all__'