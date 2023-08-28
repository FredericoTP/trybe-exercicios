from django.contrib.auth.models import User


def test_get_all_people(client):
    response = client.get("/api/people/")
    amount_of_people = len(response.json())
    assert response.status_code == 200
    assert amount_of_people == 3


def test_get_one_movie_theater(client):
    response = client.get("/api/people/1/")
    assert response.status_code == 200
    assert response.json()["name"] == "Antoine Fuqua"


def test_unauthorized_post(client):
    response = client.post("/api/people/", {"name": "Jack Black"})
    assert response.status_code == 401


def test_authorized_post(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.post("/api/people/", {"name": "Jack Black"})

    assert response.status_code == 201
    assert response.json()["name"] == "Jack Black"


def test_unauthorized_put(client):
    response = client.put("/api/people/1/", {"name": "Antonio Banderas"})
    assert response.status_code == 401


def test_authorized_put(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.put("/api/people/1/", {"name": "Antonio Banderas"})

    assert response.status_code == 200
    assert response.json()["name"] == "Antonio Banderas"


def test_unauthorized_delete(client):
    response = client.delete("/api/people/1/")
    assert response.status_code == 401


def test_authorized_delete(client):
    user = User.objects.get(id=1)
    client.force_authenticate(user)
    response = client.delete("/api/people/1/")
    assert response.status_code == 204
