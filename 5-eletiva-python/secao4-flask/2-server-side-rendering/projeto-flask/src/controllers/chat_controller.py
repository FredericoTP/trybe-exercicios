from flask import Blueprint, request, render_template
from datetime import datetime
import random
from models.joke_model import JokeModel
from models.message_model import MessageModel

chat_controller = Blueprint("chat_controller", __name__)


# GET considerará usuário visitante, POST o usuário recebido do formulário
@chat_controller.route("/", methods=["GET", "POST"])
def continue_chat():
    username = request.form.get("username") or "Visitante"
    message_content = request.form.get("message-content")

    _save_message(message_content, _from=username, to="Trybot")
    # Prepara a resposta
    answer = _prepare_answer(username, message_content)
    _save_message(answer, _from="Trybot", to=username)

    # Retorna todas as mensagens que este usuário possui com o bot
    session_messages = _get_session_messages(username)
    return render_template(
        "chat.html", username=username, session_messages=session_messages
    )


# Métodos de serviços auxiliares
def _save_message(message_content, _from, to):
    if not message_content:
        return

    chat_message = MessageModel(
        {
            "content": message_content,
            "from": _from,
            "to": to,
            "time": datetime.now().strftime("%H:%M"),
        }
    )
    chat_message.save()


def _prepare_answer(name, message_content):
    if not message_content:
        return _answer_first(name)
    if "1" in message_content:
        return _answer_joke()
    return _answer_default()


def _answer_first(name):
    return (
        f"Olá { name }, bem vindo a central de ajuda! Por hora posso "
        "te ajudar em algumas coisas 😄<br>1 - Contar uma piada"
    )


def _answer_default():
    return random.choice(
        [
            "Interessante, me conte mais sobre isso.",
            "Compreendo como você se sente.",
            "Isso é algo com o qual muitas pessoas lidam.",
            "Como você está lidando com isso?",
            "Eu estou aqui para você, se precisar conversar.",
        ]
    )


def _answer_joke():
    joke = JokeModel.get_random()
    return joke.to_dict()["joke"] if joke else "Ainda não conheço piadas"


def _get_session_messages(name):
    messages = MessageModel.find({"$or": [{"to": name}, {"from": name}]})
    return [message.to_dict() for message in messages]
