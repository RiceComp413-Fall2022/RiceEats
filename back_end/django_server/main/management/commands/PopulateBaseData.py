from django.core.management.base import BaseCommand
import pandas as pd
from main.models import *
from datetime import datetime

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

        df_menuitems = pd.read_csv('all_data/menuItemDietServed.csv')
        boolcols = ['eggs','fish','gluten','milk','peanuts','shellfish','soy','treeNuts','vegan','vegetarian']
        for col in boolcols:
            df_menuitems[col] = df_menuitems[col].astype(bool)
        zipped = zip(
            df_menuitems.name, df_menuitems.date, df_menuitems.mealType, df_menuitems.servery,
            df_menuitems.eggs, df_menuitems.fish, df_menuitems.gluten,
            df_menuitems.milk, df_menuitems.peanuts, df_menuitems.shellfish, df_menuitems.soy,
            df_menuitems.treeNuts, df_menuitems.vegan, df_menuitems.vegetarian
        )
        for NAME,DATE_str,MEALTYPE_str,SERVERY_str,EGGS,FISH,GLUTEN,MILK,PEANUTS,SHELLFISH,SOY,TREENUTS,VEGAN,VEGETARIAN in zipped:
            menuItem, created = MenuItem.objects.get_or_create(name=NAME)

            MENUITEMDIET, created = MenuItemDiet.objects.get_or_create(menuItem=MenuItem.objects.all().filter(name=NAME)[0], eggs=EGGS, fish=FISH,
                gluten=GLUTEN, milk=MILK, peanuts=PEANUTS,shellfish=SHELLFISH, soy=SOY, treeNuts=TREENUTS, vegan=VEGAN, vegetarian=VEGETARIAN)

            DATE = datetime.strptime(DATE_str, "%y-%m-%d").date()
            MEALTYPE = MealType.objects.all().filter(name=MEALTYPE_str)[0]
            SERVERY = Servery.objects.all().filter(name=SERVERY_str)[0]
            
            # findMeal = Meal.objects.all().filter(servery=SERVERY, mealType=MEALTYPE, servedDate=DATE)
            # if len(findMeal) == 0:
            #     MEAL = Meal(servery=SERVERY, mealType=MEALTYPE, servedDate=DATE)
            #     MEAL.save()
            # else:
            #     MEAL = findMeal[0]
            MEAL, created = Meal.objects.get_or_create(servery=SERVERY, mealType=MEALTYPE, servedDate=DATE)
            
            find_menuItemDietServed = MenuItemDietServed.objects.all().filter()
            menuItemDietServed, created = MenuItemDietServed.objects.get_or_create(menuItemDiet=MENUITEMDIET, meal=MEAL)
            #menuItemDietServed.save()
        
        # for i in range(1, 6):
        #     sampleDate = datetime.date(2022, 10, i)
        #     for SERVERY in Servery.objects.all():
        #         for MEALTYPE in MealType.objects.all():
        #             try:
        #                 meal = Meal(servery=SERVERY, mealType=MEALTYPE, servedDate=sampleDate)
        #                 meal.save()
        #             except:
        #                 pass
                
        #Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Meal, MenuItemServed
        # Reviewer.objects.all().delete()
        # Servery.objects.all().delete()
        # MenuItem.objects.all().delete()
        # MealType.objects.all().delete()
        # FullReview.objects.all().delete()
        # ReviewItem.objects.all().delete()
        # Meal.objects.all().delete()
        # MenuItemServed.objects.all().delete()
