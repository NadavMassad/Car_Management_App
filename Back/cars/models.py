import datetime
from django.db import models
from django.contrib.auth.models import User


class Departments(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    realID = models.CharField(max_length=10, blank=True)
    jobTitle = models.CharField(max_length=50, blank=True)
    department = models.OneToOneField(
        Departments, on_delete=models.PROTECT,  null=True)
    roleLevel = models.SmallIntegerField(blank=True, default=0)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class Cars(models.Model):
    id = models.BigAutoField(primary_key=True)
    licenseNum = models.CharField(max_length=20)
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    year = models.CharField(max_length=20)
    department = models.ForeignKey(
        Departments, on_delete=models.PROTECT,  null=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png', upload_to='images/')

    def __str__(self):
        return self.model


class CarOrders(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    car = models.ForeignKey(Cars, on_delete=models.CASCADE, null=True)
    orderDate = models.DateField(default=datetime.date.today)
    fromDate = models.DateField()
    toDate = models.DateField()
    fromTime = models.TimeField(
        auto_now=False, blank=True, default=datetime.time(0, 0, 0))
    toTime = models.TimeField(
        auto_now=False, blank=True, default=datetime.time(23, 59, 59))
    isAllDay = models.BooleanField()
    destination = models.CharField(max_length=50)
    carImg = models.CharField(max_length=50, blank=True, null=True)

    @property
    def car_name(self):
        return self.car.make + ' ' + self.car.model

    @property
    def user_name(self):
        return self.user.first_name + ' ' + self.user.last_name

    def __str__(self):
        # return str(self.orderDate)
        return str(self.orderDate) + " : " + self.car_name


class CarMaintenance(models.Model):
    id = models.BigAutoField(primary_key=True)
    car = models.ManyToManyField(Cars)
    maintenanceDate = models.DateField()
    maintenanceFile = models.FileField(
        upload_to='maintenance/', max_length=200, blank=True)
    testDate = models.DateField()
    testFile = models.FileField(
        upload_to='car_test/', max_length=200, blank=True)
    mekifFile = models.FileField(
        upload_to='mekif/', max_length=200, blank=True)
    hovaFile = models.FileField(upload_to='hova/', max_length=200, blank=True)
    kilometer = models.IntegerField()

    def __str__(self):
        return str(self.car.model) + " : " + str(self.maintenanceDate)


class MaintenanceTypes(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Shifts(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ManyToManyField(User)
    car = models.ManyToManyField(Cars)
    shiftDate = models.DateField()
    maintenanceType = models.ManyToManyField(
        MaintenanceTypes)

    def __str__(self):

        return self.userID.first_name + ": " + self.maintenanceTypeID.name


class Logs(models.Model):
    id = models.BigAutoField(primary_key=True)
    logDate = models.DateTimeField()
    user = models.ManyToManyField(User)
    car = models.ManyToManyField(Cars)
    action = models.CharField(max_length=50)

    def __str__(self):
        return str(self.logDate)


class Drivings(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ManyToManyField(User)
    car = models.ManyToManyField(Cars)
    startDate = models.DateField(default=datetime.date.today)
    endDate = models.DateField()
    fromTime = models.TimeField(auto_now=False)
    toTime = models.TimeField(auto_now=False)
    startKilometer = models.IntegerField()
    endKilometer = models.IntegerField()
    comments = models.CharField(max_length=200, blank=True)
    startImg1 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')
    startImg2 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')
    startImg3 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')
    endImg1 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')
    endImg2 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')
    endImg3 = models.ImageField(
        null=True, blank=True, default='/placeholder.png')

    def __str__(self):
        return self.user + " - " + self.car
