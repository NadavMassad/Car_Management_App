# Generated by Django 4.1.5 on 2023-03-05 13:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cars', '0058_alter_car_order_connection_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carorders',
            name='profile',
        ),
        migrations.AddField(
            model_name='carorders',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
