from datetime import datetime
from flask import Blueprint, render_template

home_controller = Blueprint("home_controller", __name__)


@home_controller.route("/", methods=["GET"])
def index():
    return render_template("index.html", greeting=_get_greeting())


def _get_greeting():
    curr_hour = datetime.now().hour
    if curr_hour < 6:
        return "Boa noite"
    if curr_hour < 12:
        return "Bom dia"
    if curr_hour < 18:
        return "Boa tarde"
    return "Boa noite"
