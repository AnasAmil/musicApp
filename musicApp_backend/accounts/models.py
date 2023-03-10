from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class User(AbstractUser):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    is_artist = models.BooleanField(default=False, blank=False, null=False)
    
    
    def __str__(self):
        return self.username