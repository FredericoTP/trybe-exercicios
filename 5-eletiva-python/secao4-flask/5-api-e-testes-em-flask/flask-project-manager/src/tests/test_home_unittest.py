import unittest
from app import app
from mocks.home import project_cards, project_titles, unknown_page


class TestHome(unittest.TestCase):
    def setUp(self):
        test_app = app.test_client()
        self.response = test_app.get("/")

    def test_status_response(self):
        self.assertEqual(self.response.status_code, 200)

    def test_quantity_of_projects(self):
        self.assertEqual(self.response.text.count(project_cards), 3)

    def test_projects_titles(self):
        self.assertTrue(project_titles[1] in self.response.text)
        self.assertTrue(project_titles[2] in self.response.text)
        self.assertTrue(project_titles[3] in self.response.text)

    def test_unknown_route(self):
        response = app.test_client().get("/unknown")
        self.assertEqual(response.status_code, 404)
        self.assertTrue(unknown_page["title"] in response.text)
        self.assertTrue(unknown_page["text"] in response.text)
