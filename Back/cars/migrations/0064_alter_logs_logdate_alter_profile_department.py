# Generated by Django 4.1.5 on 2023-03-05 20:05

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0063_remove_carmaintenance_car_alter_carorders_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='logs',
            name='logDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 5, 22, 5, 2, 584651)),
        ),
        migrations.AlterField(
            model_name='profile',
            name='department',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='cars.departments'),
        ),
    ]
