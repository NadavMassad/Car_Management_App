from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import  status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import CustomUser
from .serializers import *

@api_view(['GET'])
def index(r):
    return Response('index')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['department'] = user.department
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Change username to id of the user
@api_view(['POST'])
def register(request):
    if request.data['roleLevel'] == 'worker':
        roleLevel = 0 
    elif request.data['roleLevel'] == 'dep_manager':
        roleLevel = 1
    elif request.data['roleLevel'] == 'sys_manager':
        roleLevel = 2
    user = CustomUser.objects.create_user(
                first_name = request.data['first_name'],
                last_name = request.data['last_name'],
                username= request.data['first_name'] + request.data['last_name'],
                jobTitle = request.data['jobTitle'],
                roleLevel = roleLevel,
                department = request.data['department'],
                email=request.data['email'],
                password=request.data['password'],
                is_superuser=0
            )
    user.is_active = True
    user.is_staff = True
    user.save()
    return Response("New User Created")

@permission_classes([IsAuthenticated])
class CustomUserView(APIView):
    def get(self, request):
        # user = request.user
        # my_model = user.customUser_set.all()
        my_model = CustomUser.objects.all()
        serializer = CustomUserSerializer(my_model, many=True)
        return Response(serializer.data)
        # return Response("please login...")

    # def post(self, request):
    #     serializer = CustomUserSerializer(
    #         data=request.data, context={'user': request.user})
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request, id):
    #     my_model = CustomUser.objects.get(id=id)
    #     serializer = CustomUserSerializer(my_model, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request, id):
    #     my_model = CustomUser.objects.get(id=id)
    #     my_model.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)

@permission_classes([IsAuthenticated])
class CarsView(APIView):
    def get(self, request):
        my_model = Cars.objects.all()
        print(my_model)
        serializer = CarsSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CarsSerializer(
            data=request.data, context={'department': request.department})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class DepartmentsView(APIView):
    def get(self, request):
        my_model = Departments.objects.all()
        print(my_model)
        serializer = DepartmentsSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DepartmentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@permission_classes([IsAuthenticated])
class CarOrdersView(APIView):
    def get(self, request):
        my_model = CarOrders.objects.all()
        print(my_model)
        serializer = CarOrdersSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CarOrdersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class CarMaintenanceView(APIView):
    def get(self, request):
        my_model = CarMaintenance.objects.all()
        print(my_model)
        serializer = CarMaintenanceSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CarMaintenanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class MaintenanceTypesView(APIView):
    def get(self, request):
        my_model = MaintenanceTypes.objects.all()
        print(my_model)
        serializer = MaintenanceTypesSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MaintenanceTypesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@permission_classes([IsAuthenticated])
class ShiftsView(APIView):
    def get(self, request):
        my_model = Shifts.objects.all()
        print(my_model)
        serializer = ShiftsSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ShiftsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class LogsView(APIView):
    def get(self, request):
        my_model = Logs.objects.all()
        print(my_model)
        serializer = LogsSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LogsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([IsAuthenticated])
class DrivingsView(APIView):
    def get(self, request):
        my_model = Drivings.objects.all()
        print(my_model)
        serializer = DrivingsSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DrivingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
