from flask import Flask
from controllers.jokes_controller import jokes_controller
from controllers.home_controller import home_controller
from controllers.chat_controller import chat_controller
from os import environ
from waitress import serve

app = Flask(__name__)

# Indica à aplicação onde ficarão nossos arquivos estáticos e templates
app.static_folder = "views/static"
app.template_folder = "views/templates"

app.register_blueprint(jokes_controller, url_prefix="/jokes")
app.register_blueprint(home_controller, url_prefix="/")
app.register_blueprint(chat_controller, url_prefix="/chat")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        # Servidor de desenvolvimento do Kit Werkzeug
        return app.run(debug=True, host=host, port=port)
    else:
        # Este é o waitress, otimizado para produção
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
