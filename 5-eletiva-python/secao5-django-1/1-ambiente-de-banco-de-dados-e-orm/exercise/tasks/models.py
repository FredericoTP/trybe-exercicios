from django.db import models


# Create your models here.
class Task(models.Model):
    title = models.TextField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(
        choices=((1, "Baixa"), (2, "Média"), (3, "Alta"))
    )
    created_at = models.DateField(auto_now_add=True)
