from django.urls import path
from .views import *

urlpatterns = [
     path('', IndexView.as_view(), name='index'),
     path('login/', LoginView.as_view(), name='login'),
     path('main/', MainView.as_view(), name='main'),
     path('desempenho/', DesempenhoView.as_view(), name='desempenho'),
     path('save-desempenho/', save_desempenho, name='save_desempenho'),
 ]