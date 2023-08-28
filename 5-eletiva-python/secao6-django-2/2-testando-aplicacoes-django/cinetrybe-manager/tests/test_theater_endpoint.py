from django.contrib.auth.models import User


def test_get_all_movie_theaters(client):
    response = client.get("/api/movie-theaters/")
    number_of_movie_theaters = len(response.json())
    assert response.status_code == 200
    assert number_of_movie_theaters == 1


def test_get_one_movie_theater(client):
    response = client.get("/api/movie-theaters/1/")
    assert response.status_code == 200
    assert response.json()["name"] == "Cine 1"


def test_unauthorized_post(client):
    response = client.post("/api/movie-theaters/", {"name": "Cine 2"})
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post("/api/movie-theaters/", {"name": "Cine 2"})

    assert response.status_code == 201
    assert response.json()["name"] == "Cine 2"


def test_unauthorized_put(client):
    response = client.put("/api/movie-theaters/1/", {"name": "Cinema 1"})

    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.put("/api/movie-theaters/1/", {"name": "Cinema 1"})

    assert response.status_code == 200
    assert response.json()["name"] == "Cinema 1"


def test_unauthorized_delete(client):
    response = client.delete("/api/movie-theaters/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/movie-theaters/1/")

    assert response.status_code == 204
