from django.urls import path
from products.views import index, product, seller, buyer, order


urlpattern = [
    path("", index, name="home-page"),
    path("products/", product, name="products-page"),
    path("sellers/", seller, name="sellers-page"),
    path("buyers/", buyer, name="buyers-page"),
    path("orders/", order, name="orders-page"),
]
