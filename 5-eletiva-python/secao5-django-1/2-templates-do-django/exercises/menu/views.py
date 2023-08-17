from django.shortcuts import render, get_object_or_404
from menu.models import Recipe
from django.http import Http404


# Create your views here.
def recipes(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, "recipes.html", context)


def recipe_details(request, recipe_id):
    try:
        recipe = get_object_or_404(Recipe, id=recipe_id)
        return render(request, "recipe_details.html", {"recipe": recipe})
    except Http404:
        return render(request, "404.html")
