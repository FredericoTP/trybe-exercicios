from flask import Flask
from controllers.book_controller import book_controller

app = Flask(__name__)

app.template_folder = "views/templates"

app.register_blueprint(book_controller, url_prefix="/")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    app.run(debug=True, host=host, port=port)


if __name__ == "__main__":
    start_server()
