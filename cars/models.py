import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    jobTitle = models.CharField(max_length=50, blank=True)
    department = models.IntegerField(blank=False, default=-1)
    roleLevel = models.SmallIntegerField(blank=True, default=0)
    
    def __str__(self):
        return self.username


class Departments(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Cars(models.Model):
    id = models.BigAutoField(primary_key=True)
    licenseNum = models.CharField(max_length=20)
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    year = models.CharField(max_length=20)

    def __str__(self):
        return self.model


class CarOrders(models.Model):
    id = models.BigAutoField(primary_key=True)
    userID = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    carID = models.ForeignKey(Cars, on_delete=models.PROTECT)
    orderDate = models.DateField(default=datetime.date.today)
    fromDate = models.DateField()
    toDate = models.DateField()
    fromTime = models.TimeField(auto_now=False, blank=True, default=datetime.time(0,0,0))
    toTime = models.TimeField(auto_now=False, blank=True, default=datetime.time(23,59,59))
    isAllDay = models.BooleanField()
    destination = models.CharField(max_length=50)

    def __str__(self) :
        return str(self.orderDate) + " : " +  self.userID.first_name + " " + self.userID.last_name 

# creating an instance of
# datetime.time
# time(hour = 0, minute = 0, second = 0)
# d = datetime.time(10, 33, 45)

# creating an instance of
# datetime.date
# d = datetime.date(1997, 10, 19)

class CarMaintenance(models.Model):
    id = models.BigAutoField(primary_key=True)
    carID = models.ForeignKey(Cars, on_delete=models.PROTECT)
    maintenanceDate = models.DateField()
    maintenanceFile = models.FileField(upload_to='maintenance/', max_length=200)
    testDate = models.DateField()
    testFile = models.FileField(upload_to='car_test/', max_length=200)
    mekifFile = models.FileField(upload_to='mekif/', max_length=200)
    hovaFile = models.FileField(upload_to='hova/', max_length=200)
    kilometer = models.IntegerField()

    def __str__(self):
        return str(self.carID.model) + " : " + str(self.maintenanceDate)

class MaintenanceTypes(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Shifts(models.Model):
    id = models.BigAutoField(primary_key=True)
    userID = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    carID = models.ForeignKey(Cars, on_delete=models.PROTECT)
    shiftDate = models.DateField()
    maintenanceTypeID = models.ForeignKey(
        MaintenanceTypes, on_delete=models.PROTECT)

    def __str__(self):

        return self.userID.first_name + ": " + self.maintenanceTypeID.name

class Logs(models.Model):
    id = models.BigAutoField(primary_key=True)
    logDate = models.DateTimeField()
    userID = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    carID = models.ForeignKey(Cars, on_delete=models.PROTECT)
    action = models.CharField(max_length=50)

    def __str__(self):
        return str(self.logDate)

class Drivings(models.Model):
    id = models.BigAutoField(primary_key=True)
    userID = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    carID = models.ForeignKey(Cars, on_delete=models.PROTECT)
    startDate = models.DateField(default=datetime.date.today)
    endDate = models.DateField()
    fromTime = models.TimeField(auto_now=False)
    toTime = models.TimeField(auto_now=False)
    startKilometer = models.IntegerField()
    endKilometer = models.IntegerField()
    comments = models.CharField(max_length=200)
    startImg1 = models.ImageField(null=True,blank=True,default='/placeholder.png')
    startImg2 = models.ImageField(null=True,blank=True,default='/placeholder.png')
    startImg3 = models.ImageField(null=True,blank=True,default='/placeholder.png')
    endImg1 = models.ImageField(null=True,blank=True,default='/placeholder.png')
    endImg1 = models.ImageField(null=True,blank=True,default='/placeholder.png')
    endImg1 = models.ImageField(null=True,blank=True,default='/placeholder.png')

    def __str__(self):
        return self.userID.username + " - " + self.carID.model