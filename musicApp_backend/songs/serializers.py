import base64
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Song
from categories.serializers import CategoriesSerializer



class SongSerializer(ModelSerializer):
    categorie = CategoriesSerializer(many=False, read_only=True)
    class Meta:
        model = Song
        fields = '__all__'
