from django.contrib.auth.models import User


def test_get_all_genres(client):
    response = client.get("/api/genres/")
    amount_of_genres = len(response.json())
    assert response.status_code == 200
    assert amount_of_genres == 1


def test_get_one_genre(client):
    response = client.get("/api/genres/1/")
    assert response.status_code == 200
    assert response.json()["name"] == "Suspense"


def test_unauthorizes_post(client):
    response = client.post("/api/genres/", {"name": "Comédia"})
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post("/api/genres/", {"name": "Comédia"})

    assert response.status_code == 201
    assert response.json()["name"] == "Comédia"


def test_unauthorized_put(client):
    response = client.put("/api/genres/1/", {"name": "Comédia"})
    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.put("/api/genres/1/", {"name": "Comédia"})

    assert response.status_code == 200
    assert response.json()["name"] == "Comédia"


def test_unauthorized_delete(client):
    response = client.delete("/api/genres/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/genres/1/")

    assert response.status_code == 204
