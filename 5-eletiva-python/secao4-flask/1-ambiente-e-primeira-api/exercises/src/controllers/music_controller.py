from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.music_model import MusicModel

music_controler = Blueprint("musics", __name__)


@music_controler.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), 201
