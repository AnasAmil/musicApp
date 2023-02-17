from django.db import models

class Song(models.Model):

    title = models.CharField(max_length=200)
    lyrics = models.TextField(max_length=255)

    def __str__(self):
        return self.title
