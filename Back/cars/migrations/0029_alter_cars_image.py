# Generated by Django 4.1.5 on 2023-02-27 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0028_alter_cars_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cars',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='static/images'),
        ),
    ]
