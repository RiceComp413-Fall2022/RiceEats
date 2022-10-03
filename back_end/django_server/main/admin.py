from django.contrib import admin
from .models import * #Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Servery, MenuItem, MealType, Meal, MenuItemServed

# Register your models here.
admin.site.register(FullReview)
admin.site.register(ReviewItem)
admin.site.register(Reviewer)
admin.site.register(Servery)
admin.site.register(MenuItem)
admin.site.register(MealType)
admin.site.register(Meal)
admin.site.register(MenuItemServed)
admin.site.register(College)