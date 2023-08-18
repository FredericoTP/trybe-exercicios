from django.db import models


# Create your models here.
class Seller(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self) -> str:
        return self.name


class Buyer(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    seller = models.ForeignKey(
        Seller,
        on_delete=models.CASCADE,
        related_name="sellers",
    )

    def __str__(self) -> str:
        return self.name


class Order(models.Model):
    buyer = models.ForeignKey(
        Buyer,
        on_delete=models.CASCADE,
        related_name="buyers",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="products",
    )

    def __str__(self) -> str:
        return f"Order #{self.pk}"
