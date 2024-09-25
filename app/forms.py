from django.shortcuts import render
from django import forms
from .models import *

class LoginForm(forms.ModelForm):
    class Meta:
        model = Jogador
        fields = ['nome_jogador', 'partido_politico']

