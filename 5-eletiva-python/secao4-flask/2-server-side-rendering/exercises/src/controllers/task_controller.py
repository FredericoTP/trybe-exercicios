from flask import Blueprint, render_template, request, redirect
from models.task_model import Task

task_list = [
    Task(1, "Arrumar cama", True),
    Task(2, "Fazer compras", False),
    Task(3, "Passear com cachorro", False),
    Task(4, "Levar lixo pra fora", True),
]

task_controller = Blueprint("task_controller", __name__)


@task_controller.route("/", methods=["GET"])
def index():
    return render_template("tasks.html", task_list=task_list)


@task_controller.route("/", methods=["POST"])
def add_task():
    id = len(task_list) + 1
    title = request.form["task"]
    concluded = False
    new_task = Task(id, title, concluded)
    task_list.append(new_task)

    return redirect("/")


@task_controller.route("/complete/<int:task_id>")
def complete_task(task_id):
    for task in task_list:
        if task.id == task_id:
            task.completed = True
            break

    return redirect("/")
