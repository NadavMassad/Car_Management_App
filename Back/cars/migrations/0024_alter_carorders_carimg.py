# Generated by Django 4.1.5 on 2023-02-27 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0023_carorders_carimg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carorders',
            name='carImg',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]