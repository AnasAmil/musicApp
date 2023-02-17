from django.db import models


class VisibilityChoices(models.IntegerChoices):
    PUBLIC = 0, 'Public'
    PRIVATE = 1, 'Private'

class Playlist(models.Model):

    name = models.CharField(null=False, max_length=50, blank="")
    description = models.TextField(max_length=255, null=True, blank=True)
    visibility = models.IntegerField(choices=VisibilityChoices.choices, default=VisibilityChoices.PUBLIC)

    def __str__(self):
        return self.name;
