import pytest
from app import app
from mocks.not_found import message


@pytest.fixture
def client():
    return app.test_client()


@pytest.fixture
def response(client):
    return client.get("/unknown")


def test_status_response(response):
    assert response.status_code == 404


def test_content(response):
    assert message in response.text
