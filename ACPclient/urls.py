from django.urls import path

from . import views

app_name = "ACPclient"

urlpatterns = [
    # Vistas Cliente
    path('', views.index, name="index"),
    path('blog/', views.blog, name="blog"),
]
