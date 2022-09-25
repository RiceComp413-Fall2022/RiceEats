from django.db import models

# Create your models here.
class Reviewer(models.Model):
    netid = models.CharField(max_length=20)
    email = models.EmailField(max_length=30)
    college = models.CharField(max_length=20)
    numreviews = models.IntegerField()

    def __str__(self):
        return self.netid

class Servery(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    vegetarian = models.BooleanField()
    glutenFree = models.BooleanField()

    def __str__(self):
        return self.name

class MealType(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Meal(models.Model):
    servery = models.ForeignKey(Servery, on_delete=models.CASCADE)
    mealType = models.ForeignKey(MealType, on_delete=models.CASCADE)
    servedDate = models.DateField()

    def __str__(self):
        return str(self.servedDate) + "_" + str(self.mealType) + "_" + str(self.servery)

class MenuItemServed(models.Model):
    menuItem = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.menuItem.name) + " @ " + str(self.meal)

class FullReview(models.Model):
    reviewer = models.ForeignKey(Reviewer, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    reviewText = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.reviewer.netid) + ": " + str(self.meal)

class ReviewItem(models.Model):
    fullReview = models.ForeignKey(FullReview, on_delete=models.CASCADE)
    menuItemServed = models.ForeignKey(MenuItemServed, on_delete=models.CASCADE)
    reviewText = models.CharField(max_length=200)
    complete = models.BooleanField()
    rating = models.IntegerField()

    def __str__(self):
        return str(self.fullReview.reviewer.netid) + ": " + str(self.fullReview.meal) + ", " + str(self.menuItemServed.menuItem.name)