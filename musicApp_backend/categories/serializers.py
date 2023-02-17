from rest_framework.serializers import ModelSerializer
from .models import Categories


class CategoriesSerializer(ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'