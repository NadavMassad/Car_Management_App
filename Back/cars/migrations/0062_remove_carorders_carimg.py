# Generated by Django 4.1.5 on 2023-03-05 17:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0061_delete_car_order_connection'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carorders',
            name='carImg',
        ),
    ]