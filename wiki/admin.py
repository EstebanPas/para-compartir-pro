from django.contrib import admin

# Register your models here.

from .models import  CustomUser, Catalogo,  Categoria, CicloSiembra, TipoPlanta, ClimaPlanta, Viveros, Localidad, Comunidad




@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_per_page = 10 
    
@admin.register(Catalogo)
class CatalogoAdmin(admin.ModelAdmin):
    
    list_per_page = 10
    

    
@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_per_page = 10
    

    
@admin.register(CicloSiembra)
class CicloSeimbraAdmin(admin.ModelAdmin):
    list_per_page = 10

@admin.register(TipoPlanta)
class TipoPlantaAdmin(admin.ModelAdmin):
    list_per_page = 10

@admin.register(ClimaPlanta)
class ClimaPlantaAdmin(admin.ModelAdmin):
    list_per_page = 10
    
    
@admin.register(Viveros)
class ViverosAdmin(admin.ModelAdmin):
    list_per_page = 10

    
@admin.register(Localidad)
class LocalidadPlantaAdmin(admin.ModelAdmin):
    list_per_page = 10

@admin.register(Comunidad)
class ComunidadAdmin(admin.ModelAdmin):
    
    list_per_page = 10

