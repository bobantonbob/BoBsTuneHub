from django.urls import path
from .views import *

urlpatterns = [
    path("", team, name="team"),
]
