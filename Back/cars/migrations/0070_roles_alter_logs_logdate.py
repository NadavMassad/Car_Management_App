# Generated by Django 4.1.5 on 2023-03-19 16:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0069_alter_carorders_fromdate_alter_carorders_orderdate_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Roles',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AlterField(
            model_name='logs',
            name='logDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 19, 18, 16, 53, 10422)),
        ),
    ]
