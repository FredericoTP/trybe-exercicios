from bson.objectid import ObjectId


def _project_id(id):
    return {"idProject": int(id)}


def _task_id(id):
    return {"_id": ObjectId(id)}
