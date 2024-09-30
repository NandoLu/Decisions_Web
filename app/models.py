# Create your models here.
# Create your models here.
from django.db import models

class Partido(models.Model):
    partido_politico = models.CharField(max_length=100, verbose_name="Nome do partido")
    def __str__(self):
        return self.partido_politico
    class Meta:
        verbose_name = "Partido"
        verbose_name_plural = "Partidos"
        
class Jogador(models.Model):
    nome_jogador = models.CharField(max_length=100, verbose_name="Nome do jogador")
    partido_politico = models.ForeignKey(Partido, on_delete=models.CASCADE, verbose_name="Nome do partido")
    def __str__(self):
        return f"{self.nome_jogador}, {self.partido_politico}"
    class Meta:
        verbose_name = "Nome do jogador"
        verbose_name_plural = "Nomes dos jogadores"

        
class Cenario(models.Model):
    cenario_nivel = models.IntegerField(verbose_name="Nível do cenário")
    descricao_cenario = models.CharField(max_length=100, verbose_name="Descrição do cenário")
    impacto_cenario = models.CharField(max_length=100, verbose_name="Impacto do cenário")
    def __str__(self) -> str:
        return f'{self.cenario_nivel}, {self.descricao_cenario}, {self.impacto_cenario}'
    class Meta:
        verbose_name = "Cenário"
        verbose_name_plural = "Cenários"
         
    
class Desempenho(models.Model):
    nome_jogador = models.ForeignKey(Jogador, on_delete=models.CASCADE, verbose_name="Nome do jogador")
    popularidade_final = models.IntegerField(verbose_name="Popularidade final")
    economia_final = models.IntegerField(verbose_name="Economia final")
    def __str__(self):
        return f'{self.nome_jogador}, {self.popularidade_final}, {self.economia_final}'
    class Meta:
        verbose_name = "Desempenho"
        verbose_name_plural = "Desempenhos"