# Generated by Django 4.1.1 on 2022-11-11 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_menuitemdietrating_numreviews'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='menuitemdietrating',
            name='menu item diet rating constraint',
        ),
        migrations.AddConstraint(
            model_name='menuitemdietrating',
            constraint=models.UniqueConstraint(fields=('menuItemDiet', 'servery'), name='menu item diet rating constraint'),
        ),
    ]
