# Generated by Django 4.1.5 on 2023-03-02 10:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0049_remove_profile_department_profile_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cars',
            name='department',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='cars.departments'),
        ),
    ]