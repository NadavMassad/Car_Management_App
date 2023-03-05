# Generated by Django 4.1.5 on 2023-03-02 12:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cars', '0051_alter_profile_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='cars',
            field=models.ManyToManyField(through='cars.CarOrders', to='cars.cars'),
        ),
        migrations.AlterField(
            model_name='carorders',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cars.profile'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
