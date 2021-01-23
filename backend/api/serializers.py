from rest_framework import serializers
from .models import APIModel


class APIModelSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = APIModel
        fields = ('id','title')