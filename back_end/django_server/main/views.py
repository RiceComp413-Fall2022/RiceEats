from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import FullReview, ReviewItem

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