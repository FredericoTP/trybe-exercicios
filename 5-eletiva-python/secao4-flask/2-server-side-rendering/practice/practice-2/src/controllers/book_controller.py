from flask import Blueprint, render_template

from models.book_model import book

book_controller = Blueprint("book_controller", __name__)


@book_controller.route("/")
def index():
    return render_template("book.html", book=book)
