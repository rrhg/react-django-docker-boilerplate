from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import APIModel
from .serializers import APIModelSerializer
# from .serializers import APIModelSerializer, UserSerializer

class APIModelViewSet(viewsets.ModelViewSet):
    queryset = APIModel.objects.all()
    serializer_class = APIModelSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

