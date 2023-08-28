from rest_framework import serializers
from movies.models import MovieTheater, MovieRoom, Movie, Person, Genre, MovieSeat


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"


class MovieTheaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieTheater
        fields = "__all__"


class MovieRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieRoom
        fields = "__all__"


class MovieSeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieSeat
        fields = "__all__"
