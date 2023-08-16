from .db import db
from .abstractModel import AbstractModel


class ProjectModel(AbstractModel):
    _collection = db["projects"]

    def __init__(self, json_data):
        super().__init__(json_data)

    @classmethod
    def separate_projects(cls):
        tasks = [task.to_dict() for task in cls.find()]
        projects = {}
        for task in tasks:
            project_id = task["id_project"]
            if project_id not in projects:
                projects[project_id] = []
            projects[project_id].append(task)
        return [project for project in projects.values()]

    def to_dict(self):
        return {
            '_id': str(self.data['_id']),
            'id_project': self.data['idProject'],
            'name': self.data['name'],
            'task': self.data['task'],
            'status': self.data['status'],
            'completion_percentage': self.data['completionPercentage'],
            'description_task': self.data['descriptionTask'],
            'deadline': self.data['deadline'],
            'responsible': self.data['responsible']
        }
