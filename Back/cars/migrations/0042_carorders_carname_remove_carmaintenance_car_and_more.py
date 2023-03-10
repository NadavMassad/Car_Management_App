# Generated by Django 4.1.5 on 2023-03-02 10:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cars', '0041_remove_carorders_carname'),
    ]

    operations = [
        migrations.AddField(
            model_name='carorders',
            name='carName',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.RemoveField(
            model_name='carmaintenance',
            name='car',
        ),
        migrations.RemoveField(
            model_name='carorders',
            name='car',
        ),
        migrations.RemoveField(
            model_name='carorders',
            name='user',
        ),
        migrations.RemoveField(
            model_name='cars',
            name='department',
        ),
        migrations.RemoveField(
            model_name='drivings',
            name='car',
        ),
        migrations.RemoveField(
            model_name='drivings',
            name='user',
        ),
        migrations.RemoveField(
            model_name='logs',
            name='car',
        ),
        migrations.RemoveField(
            model_name='logs',
            name='user',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='department',
        ),
        migrations.RemoveField(
            model_name='shifts',
            name='car',
        ),
        migrations.RemoveField(
            model_name='shifts',
            name='maintenanceType',
        ),
        migrations.RemoveField(
            model_name='shifts',
            name='user',
        ),
        migrations.AddField(
            model_name='carmaintenance',
            name='car',
            field=models.ManyToManyField(to='cars.cars'),
        ),
        migrations.AddField(
            model_name='carorders',
            name='car',
            field=models.ManyToManyField(to='cars.cars'),
        ),
        migrations.AddField(
            model_name='carorders',
            name='user',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='cars',
            name='department',
            field=models.ManyToManyField(to='cars.departments'),
        ),
        migrations.AddField(
            model_name='drivings',
            name='car',
            field=models.ManyToManyField(to='cars.cars'),
        ),
        migrations.AddField(
            model_name='drivings',
            name='user',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='logs',
            name='car',
            field=models.ManyToManyField(to='cars.cars'),
        ),
        migrations.AddField(
            model_name='logs',
            name='user',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='profile',
            name='department',
            field=models.ManyToManyField(to='cars.departments'),
        ),
        migrations.AddField(
            model_name='shifts',
            name='car',
            field=models.ManyToManyField(to='cars.cars'),
        ),
        migrations.AddField(
            model_name='shifts',
            name='maintenanceType',
            field=models.ManyToManyField(to='cars.maintenancetypes'),
        ),
        migrations.AddField(
            model_name='shifts',
            name='user',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
