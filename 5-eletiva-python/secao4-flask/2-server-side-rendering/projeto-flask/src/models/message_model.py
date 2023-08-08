from .db import db
from .abstract_model import AbstractModel


# Herdando a classe Abstrata que domina o uso do Mongodb
class MessageModel(AbstractModel):
    # Define que a Coleção do Banco se chamará 'chat'.
    # Uma coleção é o equivalente a uma tabela no Mysql
    _collection = db["chat"]

    # Vamos reaproveitar o construtor da classe superior implicitamente

    # Define as regras de como o objeto MessageModel pode virar um Dict
    def to_dict(self):
        return {
            "content": self.data["content"],
            "to": self.data["to"],
            "from": self.data["from"],
            "time": self.data["time"],
        }
