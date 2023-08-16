from django.contrib import admin
from products.models import Product
from products.models import Customers

admin.site.site_header = "Trybe Products E-commerce"
admin.site.register(Product)
admin.site.register(Customers)
