from django.urls import path
from .views import *

urlpatterns = [
    path("", music, name="music"),
]
