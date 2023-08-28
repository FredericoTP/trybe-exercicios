from django.contrib.auth.models import User
from movies.models import (
    Person,
    Genre,
    Movie,
    MovieTheater,
    MovieRoom,
    MovieSeat,
)


def test_user_table_is_healthy():
    number_of_users = len(User.objects.all())
    assert number_of_users == 1

    User.objects.create(username="felps", password="terceS")
    number_of_users = len(User.objects.all())
    assert number_of_users == 2

    user = User.objects.get(id=1)
    user.delete()
    number_of_users = len(User.objects.all())
    assert number_of_users == 1


def test_people_table_is_healthy():
    amount_of_people = len(Person.objects.all())
    assert amount_of_people == 3

    Person.objects.create(name="Kimberly Peirce")
    amount_of_people = len(Person.objects.all())
    assert amount_of_people == 4

    person = Person.objects.get(id=4)
    person.delete()
    amount_of_people = len(Person.objects.all())
    assert amount_of_people == 3


def test_genre_table_is_healthy():
    number_of_genres = len(Genre.objects.all())
    assert number_of_genres == 1

    Genre.objects.create(name="Ação")
    number_of_genres = len(Genre.objects.all())
    assert number_of_genres == 2

    genre = Genre.objects.get(id=1)
    genre.delete()
    number_of_genres = len(Genre.objects.all())
    assert number_of_genres == 1


def test_movies_table_is_healthy():
    number_of_movies = len(Movie.objects.all())
    assert number_of_movies == 1

    Movie.objects.create(
        title="Carrie", direction=Person.objects.create(name="Kimberly Peirce")
    )
    number_of_movies = len(Movie.objects.all())
    assert number_of_movies == 2

    movie = Movie.objects.get(id=1)
    movie.delete()
    number_of_movies = len(Movie.objects.all())
    assert number_of_movies == 1


def test_movie_theaters_table_is_healthy():
    number_of_movie_theaters = len(MovieTheater.objects.all())
    assert number_of_movie_theaters == 1

    MovieTheater.objects.create(name="Cine 2")
    number_of_movie_theaters = len(MovieTheater.objects.all())
    assert number_of_movie_theaters == 2

    movie_theater = MovieTheater.objects.get(id=1)
    movie_theater.delete()
    number_of_movie_theaters = len(MovieTheater.objects.all())
    assert number_of_movie_theaters == 1


def test_movie_rooms_table_is_healthy():
    number_of_movie_rooms = len(MovieRoom.objects.all())
    assert number_of_movie_rooms == 1

    movie_theater = MovieTheater.objects.get(id=1)
    movie = Movie.objects.get(id=1)
    MovieRoom.objects.create(name="Sala 2", theater=movie_theater, movie=movie)
    number_of_movie_rooms = len(MovieRoom.objects.all())
    assert number_of_movie_rooms == 2

    movie_room = MovieRoom.objects.get(id=1)
    movie_room.delete()
    number_of_movie_rooms = len(MovieRoom.objects.all())
    assert number_of_movie_rooms == 1


def test_movie_seats_table_is_healthy():
    number_of_seats = len(MovieSeat.objects.all())
    assert number_of_seats == 5

    MovieSeat.objects.create(name="A6", room=MovieRoom.objects.get(id=1))
    number_of_seats = len(MovieSeat.objects.all())
    assert number_of_seats == 6

    movie_seat = MovieSeat.objects.get(id=1)
    movie_seat.delete()
    number_of_seats = len(MovieSeat.objects.all())
    assert number_of_seats == 4
