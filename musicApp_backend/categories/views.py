from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Categories
from .serializers import CategoriesSerializer
from rest_framework import status
# Create your views here.


@api_view(['GET'])
def getCategories(request):
    categories = Categories.objects.all()
    serializer = CategoriesSerializer(categories, many=True)

    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def showCategorie(request, pk):
    
    try:
        user = Categories.objects.get(pk=pk)
    except Categories.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = CategoriesSerializer(user)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = CategoriesSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_201_CREATED)
        