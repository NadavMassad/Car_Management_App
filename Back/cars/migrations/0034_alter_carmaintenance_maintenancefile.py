# Generated by Django 4.1.5 on 2023-02-27 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0033_alter_carmaintenance_maintenancefile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carmaintenance',
            name='maintenanceFile',
            field=models.FileField(blank=True, max_length=200, upload_to='maintenance/'),
        ),
    ]
