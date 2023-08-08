from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.joke_model import JokeModel

jokes_controller = Blueprint("blueprint", __name__)


# ---------
# Métodos privados para serem reutilizados
def _get_all_jokes():
    jokes = JokeModel.find()
    return [joke.to_dict() for joke in jokes]


def _get_joke(id):
    # ObjectId transforma uma string em ID do MongoDb
    return JokeModel.find_one({"_id": ObjectId(id)})


# ---------
# Rotas HTTP para nossa API
@jokes_controller.route("/", methods=["GET"])
def joke_index():
    jokes_list = _get_all_jokes()
    return jsonify(jokes_list)


@jokes_controller.route("/random", methods=["GET"])
def joke_random():
    joke = JokeModel.get_random()
    # O Flask entende que o número após o jsonify, representa o Status HTTP
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/", methods=["POST"])
def joke_post():
    new_joke = JokeModel(request.json)
    new_joke.save()
    return jsonify(new_joke.to_dict()), 201


@jokes_controller.route("/<id>", methods=["PUT"])
def joke_update(id):
    joke = _get_joke(id)
    joke.update(request.json)
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["GET"])
def joke_show(id):
    joke = _get_joke(id)
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["DELETE"])
def joke_delete(id):
    joke = _get_joke(id)
    # Exemplo de Validação
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404
    else:
        joke.delete()
        return jsonify(joke.to_dict()), 204
