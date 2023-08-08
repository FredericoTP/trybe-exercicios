import random
from .db import db
from .abstract_model import AbstractModel


# Herdado a classe Abstrata que domina o uso do Mongodb
class JokeModel(AbstractModel):
    # Define que a Coleção do Banco se chamara jokes.
    # Uma coleção é o equivalente a uma tabela no Mysql
    _collection = db["jokes"]

    # Nosso construtor, receberá um JSON
    # para instanciar um objeto
    def __init__(self, json_data):
        super().__init__(json_data)

    # Retornar uma piada aleatória, é uma regra de negócio especifica
    # Fazendo sentido manter somente para a model Joke
    @classmethod
    def get_random(cls):
        data = cls.find()
        try:
            return random.choice(data)
        except IndexError:
            return None

    # Define as regras de como o Objeto por virar um Dicionário
    def to_dict(self):
        return {
            "_id": str(self.data["_id"]),
            "joke": self.data["joke"],
        }
