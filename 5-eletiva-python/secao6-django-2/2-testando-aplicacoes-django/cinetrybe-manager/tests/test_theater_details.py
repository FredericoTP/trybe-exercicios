from pytest_django.asserts import assertTemplateUsed, assertContains
from movies.models import MovieRoom


def test_if_response_is_200(client):
    response = client.get("/1/rooms")
    assert response.status_code == 200


def test_if_response_is_404_when_movie_theater_does_not_exists(client):
    response = client.get("/2/rooms")
    assert response.status_code == 404


def test_correct_template_is_rendered(client):
    response = client.get("/1/rooms")
    assertTemplateUsed(response, "theater_details.html")


def test_if_template_contains_created_room(client):
    room_1 = MovieRoom.objects.get(id=1)
    response = client.get("/1/rooms")
    assertContains(response, room_1)
