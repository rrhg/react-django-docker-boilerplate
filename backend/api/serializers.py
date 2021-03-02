from django.contrib.auth.models import User
from rest_framework import serializers
from .models import APIModel


class APIModelSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = APIModel
        fields = ('id','title')

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'is_staff']
