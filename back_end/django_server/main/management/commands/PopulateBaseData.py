from django.core.management.base import BaseCommand
import pandas as pd
from main.models import *

class Command(BaseCommand):
    help = 'this deletes everything in the database'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        df_servery = pd.read_csv('all_data/serverys.csv')
        for NAME in df_servery.name:
            servery = Servery(name=NAME)
            servery.save()
        df_mealType = pd.read_csv('all_data/mealTypes.csv')
        for NAME in df_mealType.name:
            mealType = MealType(name=NAME)
            mealType.save()
        df_colleges = pd.read_csv('all_data/colleges.csv')
        for NAME in df_colleges.name:
            college = College(name=NAME)
            college.save()
        df_reviewers = pd.read_csv('all_data/reviewers.csv')
        for NETID, COLLEGE in zip(df_reviewers.netid, df_reviewers.college):
            reviewer = Reviewer(netid=NETID, college=College.objects.all().get(name=COLLEGE))
            reviewer.save()
        df_menuitems = pd.read_csv('all_data/menuitems.csv')
        boolcols = ['eggs','fish','gluten','milk','peanuts','shellfish','soy','treeNuts','vegan','vegetarian']
        for col in boolcols:
            df_menuitems[col] = df_menuitems[col].astype(bool)
        zipped = zip(
            df_menuitems.name, df_menuitems.eggs, df_menuitems.fish, df_menuitems.gluten,
            df_menuitems.milk, df_menuitems.peanuts, df_menuitems.shellfish, df_menuitems.soy,
            df_menuitems.treeNuts, df_menuitems.vegan, df_menuitems.vegetarian
        )
        for NAME,EGGS,FISH,GLUTEN,MILK,PEANUTS,SHELLFISH,SOY,TREENUTS,VEGAN,VEGETARIAN in zipped:
            menuitem = MenuItem(name=NAME, eggs=EGGS, fish=FISH, gluten=GLUTEN, milk=MILK, peanuts=PEANUTS,
                                shellfish=SHELLFISH, soy=SOY, treeNuts=TREENUTS, vegan=VEGAN, vegetarian=VEGETARIAN)
            menuitem.save()
        #Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Meal, MenuItemServed
        # Reviewer.objects.all().delete()
        # Servery.objects.all().delete()
        # MenuItem.objects.all().delete()
        # MealType.objects.all().delete()
        # FullReview.objects.all().delete()
        # ReviewItem.objects.all().delete()
        # Meal.objects.all().delete()
        # MenuItemServed.objects.all().delete()
