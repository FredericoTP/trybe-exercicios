from django import forms
from playlists.validators import validate_music_length, validate_name


class CreateMusicForm(forms.Form):
    name = forms.CharField(
        max_length=50,
        validators={validate_name},
        label="Nome da música",
    )
    recorded_at = forms.DateField(
        label="Data da gravação",
        initial="2023-07-06",
        widget=forms.DateInput(attrs={"type": "date"}),
    )
    length_in_seconds = forms.IntegerField(
        validators=[validate_music_length],
        label="Duração em segundos",
    )


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()


class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50, validators=[validate_name])
