from rest_framework import serializers
from .models import (Profile,
                     Cars,
                     CarMaintenance,
                     CarOrders,
                     Departments,
                     Drivings,
                     Logs,
                     MaintenanceTypes,
                     Shifts)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
    def create(self, validate_data):
        user = self.context['user']
        return Profile.objects.create(**validate_data,user=user)


class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cars
        fields = '__all__'


class CarMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarMaintenance
        fields = '__all__'


class CarOrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarOrders
        fields = '__all__'


class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = '__all__'


class DrivingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drivings
        fields = '__all__'


class LogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logs
        fields = '__all__'


class MaintenanceTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaintenanceTypes
        fields = '__all__'


class ShiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shifts
        fields = '__all__'
