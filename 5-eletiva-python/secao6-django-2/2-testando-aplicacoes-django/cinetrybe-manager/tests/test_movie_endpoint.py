from django.contrib.auth.models import User
from movies.models import Person


def test_all_movies(client):
    response = client.get("/api/movies/")
    amount_of_movies = len(response.json())
    assert response.status_code == 200
    assert amount_of_movies == 1


def test_get_one_movie(client):
    response = client.get("/api/movies/1/")
    assert response.status_code == 200
    assert response.json()["title"] == "O Protetor"


def test_unauthorizes_post(client):
    response = client.post(
        "/api/movies/",
        {"title": "Insterestelar", "direction": Person.objects.get(id=1)},
    )
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post(
        "/api/movies/",
        {
            "title": "Interestelar",
            "direction": "1",
            "genre": [1],
            "actors": [2],
        },
    )

    assert response.status_code == 201
    assert response.json()["title"] == "Interestelar"


def test_unauthorized_put(client):
    response = client.put("/api/movies/1/", {"title": "Interestelar"})
    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)

    client.force_authenticate(user)

    response = client.put(
        "/api/movies/1/",
        {
            "title": "Interestelar",
            "direction": "1",
            "genre": [1],
            "actors": [2],
        },
    )

    assert response.status_code == 200
    assert response.json()["title"] == "Interestelar"


def test_unauthorized_delete(client):
    response = client.delete("/api/movies/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/movies/1/")

    assert response.status_code == 204
