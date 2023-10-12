from django.urls import path

from . import views

app_name = "ACPadmin"

urlpatterns = [
    # Vistas Admin
    path('login/', views.login, name="login"),
]