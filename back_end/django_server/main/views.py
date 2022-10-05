from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from django.core import serializers
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
import json
import ast
from random import randrange

# Create your views here.
def index(response, id):
    ls = FullReview.objects.get(id=id)
    #item = ls.reviewitem_set.get(id=1)
    return render(response, "main/list.html", {"ls": ls}) # {} is an open dictionary

def index_str(response, name):
    return HttpResponse("<h1>This is RiceEats %s</h1>" % name)

def index_old(response):
    return HttpResponse("<h1>This is RiceEats</h1>")

def v1(response):
    return HttpResponse("<h1>view 1!</h1>")

def home(response):
    return render(response, "main/home.html", {})

def add(response):
    val1 = response.POST["num1"]
    val2 = response.POST["num2"]
    try:
        res = int(val1) + int(val2)
    except:
        res = 'please submit numbers'
    return render(response, 'main/result.html', {'result': res})

def add2(response):
    val1 = response.POST["num1"]
    val2 = response.POST["num2"]
    try:
        res = int(val1) + int(val2)
    except:
        res = 'please submit numbers'
    data = {
        'val1': val1,
        'val2': val2,
        'sum': res
    }
    return JsonResponse(data)

@csrf_exempt
def serveryMenus(response):
    # return the servery menus from the FoodServed Model
    mydata = list(MenuItemDietServed.objects.all().values())

    #try:
        # get date and mealtype from response object
    byteString = response.body
    requestDict = ast.literal_eval(byteString.decode('ASCII'))
    MEALTYPE_str = requestDict['mealType'] # 'Breakfast'
    DATE_str = requestDict['date'] # '2022-10-01'
    #except:
    #    return JsonResponse("ERROR")

    MEALTYPE = MealType.objects.all().filter(name=MEALTYPE_str)
    #print('len:', len(MEALTYPE))
    DATE = datetime.strptime(DATE_str, "%y-%m-%d").date()

    returnDict = {}

    # for all serveries
    for SERVERY in Servery.objects.all():
        print('servery', SERVERY)
        serveryDict = {'name': SERVERY.name, 'overallRating': 5}
        menuItemsList = []
        # MEAL <- find the meal object corresonding to servery, date, mealtype
        MEAL = Meal.objects.all().filter(servery=SERVERY, servedDate=DATE, mealType=MEALTYPE[0])
        if (len(MEAL) == 0):
            continue
        # find all menuItemServed objects corresponding to that MEAL
        for MENUITEMDIETSERVED in MenuItemDietServed.objects.all().filter(meal=MEAL[0]):
            # add each menuItemServed object into dict that will become json 
            #menuItemsList.append()
            menuItemDiet_dict = MENUITEMDIETSERVED.menuItemDiet.__dict__
            menuItemDiet_dict['rating'] = randrange(4) + 1
            menuItemDiet_dict.pop('_state')
            menuItemsList.append(menuItemDiet_dict)
            print(MENUITEMDIETSERVED.menuItemDiet.__dict__)
        serveryDict['menuItemDiet'] = menuItemsList
        returnDict[SERVERY.name] = serveryDict
    return JsonResponse(returnDict, safe=False)

    # serveryDict = {}
    # for entry in mydata: # for every menu item served
    #     #print (entry)
    #     menuItemId = entry['menuItem_id']
    #     menuItemInfo = MenuItemDiet.objects.get(pk=menuItemId)
    #     #print(type(menuItemInfo))

    #     mealId = entry['meal_id']
    #     mealInfo = Meal.objects.get(pk=mealId)
    #     servery = mealInfo.servery.name
        
        
    #     serialized_obj = serializers.serialize('json', [ menuItemInfo, ])
    #     dct = json.loads(serialized_obj)

    #     # add the menuItem object into its respective servery
    #     if servery not in serveryDict:
    #         serveryDict[servery] = []
    #     serveryDict[servery].append(dct[0]['fields'])
    
    # return JsonResponse(serveryDict, safe = False)

def submitReview(response):
    val1 = response.POST["reviewId"]
    val2 = response.POST["foodId"]
    val3 = response.POST["score"]
    val4 = response.POST["comments"]

    data = {
        'reviewId': val1,
        'foodId': val2,
        'score': val3,
        'comments': val4
    }
    
    # save a review item instance into the database


    # save a fullreview instance into the database

    return JsonResponse(data)