from flask import Flask
from controllers.task_controller import task_controller

app = Flask(__name__)

app.template_folder = "views/templates"
app.static_folder = "views/statics"

app.register_blueprint(task_controller, url_prefix="/")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    app.run(debug=True, host=host, port=port)


if __name__ == "__main__":
    start_server()
