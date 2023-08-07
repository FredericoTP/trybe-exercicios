from pymongo import MongoClient
from os import environ

client = MongoClient(environ.get("MONGO_URL"))

db = client.db_music
