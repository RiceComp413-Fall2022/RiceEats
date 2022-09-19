from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name='home'), # for empty url path, go to views.index view
    path("v1/", views.v1, name='view 1'), # for empty url path, go to views.index view
    path("<int:id>", views.index, name='integer demo'),
    path("add", views.add, name='add function')
    #path("<str:name>", views.index_str, name='string demo')
]