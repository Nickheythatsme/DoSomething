from django.db import models

# Create your models here.
from django.db import models
from datetime import datetime, timedelta, timezone
from django.utils import timezone

import pytz


class User(models.Model):
    date_created = models.DateTimeField(default=timezone.now)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)


def default_date_deadline():
    return timezone.now() + timedelta(days=7)


class Pact(models.Model):
    title = models.CharField(max_length=500)
    creator = models.ForeignKey(User, on_delete=models.RESTRICT)
    verifier = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='verifier')
    description = models.CharField(max_length=10000, null=True)
    date_created = models.DateTimeField(default=timezone.now)
    date_deadline = models.DateTimeField(default=default_date_deadline)
    is_completed = models.BooleanField(default=False)
    date_completed = models.DateTimeField(null=True)
    is_verified = models.BooleanField(default=False)


class ChecklistItem(models.Model):
    description = models.CharField(max_length=200)
    date_created = models.DateTimeField(default=timezone.now)
    date_completed = models.DateTimeField(null=True)
    is_completed = models.BooleanField(default=False)
    pact = models.ForeignKey(Pact, on_delete=models.CASCADE)
