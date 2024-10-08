# Generated by Django 5.1.1 on 2024-09-25 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_desempenho_economia_final'),
    ]

    operations = [
        migrations.AlterField(
            model_name='desempenho',
            name='economia_final',
            field=models.IntegerField(verbose_name='Economia final'),
        ),
        migrations.AlterField(
            model_name='desempenho',
            name='popularidade_final',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
