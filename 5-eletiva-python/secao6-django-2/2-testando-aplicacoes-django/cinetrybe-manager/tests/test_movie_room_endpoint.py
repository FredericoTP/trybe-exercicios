from django.contrib.auth.models import User


def test_get_all_movie_rooms(client):
    response = client.get("/api/movie-rooms/")
    number_of_movie_rooms = len(response.json())
    assert response.status_code == 200
    assert number_of_movie_rooms == 1


def test_get_one_movie_room(client):
    response = client.get("/api/movie-rooms/1/")
    assert response.status_code == 200
    assert response.json()["name"] == "Sala 1"


def test_unauthorized_post(client):
    response = client.post(
        "/api/movie-rooms/",
        {"name": "Sala 2", "theater": "1", "movie": "1"},
    )
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post(
        "/api/movie-rooms/",
        {"name": "Sala 2", "theater": "1", "movie": "1"},
    )
    assert response.status_code == 201
    assert response.json()["name"] == "Sala 2"


def test_unauthorized_put(client):
    response = client.put(
        "/api/movie-rooms/1/",
        {"name": "Sala 2", "theater": "1", "movie": "1"},
    )
    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.put(
        "/api/movie-rooms/1/",
        {"name": "Sala 2", "theater": "1", "movie": "1"},
    )
    assert response.status_code == 200
    assert response.json()["name"] == "Sala 2"


def test_unauthorized_delete(client):
    response = client.delete("/api/movie-rooms/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/movie-rooms/1/")
    assert response.status_code == 204
