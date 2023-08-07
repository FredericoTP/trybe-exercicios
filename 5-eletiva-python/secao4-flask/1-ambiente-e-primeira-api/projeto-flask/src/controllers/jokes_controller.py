# jokes_controller.py
from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.joke_model import JokeModel

jokes_controller = Blueprint("jokes", __name__)
# O primeiro parâmetro determina o nome da blueprint, já o segundo
# parâmetro é o caminho de importação do pacote com a blueprint,
# normalmente utilizamos __name__ referindo-se ao próprio módulo.
#
# Caso você tente registrar outra blueprint com o nome "jokes",
# você se irá se deparar com o seguinte erro:
#
# ValueError: The name 'jokes' is already registered for a different
# blueprint. Use 'name=' to provide a unique name.
#
# Ou seja: O nome 'jokes' já está registrado, mas podemos usar 'name='
# para fornecer um nome diferente para a sua nova Blueprint.
#


# ---------
# Funções protegidas da camada de Controller
def _get_all_jokes():
    jokes = JokeModel.find()
    return [joke.to_dict() for joke in jokes]


def _get_joke(id: str):
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
    # Exemplo de Validação
    if joke is None:
        # O Flask entende que o número após o jsonify, representa o Status HTTP
        return jsonify({"error": "No jokes available"}), 404

    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/", methods=["POST"])
def joke_post():
    new_joke = JokeModel(request.json)
    new_joke.save()
    return jsonify(new_joke.to_dict()), 201


@jokes_controller.route("/<id>", methods=["PUT"])
def joke_update(id: str):
    joke = _get_joke(id)
    # Exemplo de Validação
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404
    joke.update(request.json)
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["GET"])
def joke_show(id: str):
    joke = _get_joke(id)
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["DELETE"])
def joke_delete(id: str):
    joke = _get_joke(id)
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404

    joke.delete()
    return jsonify(joke.to_dict()), 204
