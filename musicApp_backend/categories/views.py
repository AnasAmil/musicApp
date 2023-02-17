from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Categories
from .serializers import CategoriesSerializer
# Create your views here.


@api_view(['GET'])
def getCategories(request):
    categories = Categories.objects.all()
    serializer = CategoriesSerializer(categories, many=True)

    return Response(serializer.data)
