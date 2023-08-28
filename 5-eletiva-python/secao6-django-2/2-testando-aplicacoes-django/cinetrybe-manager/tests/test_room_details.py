from pytest_django.asserts import assertTemplateUsed, assertContains
from movies.models import MovieSeat


def test_if_response_is_200(client):
    response = client.get("/1/room/1/seats")
    assert response.status_code == 200


def test_if_response_is_404_when_movie_theater_does_not_exists(client):
    response = client.get("/2/room/1/seats")
    assert response.status_code == 404


def test_if_response_is_404_when_movie_room_does_not_exists(client):
    response = client.get("/1/room/2/seats")
    assert response.status_code == 404


def test_correct_template_is_rendered(client):
    response = client.get("/1/room/1/seats")
    assertTemplateUsed(response, "room_details.html")


def test_if_template_contains_created_seat(client):
    seat_1 = MovieSeat.objects.get(id=1)
    seat_5 = MovieSeat.objects.get(id=5)
    response = client.get("/1/room/1/seats")
    assertContains(response, seat_1)
    assertContains(response, seat_5)
