# Generated by Django 4.1.5 on 2023-03-02 12:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0052_profile_cars_alter_carorders_user_alter_profile_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='carorders',
            old_name='user',
            new_name='profile',
        ),
    ]
