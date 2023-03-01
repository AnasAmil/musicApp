from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Playlist
from .serializers import PlaylistSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def getPlaylists(request):

    if request.method == 'GET':
        playlists = Playlist.objects.all()
        serializer = PlaylistSerializer(playlists, many=True, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PlaylistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def getPlaylist(request, pk):
    
    try:
        playlist = Playlist.objects.get(id=pk)
    except Playlist.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PlaylistSerializer(playlist, many=False, context={'request': request})
        return Response(serializer.data)
    
    elif request.method == 'PUT': # make updates to the an existed data
        serializer = PlaylistSerializer(playlist, data=request.data, context={'request': request})
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        playlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
        
