from flask import Flask
from controllers.product_controller import product_controller

app = Flask(__name__)

app.template_folder = "views/templates"
app.static_folder = "views/statics"

app.register_blueprint(product_controller, url_prefix="/")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    app.run(debug=True, host=host, port=port)


if __name__ == "__main__":
    start_server()
