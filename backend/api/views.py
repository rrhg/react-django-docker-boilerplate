from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import APIModel
from .serializers import APIModelSerializer

class APIModelViewSet(viewsets.ModelViewSet):
    queryset = APIModel.objects.all()
    serializer_class = APIModelSerializer
    permission_classes = [AllowAny]
