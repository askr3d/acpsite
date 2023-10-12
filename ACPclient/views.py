from django.shortcuts import render
from django.urls import reverse

# Create your views here.


def index(request):
    ruta_actual = reverse('ACPclient:index')
    return render(request=request, template_name='ACPclient/home.html', context={'ruta': ruta_actual})


def blog(request):
    return render(request=request, template_name="ACPclient/blog.html", context={'ruta': request.path})


