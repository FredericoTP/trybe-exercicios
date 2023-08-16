# from os import environ
# from waitress import serve
from flask import Flask, render_template
from controllers.project_controller import project_controller

app = Flask(__name__)

app.template_folder = "views/templates"
app.static_folder = "views/static"

app.register_blueprint(project_controller)


def start_server(host="0.0.0.0", port=8000):
    app.run(debug=True, host=host, port=port)
    # if environ.get("FLASK_ENV") == "dev":
    #     return app.run(debug=True, host=host, port=port)
    # else:
    #     serve(app, host=host, port=port)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("notFound.html"), 404


if __name__ == "__main__":
    start_server()
