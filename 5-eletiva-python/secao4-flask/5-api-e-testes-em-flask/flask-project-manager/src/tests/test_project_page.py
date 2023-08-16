import pytest
from app import app
from mocks.project import tasks_cards, task
from mocks.home import project_titles


@pytest.fixture
def client():
    return app.test_client()


@pytest.fixture
def response(client):
    return client.get("/projects/1")


def test_status_response(response):
    assert response.status_code == 200


def test_quantity_of_projects(response):
    assert response.text.count(tasks_cards) == 5


def test_project_title(response):
    assert project_titles[1] in response.text


def test_task_existence(response):
    assert task["open"] in response.text
    assert task["name"] in response.text
    assert task["status"] in response.text
    assert task["responsible"] in response.text
    assert task["description"] in response.text
    assert task["close"] in response.text
