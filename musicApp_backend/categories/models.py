from django.db import models
from .randomHexColor import random_hex_color
# Create your models here.

class Categories(models.Model):
    title = models.CharField(max_length=200, blank=False, null=False)
    color = models.CharField(max_length=7, default=random_hex_color, blank=False, null=False)
    categorieImage = models.ImageField(upload_to ='static/categorieImages')
    
    

    
    def __str__(self):
        return self.title
    
