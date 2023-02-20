from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Playlist
from songs.serializers import SongSerializer
from accounts.serializers import UserSerializer
class PlaylistSerializer(ModelSerializer):
    songs = SongSerializer(many=True, read_only=True)
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Playlist
        fields = ('id', 'name', 'user', 'visibility', 'playlist_avatar', 'description', 'songs')