from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Reviewer, Servery, MenuItem, MealType,FullReview, ReviewItem, Reviewer, Servery, MenuItem, MealType, Meal, MenuItemServed
from django.core import serializers
import json

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


def serveryMenus(response):
    # return the servery menus from the FoodServed Model
    mydata = list(MenuItemServed.objects.all().values())

    serveryDict = {}
    for entry in mydata:
        menuItemId = entry['menuItem_id']
        menuItemInfo = MenuItem.objects.get(pk=menuItemId)
        mealId = entry['meal_id']
        mealInfo = Meal.objects.get(pk=mealId)
        servery = mealInfo.servery.name
        
        
        serialized_obj = serializers.serialize('json', [ menuItemInfo, ])
        dct = json.loads(serialized_obj)

        # add the menuItem object into its respective servery
        if servery not in serveryDict:
            serveryDict[servery] = []
        serveryDict[servery].append(dct[0]['fields'])
    
    return JsonResponse(serveryDict, safe = False)

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