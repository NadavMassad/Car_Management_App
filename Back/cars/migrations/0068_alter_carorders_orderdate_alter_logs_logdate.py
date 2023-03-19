# Generated by Django 4.1.5 on 2023-03-14 10:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0067_alter_carorders_fromdate_alter_carorders_orderdate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carorders',
            name='orderDate',
            field=models.DateTimeField(default=datetime.date.today, verbose_name='DD-MM-YYYY'),
        ),
        migrations.AlterField(
            model_name='logs',
            name='logDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 14, 12, 40, 43, 58125)),
        ),
    ]
