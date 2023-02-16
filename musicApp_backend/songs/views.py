from django.shortcuts import render
from django.http import HttpResponse

def showSongs(request):
    return HttpResponse("Songs")
