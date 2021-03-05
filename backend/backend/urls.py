from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('api/polls/', include('polls.urls')),
    path('api/admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
]
