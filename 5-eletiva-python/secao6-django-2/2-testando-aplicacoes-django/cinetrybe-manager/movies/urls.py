from django.urls import path, include
from rest_framework.authtoken import views
from movies.views import (
    index,
    theater_details,
    room_details,
    MovieTheaterViewSet,
    MovieViewSet,
    MovieRoomViewSet,
    MovieSeatViewSet,
    PersonViewSet,
    GenreViewSet,
)
from rest_framework import routers

router = routers.DefaultRouter()


router.register("people", PersonViewSet)
router.register("genres", GenreViewSet)
router.register("movies", MovieViewSet)
router.register("movie-theaters", MovieTheaterViewSet)
router.register("movie-rooms", MovieRoomViewSet)
router.register("movie-seats", MovieSeatViewSet)


urlpatterns = [
    path("", index, name="homepage"),
    path("<int:theater_id>/rooms", theater_details, name="theater_details"),
    path(
        "<int:theater_id>/room/<int:room_id>/seats",
        room_details,
        name="room_details"
    ),
    path("api/", include(router.urls)),
    path("api/generate-token", views.obtain_auth_token, name="api_token_auth"),
]
