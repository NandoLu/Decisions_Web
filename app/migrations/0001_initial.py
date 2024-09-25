# Generated by Django 5.1.1 on 2024-09-23 10:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cenario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cenario_nivel', models.IntegerField(verbose_name='Nível do cenário')),
                ('descricao_cenario', models.CharField(max_length=100, verbose_name='Descrição do cenário')),
                ('impacto_cenario', models.CharField(max_length=100, verbose_name='Impacto do cenário')),
            ],
            options={
                'verbose_name': 'Cenário',
                'verbose_name_plural': 'Cenários',
            },
        ),
        migrations.CreateModel(
            name='Jogador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_jogador', models.CharField(max_length=100, verbose_name='Nome do jogador')),
            ],
            options={
                'verbose_name': 'Nome do jogador',
                'verbose_name_plural': 'Nomes dos jogadores',
            },
        ),
        migrations.CreateModel(
            name='Partido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('partido_politico', models.CharField(max_length=100, verbose_name='Nome do partido')),
            ],
            options={
                'verbose_name': 'Partido',
                'verbose_name_plural': 'Partidos',
            },
        ),
        migrations.CreateModel(
            name='Desempenho',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('popularidade_final', models.IntegerField(verbose_name='Popularidade final')),
                ('economia_final', models.IntegerField(verbose_name='Economia final')),
                ('nome_jogador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.jogador', verbose_name='Nome do jogador')),
            ],
            options={
                'verbose_name': 'Desempenho',
                'verbose_name_plural': 'Desempenhos',
            },
        ),
        migrations.CreateModel(
            name='Configuracao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idioma', models.CharField(max_length=9, verbose_name='Idioma escolhido')),
                ('tema', models.CharField(max_length=6, verbose_name='Tema escolhido')),
                ('nome_jogador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.jogador', verbose_name='Nome do jogador')),
            ],
            options={
                'verbose_name': 'Configuração',
                'verbose_name_plural': 'Configurações',
            },
        ),
        migrations.AddField(
            model_name='jogador',
            name='partido_politico',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.partido', verbose_name='Nome do partido'),
        ),
    ]
