from django.db import models
from .randomHexColor import random_hex_color
import uuid
# Create your models here.

class Categories(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    title = models.CharField(max_length=200, blank=False, null=False)
    color = models.CharField(max_length=7, blank=False, null=False)
    categorieImage = models.ImageField(upload_to ='static/categorieImages')
    
    
    def save(self, *args, **kwargs):  
            if not len(self.color):
                self.color = random_hex_color()
            super(Categories, self).save(*args, **kwargs) 
    
    def __str__(self):
        return self.title
    
