import pytest
from app import app


@pytest.fixture
def client():
    return app.test_client()


@pytest.fixture
def response(client):
    return client.get("/")
