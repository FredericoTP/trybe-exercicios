from flask import Blueprint, render_template
from models.product_model import Product

product_controller = Blueprint("product_controller", __name__)

products = []


@product_controller.route("/", methods=["GET"])
def index():
    return render_template("index.html", products=products)
