from django.shortcuts import render,redirect,get_object_or_404
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from .forms import *
from django.http import JsonResponse
import json

class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')
    
    def post(self, request):
        pass
    
class LoginView(View):
    def get(self, request, *args, **kwargs):
        form = LoginForm()
        return render(request, 'login.html', {'form': form})
    
    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            nome_jogador = form.cleaned_data['nome_jogador']
            partido_politico = form.cleaned_data['partido_politico']
            
            jogador, created = Jogador.objects.get_or_create(
                nome_jogador=nome_jogador,
                defaults={'partido_politico': partido_politico}
            )
            
            if not created:
                jogador.partido_politico = partido_politico
                jogador.save()
            
            # Armazena o nome do jogador na sessão
            request.session['nome_jogador'] = nome_jogador
            
            return redirect('main')
        
        return render(request, 'login.html', {'form': form})

    
class MainView(View):
    def get(self, request, *args, **kwargs):
        nome_jogador = request.session.get('nome_jogador', 'Visitante')
        return render(request, 'main.html', {'nome_jogador': nome_jogador})
    
    def post(self, request):
        pass


class DesempenhoView(View):
    def get(self, request, *args, **kwargs):
        nome_jogador = request.session.get('nome_jogador', 'Visitante')
        return render(request, 'desempenho.html')

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        nome_jogador = data.get('nome_jogador')
        popularidade_final = data.get('popularidade')
        economia_final = data.get('economia')

        jogador = Jogador.objects.get(nome=nome_jogador)
        desempenho = Desempenho(
            nome_jogador=jogador,
            popularidade_final=popularidade_final,
            economia_final=economia_final
        )
        desempenho.save()

        return JsonResponse({'status': 'success'})
        
@csrf_exempt
def save_desempenho(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        nome_jogador = data.get('nome_jogador')
        economia = data.get('economia')
        popularidade = data.get('popularidade')

        # Buscar a instância do jogador
        jogador = get_object_or_404(Jogador, nome_jogador=nome_jogador)

        # Criar a instância de Desempenho
        desempenho = Desempenho(nome_jogador=jogador, economia_final=economia, popularidade_final=popularidade)
        desempenho.save()

        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)
