# Generated by Django 4.1.5 on 2023-03-05 14:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0060_remove_cars_orders_remove_carorders_car_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Car_Order_Connection',
        ),
    ]
