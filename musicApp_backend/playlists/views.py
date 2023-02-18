from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Playlist
from .serializers import PlaylistSerializer

@api_view(['GET'])
def getPlaylists(request):
    playlists = Playlist.objects.all()
    serializer = PlaylistSerializer(playlists, many=True, context={"request":request})
    return Response(serializer.data)