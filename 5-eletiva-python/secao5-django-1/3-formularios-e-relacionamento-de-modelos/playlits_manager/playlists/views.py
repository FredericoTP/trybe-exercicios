from django.shortcuts import render, redirect
from playlists.forms import CreateMusicForm, CreateSingerForm
from playlists.models import Music, Singer


# Create your views here.
def index(request):
    context = {"musics": Music.objects.all(), "singers": Singer.objects.all()}
    return render(request, "home.html", context)


def music(request):
    form = CreateMusicForm()

    if request.method == "POST":
        form = CreateMusicForm(request.POST)

        if form.is_valid():
            Music.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}
    return render(request, "music.html", context)


def singer(request):
    form = CreateSingerForm()

    if request.method == "POST":
        form = CreateSingerForm(request.POST)

        if form.is_valid():
            Singer.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}
    return render(request, "singer.html", context)
