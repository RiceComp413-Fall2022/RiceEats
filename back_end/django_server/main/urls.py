from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name='index'), # for empty url path, go to views.index view
    path("v1/", views.v1, name='view 1'), # for empty url path, go to views.index view
]