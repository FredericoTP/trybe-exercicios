from django import forms
from playlists.validators import validate_music_length


class CreateMusicForm(forms.Form):
    name = forms.CharField(max_length=50)
    recorded_at = forms.DateField()
    length_in_seconds = forms.IntegerField(validators=[validate_music_length])


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()


class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50)
