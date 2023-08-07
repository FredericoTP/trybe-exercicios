from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.music_model import MusicModel

music_controler = Blueprint("musics", __name__)


@music_controler.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), 201


@music_controler.route("/random", methods=["GET"])
def music_random():
    music = MusicModel.get_random()

    if music is None:
        return jsonify({"error": "No musics available"}), 404

    return jsonify(music.to_dict()), 200
