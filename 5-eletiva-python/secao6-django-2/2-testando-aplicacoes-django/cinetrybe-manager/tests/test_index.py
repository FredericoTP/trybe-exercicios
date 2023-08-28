from pytest_django.asserts import assertTemplateUsed, assertContains
from movies.models import MovieTheater


def test_if_response_is_200(client):
    response = client.get("/")
    assert response.status_code == 200


def test_correct_template_is_rendered(client):
    response = client.get("/")
    assertTemplateUsed(response, "index.html")


def test_if_template_contains_created_theater(client):
    cine_1 = MovieTheater.objects.get(id=1)
    response = client.get("/")
    assertContains(response, cine_1)
