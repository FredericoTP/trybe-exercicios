from django.shortcuts import render
from playlists.forms import CreateMusicForm, CreateSingerForm


# Create your views here.
def music(request):
    form = CreateMusicForm()
    context = {"form": form}
    return render(request, "music.html", context)


def singer(request):
    form = CreateSingerForm()
    context = {"form": form}
    return render(request, "singer.html", context)
