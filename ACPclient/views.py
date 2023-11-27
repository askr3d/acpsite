from django.shortcuts import render
from django.urls import reverse

# Create your views here.


def index(request):
    ruta_actual = reverse('ACPclient:index')
    return render(request=request, template_name='ACPclient/home.html', context={'ruta': ruta_actual})


def blog(request):
    return render(request=request, template_name="ACPclient/blog.html", context={'ruta': request.path})

def donaciones(request):
    return render(request=request, template_name='ACPclient/donaciones.html', context={'ruta': request.path})

def causas(request):
    return render(request=request, template_name='ACPclient/causas.html', context={'ruta': request.path})

def entrada_blog(request):
    return render(request=request, template_name='ACPclient/entrada_blog.html', context={'ruta': request.path})