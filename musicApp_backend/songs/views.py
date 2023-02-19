from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Song
from .serializers import SongSerializer

@api_view(['GET', 'POST'])
def getSongs(request):

    if request.method == 'GET':
        songs = Song.objects.all()
        serializer = SongSerializer(songs, many=True, context={'request': request})
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.error, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def getSong(request, pk):
            
    try:
        song = Song.objects.get(id=pk)
    except Song.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SongSerializer(song, many=False, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SongSerializer(song, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
