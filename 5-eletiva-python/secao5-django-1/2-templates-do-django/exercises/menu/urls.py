from django.urls import path
from menu.views import recipes, recipe_details, delete

urlpatterns = [
    path("", recipes, name="recipes-page"),
    path("recipes/<int:recipe_id>", recipe_details, name="details-page"),
    path("recipes/<int:recipe_id>/delete", delete, name="delete-recipe"),
]
