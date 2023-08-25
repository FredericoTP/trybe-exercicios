from django.urls import path, include
from rest_framework import routers
from trainers.views import ClientViewset

router = routers.DefaultRouter()
router.register(r"clients", ClientViewset)

urlpatterns = [path("api/", include(router.urls))]
