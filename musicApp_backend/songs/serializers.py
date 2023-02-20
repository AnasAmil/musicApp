import base64
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Song
from categories.serializers import CategoriesSerializer



class SongSerializer(ModelSerializer):
    mp3_file_base64 = serializers.SerializerMethodField()
    avatar_base64 =  serializers.SerializerMethodField()
    categorie = CategoriesSerializer(many=False, read_only=True)
    class Meta:
        model = Song
        fields = ('id', 'title', 'lyrics', 'avatar_base64', 'mp3_file_base64', 'categorie')

    def get_mp3_file_base64(self, song):
        song_file = song.song_file

        if song_file:
            with song_file.open('rb') as f:
                encoded_file = base64.b64encode(f.read()).decode('utf-8')

            return encoded_file

        return None

    def get_avatar_base64(self, song):
        song_avatar = song.song_avatar

        if song_avatar:
            with song_avatar.open('rb') as i:
                encoded_avatar = base64.b64encode(i.read()).decode('utf-8')

            return encoded_avatar

        return None


