from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from django.core import serializers
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
import json
import ast

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
        # print('servery', SERVERY)
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
            menuItemDietServed_dict = MENUITEMDIETSERVED.menuItemDiet.__dict__
            menuItemDiet = MENUITEMDIETSERVED.menuItemDiet.menuItem
            ReviewItem.objects.all().filter()
            menuItemDietServed_dict['rating'] = 5
            menuItemDietServed_dict.pop('_state')
            menuItemsList.append(menuItemDietServed_dict)
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

@csrf_exempt
def submitReview(response):
    byteString = response.body
    requestDict = ast.literal_eval(byteString.decode('ASCII'))

    servery = requestDict["serveryName"]
    date = requestDict["date"]
    mealType = requestDict["mealType"]
    reviewerNetId = requestDict["reviewerNetId"]
    reviewerEmail = requestDict["reviewerEmail"]
    reviewerCollege = requestDict["reviewerCollege"]
    reviewerNumReviews = requestDict["reviewerNumReviews"]
    fullReviewComments = requestDict["comments"]
    itemReviews = requestDict["itemReviews"] # this is a list


    # Create a new Meal instance (for input to full review)
    meal = None
    if Meal.objects.filter(servery=Servery.objects.get(pk=servery), mealType=MealType.objects.get(pk=mealType), servedDate=date).exists():
        meal = Meal.objects.get(servery=Servery.objects.get(pk=servery), mealType=MealType.objects.get(pk=mealType), servedDate=date)
    else: # it doesn't exist (but would it ever not exist?)
        meal = Meal(servery=Servery.objects.get(pk=servery), mealType=MealType.objects.get(pk=mealType), servedDate=date)
        meal.save()

    # Create a new full review instance and save into database
    reviewer = Reviewer(reviewerNetId, reviewerEmail, College.objects.get(pk=reviewerCollege), reviewerNumReviews)
    reviewer.save()
    
    fullReview = None
    if FullReview.objects.filter(reviewer=reviewer, meal = meal).exists():
        fullReview = FullReview.objects.get(reviewer=reviewer, meal = meal)
        FullReview.objects.filter(reviewer=reviewer, meal = meal).update(reviewText = fullReviewComments)
    else:
        fullReview = FullReview(reviewer=reviewer, meal = meal, reviewText = fullReviewComments)
        fullReview.save()
    
    # print("SHEEEEEEEEEEEEEEEEESH", list(MenuItemDiet.objects.all())[0].id)
    # for every item's review, create an instance and save into database
    print(MenuItemDiet.objects.all())
    for review in itemReviews:
        # front end can send this back after we send it to them?
        menuItemDietId = review["menuItemDietId"]
        # search for the MenuItemDiet instance of this menu item
        print("YOOOOOOOOOOOOOOOOO", menuItemDietId)
        menuItemDiet = MenuItemDiet.objects.get(pk=menuItemDietId)

        menuItemDietServed = None
        if MenuItemDietServed.objects.filter(menuItemDiet=menuItemDiet, meal=meal):
            menuItemDietServed = MenuItemDietServed.objects.get(menuItemDiet=menuItemDiet, meal=meal)
        else:
            menuItemDietServed = MenuItemDietServed(menuItemDiet=menuItemDiet, meal=meal)
            menuItemDietServed.save()
        
        reviewItem = None
        if ReviewItem.objects.filter(fullReview=fullReview, menuItemDietServed=menuItemDietServed).exists():
            reviewItem = ReviewItem.objects.get(fullReview=fullReview, menuItemDietServed=menuItemDietServed)
            ReviewItem.objects.filter(fullReview=fullReview, menuItemDietServed=menuItemDietServed).update(rating=review["rating"], reviewText=review["comments"], complete = True)
        else:
            reviewItem = ReviewItem(fullReview=fullReview, menuItemDietServed=menuItemDietServed, rating=review["rating"], reviewText=review["comments"], complete = True)
            reviewItem.save()

    return HttpResponse('')