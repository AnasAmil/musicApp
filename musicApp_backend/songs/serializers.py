import base64
from django.core.files.base import ContentFile
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Song



class SongSerializer(ModelSerializer):
    mp3_file_base64 = serializers.SerializerMethodField()
    class Meta:
        model = Song
        fields = ('id', 'title', 'lyrics', 'song_file', 'song_avatar', 'mp3_file_base64', 'categorie')

    def get_mp3_file_base64(self, song):
        song_file = song.song_file

        if song_file:
            with song_file.open('rb') as f:
                encoded_file = base64.b64encode(f.read()).decode('utf-8')

            return encoded_file

        return None

