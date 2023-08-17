from django.urls import path
from menu.views import recipes

urlpatterns = [path("", recipes, name="recipes-page")]
