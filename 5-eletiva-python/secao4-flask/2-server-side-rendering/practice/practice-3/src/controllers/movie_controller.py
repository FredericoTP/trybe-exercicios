from flask import Blueprint, render_template

movie_controller = Blueprint("movie_controller", __name__)

movies = [
    {"title": "Harry Potter e o Prisioneiro de Azkhaban", "year": 2004},
    {"title": "Interestelar", "year": 2014},
    {"title": "A Chegada", "year": 2016},
]


@movie_controller.route("/", methods=["GET"])
def index():
    return render_template("index.html", movies=movies)
