from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User

class User(User):
  registration = models.CharField(max_length = 100)