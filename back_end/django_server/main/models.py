from django.db import models

# Create your models here.
class College(models.Model):
    name = models.CharField(max_length=20, primary_key=True)

    def __str__(self):
        return self.name

class Reviewer(models.Model):
    netid = models.CharField(max_length=20, primary_key=True)
    email = models.EmailField(max_length=30)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    numreviews = models.IntegerField(default=0)

    def __str__(self):
        return self.netid

class Servery(models.Model):
    name = models.CharField(max_length=20, primary_key=True)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.name



class MealType(models.Model):
    name = models.CharField(max_length=10, primary_key=True)

    def __str__(self):
        return self.name

class Meal(models.Model):
    servery = models.ForeignKey(Servery, on_delete=models.CASCADE)
    mealType = models.ForeignKey(MealType, on_delete=models.CASCADE)
    servedDate = models.DateField()

    def __str__(self):
        return str(self.servedDate) + "_" + str(self.mealType) + "_" + str(self.servery)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['servery', 'mealType', 'servedDate'], name='meal constraint'
            )
        ]

class MenuItemDiet(models.Model):
    menuItem = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    eggs = models.BooleanField()
    fish = models.BooleanField()
    gluten = models.BooleanField()
    milk = models.BooleanField()
    peanuts = models.BooleanField()
    shellfish = models.BooleanField()
    soy = models.BooleanField()
    treeNuts = models.BooleanField()
    vegan = models.BooleanField()
    vegetarian = models.BooleanField()

    def __str__(self):
        return self.menuItem.name
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['menuItem','eggs','fish','gluten','milk','peanuts',
                        'shellfish','soy','treeNuts','vegan','vegetarian'], name='menuItemDiet constraint'
            )
        ]

class MenuItemDietServed(models.Model):
    menuItemDiet = models.ForeignKey(MenuItemDiet, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.menuItemDiet.menuItem.name) + " @ " + str(self.meal)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['menuItemDiet', 'meal'], name='menu item constraint'
            )
        ]

class FullReview(models.Model):
    reviewer = models.ForeignKey(Reviewer, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    reviewText = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.reviewer.netid) + ": " + str(self.meal)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['reviewer', 'meal'], name='unique reviewer, meal'
            )
        ]

class ReviewItem(models.Model):
    fullReview = models.ForeignKey(FullReview, on_delete=models.CASCADE)
    menuItemDietServed = models.ForeignKey(MenuItemDietServed, on_delete=models.CASCADE)
    reviewText = models.CharField(max_length=200)
    complete = models.BooleanField()
    rating = models.IntegerField()

    def __str__(self):
        return str(self.fullReview.reviewer.netid) + ": " + str(self.fullReview.meal) + ", " + str(self.menuItemDietServed.menuItemDiet.name)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['fullReview', 'menuItemDietServed'], name='unique review, menuItemDietServed'
            )
        ]