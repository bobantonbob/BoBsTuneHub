from django.urls import path
from .views import *

urlpatterns = [
    path("", playlists, name="playlists"),
]
