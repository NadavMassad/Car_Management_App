# Generated by Django 4.1.5 on 2023-03-14 19:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0068_alter_carorders_orderdate_alter_logs_logdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carorders',
            name='fromDate',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='carorders',
            name='orderDate',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='carorders',
            name='toDate',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='logs',
            name='logDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 14, 21, 12, 54, 769385)),
        ),
    ]
