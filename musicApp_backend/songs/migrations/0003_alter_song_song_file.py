# Generated by Django 4.1.5 on 2023-02-17 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0002_song_song_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='song_file',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]
