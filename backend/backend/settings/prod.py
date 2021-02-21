from .base import*
import os
from pathlib import Path


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd4vt6f$sgkmu&uave4gbk%9fizt-v&6%j6kd0v#*94y_=z2=8%'


ALLOWED_HOSTS = ['backend','localhost']


# Add apps only used in producions like this
# INSTALLED_APPS += ["myapp"]  # noqa F405


# Add middleware only used in production like this
# MIDDLEWARE += ["myapp.Middleware"]  # noqa F405


# Dangerous - allows all
CORS_ALLOW_ALL_ORIGINS = True
# use this instead with your host
# CORS_ALLOWED_ORIGINS = [
#   'http://localhost',
#   'http://127.0.0.1',
# #   'http://localhost:3000', # react server host
# ]


REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        # disable Browsable API in production
        #'rest_framework.renderers.BrowsableAPIRenderer',
    ]
}