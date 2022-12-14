# Generated by Django 4.1.1 on 2022-11-04 20:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_menuitemdietserved_rating'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menuitemdietserved',
            name='rating',
        ),
        migrations.CreateModel(
            name='MenuItemDietRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, default=None, max_digits=3, null=True)),
                ('numReviews', models.IntegerField()),
                ('menuItemDiet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.menuitemdiet')),
                ('servery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.servery')),
            ],
        ),
        migrations.AddConstraint(
            model_name='menuitemdietrating',
            constraint=models.UniqueConstraint(fields=('menuItemDiet', 'servery', 'rating'), name='menu item diet rating constraint'),
        ),
    ]
