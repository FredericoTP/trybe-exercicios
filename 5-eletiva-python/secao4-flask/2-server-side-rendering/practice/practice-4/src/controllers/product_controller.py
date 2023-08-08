from flask import Blueprint, render_template, request, redirect
from models.product_model import Product

product_controller = Blueprint("product_controller", __name__)

products = []


@product_controller.route("/", methods=["GET"])
def index():
    return render_template("index.html", products=products)


@product_controller.route("/", methods=["POST"])
def add_product():
    id = len(products) + 1
    name = request.form["name"]
    price = float(request.form["price"])
    product = Product(id, name, price)
    products.append(product)
    return redirect("/")


@product_controller.route("/delete/<int:product_id>")
def delete_product(product_id):
    for product in products:
        if product.id == product_id:
            products.remove(product)
            break
    return redirect("/")
