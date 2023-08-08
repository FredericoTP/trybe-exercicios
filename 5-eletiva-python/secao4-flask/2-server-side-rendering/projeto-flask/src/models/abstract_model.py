from pymongo.collection import ReturnDocument


class AbstractModel():
    _collection = None

    def __init__(self, data):
        self.data = data

    def save(self):
        result = self._collection.insert_one(self.data)
        inserted_document = self._collection.find_one({"_id": result.inserted_id})
        self.data = inserted_document
        return self.data

    def update(self, data):
        # por padrão o find_one_and_update retorna o estado anterior
        # return_document=ReturnDocument.AFTER, permite
        # retornar a versão pós atualização
        result = self._collection.find_one_and_update(
            {"_id": self.data["_id"]},
            {"$set": data},
            return_document=ReturnDocument.AFTER,
        )

        self.data = result
        return self.data

    def delete(self):
        self._collection.delete_one({"_id": self.data["_id"]})

    @classmethod
    def find(cls, query={}):
        data = cls._collection.find(query)
        return [cls(d) for d in data]

    @classmethod
    def find_one(cls, query={}):
        data = cls._collection.find_one(query)
        return cls(data) if data else None
