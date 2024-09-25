from django.contrib import admin
from .models import *
from django.contrib import admin

admin.site.register(Partido)
admin.site.register(Jogador)
admin.site.register(Desempenho)
admin.site.register(Configuracao)

# Register your models here.