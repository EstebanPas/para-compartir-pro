"""
URL configuration for tps090 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),  # Página principal
    path('plantas/', views.plantas, name='plantas'),  # Asegúrate de que esta línea esté presente
    path('catalogo/', views.catalogo, name='catalogo'),  # Página de catálogo
    path('sembrado/', views.sembrado, name='sembrado'),  # Página de sembrado
    path('viveros/', views.viveros, name='viveros'),  # Página de viveros
    path('comunidad/', views.comunidad, name='comunidad'),  # Página del blog
    path('contacto/', views.contacto, name='contacto'),  # Página de contacto
    path('registro/', views.registro, name='registro'),  # Ruta para registrarse
    path('iniciar/', views.iniciar, name='iniciar'),  # Ruta para iniciar sesión
    path('logout/', views.logout_view, name='logout'),
    path('recuperar/', views.recuperar, name='recuperar')  # Ruta para recuperar contraseña

]

