def test_get_authentication_token_using_wrong_credentials(client):
    response = client.post(
        "/api/generate-token", {"username": "admin", "password": "wrong"}
    )
    assert response.status_code == 400


def test_get_authentication_token(client):
    response = client.post(
        "/api/generate-token", {"username": "testuser", "password": "12345"}
    )
    assert response.status_code == 200
    assert "token" in response.json()


def test_post_new_theater_without_token(client):
    response = client.post("/api/movie-theaters/", {"name": "Cine 2"})
    assert response.status_code == 401


def test_post_new_theater_using_generated_token(client):
    response = client.post(
        "/api/generate-token", {"username": "testuser", "password": "12345"}
    )
    client.credentials(HTTP_AUTHORIZATION="Token " + response.json()["token"])
    response = client.post("/api/movie-theaters/", {"name": "Cine 2"})
    assert response.status_code == 201
    assert response.json()["name"] == "Cine 2"
