# Generated by Django 4.1.5 on 2023-02-28 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0035_alter_cars_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='drivings',
            name='endImg2',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='drivings',
            name='endImg3',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]
