from flask import Blueprint, render_template
from models.projectModel import ProjectModel
from models.querys import _project_id, _task_id

project_controller = Blueprint('project', __name__)


def _get_project_or_task(id):
    project = ProjectModel.find(id)
    return [task.to_dict() for task in project]


@project_controller.route("/")
@project_controller.route("/projects")
def home():
    projects = ProjectModel.separate_projects()
    return render_template("home.html", projects=projects)


@project_controller.route("/projects/<id>")
def project(id):
    project = _get_project_or_task(_project_id(id))
    return render_template("project.html", project=project)


@project_controller.route("/task/<id>")
def task(id):
    task = _get_project_or_task(_task_id(id))
    return render_template("task.html", task=task[0])
