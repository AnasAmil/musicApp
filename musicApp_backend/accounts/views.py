from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, LoginSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework import views
from rest_framework import permissions
from django.contrib.auth import login
# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def registerUser(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username = serializer.data['username'])
            token_obj , _ = Token.objects.get_or_create(user=user)
            return Response({'status': 200, 'payload': serializer.data, 'token': str(token_obj), 'messge': 'your data is saved'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

@api_view(['POST'])
@permission_classes([AllowAny])
def loginView(request):
    
    serializer = LoginSerializer(data=request.data, context={ 'request': request })
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    login(request, user)
    return Response(None, status=status.HTTP_202_ACCEPTED)




@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def getUsers(request):
    
    if request.method ==  'GET':
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)
    

    
@permission_classes([IsAuthenticated])
@api_view(['GET', 'PUT', 'DELETE'])
def getUser(request, pk):
    
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_201_CREATED)
        
        
# user registration


