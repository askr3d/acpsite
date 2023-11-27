from django.urls import path

from . import views

app_name = "ACPclient"

urlpatterns = [
    # Vistas Cliente
    path('', views.index, name="index"),
    path('blog/', views.blog, name="blog"),
    path('donaciones/', views.donaciones, name="donaciones"),
    path('causas/', views.causas, name="causas"),
    path('entrada_blog/', views.entrada_blog, name="entrada_blog"),
]
