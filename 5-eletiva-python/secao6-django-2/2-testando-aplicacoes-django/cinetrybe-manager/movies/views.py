from django.http import Http404
from django.shortcuts import render, get_object_or_404
from movies.models import (MovieTheater,
                           MovieRoom,
                           Movie,
                           Person,
                           Genre,
                           MovieSeat)
from movies.serializer import (
    MovieTheaterSerializer,
    MovieSerializer,
    MovieRoomSerializer,
    MovieSeatSerializer,
    PersonSerializer,
    GenreSerializer,
)
from rest_framework import viewsets, permissions, authentication


def index(request):
    context = {"movie_theaters": MovieTheater.objects.all()}
    return render(request, "index.html", context)


def theater_details(request, theater_id):
    theater = get_object_or_404(MovieTheater, id=theater_id)
    rooms = theater.rooms.all()
    context = {"movie_theater": theater, "rooms": rooms}
    return render(request, "theater_details.html", context)


def room_details(request, theater_id, room_id):
    room = get_object_or_404(MovieRoom, id=room_id)
    theater = get_object_or_404(MovieTheater, id=theater_id)
    if room.theater != theater:
        raise Http404()
    seats = room.seats.all()
    context = {"room": room, "seats": seats}
    return render(request, "room_details.html", context)


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]


class MovieTheaterViewSet(viewsets.ModelViewSet):
    queryset = MovieTheater.objects.all()
    serializer_class = MovieTheaterSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]


class MovieRoomViewSet(viewsets.ModelViewSet):
    queryset = MovieRoom.objects.all()
    serializer_class = MovieRoomSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]


class MovieSeatViewSet(viewsets.ModelViewSet):
    queryset = MovieSeat.objects.all()
    serializer_class = MovieSeatSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]
