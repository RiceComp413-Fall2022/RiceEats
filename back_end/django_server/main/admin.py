from django.contrib import admin
from .models import FullReview, ReviewItem

# Register your models here.
admin.site.register(FullReview)
admin.site.register(ReviewItem)