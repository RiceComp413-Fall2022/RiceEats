from django.core.management.base import BaseCommand
import pandas as pd
from main.models import *

class Command(BaseCommand):
    help = 'this deletes everything in the database'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        #Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Meal, MenuItemServed
        Reviewer.objects.all().delete()
        Servery.objects.all().delete()
        MenuItemDiet.objects.all().delete()
        MenuItem.objects.all().delete()
        MealType.objects.all().delete()
        College.objects.all().delete()
        FullReview.objects.all().delete()
        ReviewItem.objects.all().delete()
        Meal.objects.all().delete()
        MenuItemDietServed.objects.all().delete()
