from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('login', views.MyTokenObtainPairView.as_view()),
    path('reg', views.register), 
    path('profile', views.ProfileView.as_view()),
    # path('profile/<id>', views.ProfileView.as_view()),
    path('cars', views.CarsView.as_view()),
    path('cars/<id>', views.CarsView.as_view()),
    path('departments', views.DepartmentsView.as_view()),
    path('departments/<id>', views.DepartmentsView.as_view()),
    path('orders', views.CarOrdersView.as_view()),
    path('orders/<id>', views.CarOrdersView.as_view()),
    path('carmaintenance', views.CarMaintenanceView.as_view()),
    path('carmaintenance/<id>', views.CarMaintenanceView.as_view()),
    path('maintenancetype', views.MaintenanceTypesView.as_view()),
    path('maintenancetype/<id>', views.MaintenanceTypesView.as_view()),
    path('shifts', views.ShiftsView.as_view()),
    path('shifts/<id>', views.ShiftsView.as_view()),
    path('logs', views.LogsView.as_view()),
    path('logs/<id>', views.LogsView.as_view()),
    path('drives', views.DrivingsView.as_view()),
    path('drives/<id>', views.DrivingsView.as_view()),
]
