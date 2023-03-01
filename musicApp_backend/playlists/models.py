from django.db import models
from accounts.models import User
from songs.models import Song

class VisibilityChoices(models.IntegerChoices):
    PUBLIC = 0, 'Public'
    PRIVATE = 1, 'Private'


class Playlist(models.Model):
    
    name = models.CharField(null=False, max_length=50, blank="")
    description = models.TextField(null=True, max_length=255, blank=True)
    visibility = models.IntegerField(choices=VisibilityChoices.choices, default=VisibilityChoices.PUBLIC)
    playlist_avatar = models.ImageField(upload_to='playlist_images/', null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    songs = models.ManyToManyField(Song, blank=True)

    def __str__(self):
        return self.name
