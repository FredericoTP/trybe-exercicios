from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=250)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class WorkoutPlan(models.Model):
    client = models.OneToOneField(
        Client,
        on_delete=models.CASCADE,
        related_name="workout_plan",
    )
    personal = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="workout_plan",
    )
    workout = models.TextField()

    def __str__(self) -> str:
        return f"{self.client} - Workout Plan"
