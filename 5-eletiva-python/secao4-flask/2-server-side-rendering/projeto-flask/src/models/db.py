from pymongo import MongoClient
from os import environ

# Conecta no Mongo, pela variável ambiente definida no Docker Compose
client = MongoClient(environ.get("MONGO_URL"))
# Cria uma coleção chamada db_chat
db = client.db_chat
