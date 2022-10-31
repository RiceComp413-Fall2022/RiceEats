from django.core.management.base import BaseCommand
import pandas as pd
from main.models import *
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
import requests
import json
import calendar
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'this scrapes menus from the servery'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        url = "https://raw.githubusercontent.com/jryjng/rice-servery-viewer/main/dat.js"
        dietToIdx = {
            'eggs': 0,
            'fish': 1,
            'glut': 2,
            'milk': 3,
            'nuts': 4,
            'shlf': 5,
            'soy': 6,
            'tnut': 7,
            'vega': 8,
            'vegt': 9,
            '?': 10
        }
        
        req = requests.get(url)
        text = req.text[5:-1]
        masterDict = json.loads(text)
        links_list = masterDict['links']

        today_date = masterDict['date']
        date_parsed = today_date.split(' ')
        monthToInt = {month: index for index, month in enumerate(calendar.month_abbr) if month}
        today_datetime = datetime(year=int(date_parsed[3]), month=monthToInt[date_parsed[1]], day=int(date_parsed[2]))
        delta = timedelta(today_datetime.weekday())
        monday_datetime = today_datetime - delta
        print('monday_datetime:', monday_datetime)

        print('date parsed:', date_parsed)
        print('date:', today_date)
        print('len(masterDict[\'serveries\']', len(masterDict['serveries']))
        print(masterDict['serveries'][0].keys())
        #print(masterDict['serveries'][0]['lunch'])
        for i in range(5):
            serveryDict = masterDict['serveries'][i]
            for meal in ['lunch', 'dinner']:
                if meal == 'lunch':
                    mealKey = 'Lunch'
                else:
                    mealKey = 'Dinner'
                print(meal, serveryDict['name'])
                weekMenu = serveryDict[meal]
                for dow in range(7):
                    dayMenu = weekMenu[dow]
                    print('dayofweek', dow)
                    SERVERY, serveryCreated = Servery.objects.get_or_create(name=serveryDict['name'])
                    MEALTYPE, mealTypeCreated = MealType.objects.get_or_create(name=mealKey)
                    MEAL, mealCreated = Meal.objects.get_or_create(servery=SERVERY, mealType=MEALTYPE, servedDate=monday_datetime+timedelta(dow))
                    for item in dayMenu:
                        print(serveryDict['name'], meal, 'dow:', dow, item)
                        nameOfMenu = item[0]
                        dietRestrictions = item[1:]
                        MENUITEM, menuItemCreated = MenuItem.objects.get_or_create(name=nameOfMenu)
                        dietLst = [0] * len(dietToIdx.keys())
                        for restriction in dietRestrictions:
                            dietLst[dietToIdx[restriction]] = 1
                        MENUITEMDIET, menuItemDietCreated = MenuItemDiet.objects.get_or_create(menuItem=MenuItem.objects.all().filter(name=nameOfMenu)[0],
                            eggs=dietLst[dietToIdx['eggs']], fish=dietLst[dietToIdx['fish']], gluten=dietLst[dietToIdx['glut']],
                            milk=dietLst[dietToIdx['milk']], peanuts=dietLst[dietToIdx['nuts']], shellfish=dietLst[dietToIdx['shlf']],
                            soy=dietLst[dietToIdx['soy']], treeNuts=dietLst[dietToIdx['tnut']], vegan=dietLst[dietToIdx['vega']],
                            vegetarian=dietLst[dietToIdx['vegt']])
                        MENUITEMDIETSERVED, menuItemDietServedCreated = MenuItemDietServed.objects.get_or_create(menuItemDiet=MENUITEMDIET, meal=MEAL)
                        

#Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Meal, MenuItemServed
# driver = webdriver.Chrome(ChromeDriverManager().install())#webdriver.Chrome()
# driver.get("https://dining.rice.edu/baker-college-kitchen/full-week-menu")
# driver.quit()
#print(masterDict['serveries'][0]['name'])
#print(masterDict['serveries'], type(masterDict['serveries']))
# req_decoded = .decode('utf-8')
# print(json.loads())
# print(req.content)
# soup = BeautifulSoup(req.content, 'html.parser')
# print(soup)
#print(soup.find_all(class_="menu-title"))