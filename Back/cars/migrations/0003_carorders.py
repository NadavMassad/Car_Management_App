# Generated by Django 4.1.5 on 2023-02-23 07:22

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0002_cars_departments'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarOrders',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('orderDate', models.DateField(default=datetime.date.today)),
                ('fromDate', models.DateField()),
                ('toDate', models.DateField()),
                ('fromTime', models.TimeField()),
                ('toTime', models.TimeField()),
                ('isAllDay', models.BooleanField()),
                ('destination', models.CharField(max_length=50)),
                ('carID', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cars.cars')),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
