from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'myapp', views.MyModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('index', views.index, name='index'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]