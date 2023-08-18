from django.urls import path
from playlists.views import music, singer


urlpatterns = [
    path("musics/", music, name="musics-page"),
    path("singers/", singer, name="singers-page"),
]
