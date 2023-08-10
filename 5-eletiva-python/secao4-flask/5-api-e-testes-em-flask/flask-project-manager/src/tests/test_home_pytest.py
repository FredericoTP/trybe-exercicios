from mocks.home import project_cards, project_titles, unknown_page


def test_status_response(response):
    assert response.status_code == 200


def test_quantity_of_projects(response):
    assert response.text.count(project_cards) == 3


def test_projects_titles(response):
    assert project_titles[1] in response.text
    assert project_titles[2] in response.text
    assert project_titles[3] in response.text


def test_unknown_page(client):
    response = client.get("/unknown")
    assert response.status_code == 404
    assert unknown_page["title"] in response.text
    assert unknown_page["text"] in response.text
