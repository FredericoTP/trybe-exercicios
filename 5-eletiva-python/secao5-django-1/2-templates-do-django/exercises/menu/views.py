from django.shortcuts import render
from menu.models import Recipe


# Create your views here.
def recipes(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, "recipes.html", context)
