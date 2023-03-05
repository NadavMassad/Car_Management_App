# Generated by Django 4.1.5 on 2023-03-05 14:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0059_remove_carorders_profile_carorders_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cars',
            name='orders',
        ),
        migrations.RemoveField(
            model_name='carorders',
            name='car',
        ),
        migrations.AddField(
            model_name='carorders',
            name='car',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cars.cars'),
        ),
    ]