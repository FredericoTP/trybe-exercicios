from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    amount = models.IntegerField(default=0)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
        upload_to="media/products", null=True, blank=True
    )

    def __str__(self):
        return f"{self.name} - {self.price}"


class Customers(models.Model):
    name = models.CharField(max_length=50)
    address = models.TextField(max_length=200)
    phone = models.TextField(max_length=20)

    def __str__(self) -> str:
        return f"{self.name}"


customer_one = Customers(
    name="Saul Goodman",
    address="Rua Better Call Saul, 123",
    phone="(85) 99998-9999",
)
