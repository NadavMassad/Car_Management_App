# Generated by Django 4.1.5 on 2023-03-14 10:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0066_remove_drivings_car_remove_drivings_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carorders',
            name='fromDate',
            field=models.DateTimeField(verbose_name='DD-MM-YYYY'),
        ),
        migrations.AlterField(
            model_name='carorders',
            name='orderDate',
            field=models.DateField(default=datetime.date.today, verbose_name='DD-MM-YYYY'),
        ),
        migrations.AlterField(
            model_name='carorders',
            name='toDate',
            field=models.DateTimeField(verbose_name='DD-MM-YYYY'),
        ),
        migrations.AlterField(
            model_name='logs',
            name='logDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 14, 12, 33, 15, 110797)),
        ),
    ]