from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=100)
    genre = models.ManyToManyField("Genre", related_name="movies")
    direction = models.ForeignKey(
        "Person", on_delete=models.CASCADE, related_name="directed_movies"
    )
    actors = models.ManyToManyField("Person", related_name="acted_movies")

    def __str__(self):
        return self.title


class MovieTheater(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class MovieRoom(models.Model):
    name = models.CharField(max_length=100)
    theater = models.ForeignKey(
        "MovieTheater", on_delete=models.CASCADE, related_name="rooms"
    )
    movie = models.ForeignKey(
        "Movie", on_delete=models.CASCADE, related_name="rooms"
    )

    def __str__(self):
        return self.name


class MovieSeat(models.Model):
    name = models.CharField(max_length=100)
    room = models.ForeignKey(
        "MovieRoom", on_delete=models.CASCADE, related_name="seats"
    )
    is_occupied = models.BooleanField(default=False)

    def __str__(self):
        return self.name
