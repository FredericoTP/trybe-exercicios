from django.contrib import admin
from movies.models import MovieTheater, MovieRoom, MovieSeat, Movie, Genre, Person


admin.site.site_header = "Movie Theater Admin"

admin.site.register(MovieTheater)
admin.site.register(MovieRoom)
admin.site.register(MovieSeat)
admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Person)
