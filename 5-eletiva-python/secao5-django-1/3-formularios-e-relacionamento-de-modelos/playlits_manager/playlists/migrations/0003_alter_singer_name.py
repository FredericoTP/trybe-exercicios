# Generated by Django 4.2.4 on 2023-08-18 13:54

from django.db import migrations, models
import playlists.validators


class Migration(migrations.Migration):
    dependencies = [
        ("playlists", "0002_alter_music_length_in_seconds"),
    ]

    operations = [
        migrations.AlterField(
            model_name="singer",
            name="name",
            field=models.CharField(
                max_length=50, validators=[playlists.validators.validate_name]
            ),
        ),
    ]