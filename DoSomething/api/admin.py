from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import User, Pact, ChecklistItem

admin.site.register(User)
admin.site.register(Pact)
admin.site.register(ChecklistItem)
