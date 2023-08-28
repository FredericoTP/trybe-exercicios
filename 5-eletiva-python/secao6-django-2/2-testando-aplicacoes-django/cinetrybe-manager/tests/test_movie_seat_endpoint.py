from django.contrib.auth.models import User


def test_get_all_movie_seats(client):
    response = client.get("/api/movie-seats/")
    number_of_movie_seats = len(response.json())
    assert response.status_code == 200
    assert number_of_movie_seats == 5


def test_get_one_movie_seat(client):
    response = client.get("/api/movie-seats/1/")
    assert response.status_code == 200
    assert response.json()["name"] == "A1"


def test_unauthorized_post(client):
    response = client.post(
        "/api/movie-seats/",
        {"name": "A12", "room": "1"},
    )
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post(
        "/api/movie-seats/",
        {"name": "A12", "room": "1"},
    )
    assert response.status_code == 201
    assert response.json()["name"] == "A12"


def test_unauthorized_put(client):
    response = client.put(
        "/api/movie-seats/1/",
        {"name": "A12", "room": "1"},
    )
    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.put(
        "/api/movie-seats/1/",
        {"name": "A12", "room": "1"},
    )
    assert response.status_code == 200
    assert response.json()["name"] == "A12"


def test_unauthorized_delete(client):
    response = client.delete("/api/movie-seats/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/movie-seats/1/")
    assert response.status_code == 204
