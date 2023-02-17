# Generated by Django 4.1.5 on 2023-02-17 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank='', max_length=50)),
                ('description', models.TextField(blank=True, max_length=255, null=True)),
                ('visibility', models.IntegerField(choices=[(0, 'Public'), (1, 'Private')], default=0)),
            ],
        ),
    ]
