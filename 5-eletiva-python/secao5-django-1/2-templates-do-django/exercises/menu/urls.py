from django.urls import path
from menu.views import recipes, recipe_details

urlpatterns = [
    path("", recipes, name="recipes-page"),
    path("recipes/<int:recipe_id>", recipe_details, name="details-page"),
]
