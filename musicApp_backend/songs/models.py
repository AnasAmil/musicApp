from django.db import models
from categories.models import Categories

class Song(models.Model):

    title = models.CharField(max_length=200)
    lyrics = models.TextField(max_length=255)
    song_file = models.FileField(upload_to='songs_files/', null=True)
    song_avatar = models.ImageField(upload_to='songs_affiches/', null=True)
    categorie = models.ForeignKey(Categories, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.title
