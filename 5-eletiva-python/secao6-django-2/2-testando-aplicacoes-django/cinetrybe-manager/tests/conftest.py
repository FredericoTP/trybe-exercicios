import pytest
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from movies.models import (
    MovieTheater,
    MovieRoom,
    Genre,
    Movie,
    Person,
    MovieSeat,
)


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    pass


@pytest.fixture(scope="session", autouse=True)
def django_db_setup(django_db_setup, django_db_blocker):
    with django_db_blocker.unblock():
        User.objects.create_user(username="testuser", password="12345")

        movie_theater = MovieTheater.objects.create(name="Cine 1")
        genre = Genre.objects.create(name="Suspense")
        direction = Person.objects.create(name="Antoine Fuqua")
        actor = Person.objects.create(name="Denzel Washington")
        actress = Person.objects.create(name="Chloë Grace Moretz")
        movie = Movie.objects.create(
            title="O Protetor",
            direction=direction,
        )
        movie.genre.add(genre)
        movie.actors.add(actor)
        movie.actors.add(actress)

        room = MovieRoom.objects.create(
            name="Sala 1", theater=movie_theater, movie=movie
        )

        MovieSeat.objects.create(name="A1", room=room)
        MovieSeat.objects.create(name="A2", room=room)
        MovieSeat.objects.create(name="A3", room=room)
        MovieSeat.objects.create(name="A4", room=room, is_occupied=True)
        MovieSeat.objects.create(name="A5", room=room, is_occupied=True)
