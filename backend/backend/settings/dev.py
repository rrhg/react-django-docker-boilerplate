from .base import*
import os
from pathlib import Path


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd4vt6f$sgkmu&uave4gbk%9fizt-v&6%j6kd0v#*94y_=z2=8%'


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True


ALLOWED_HOSTS = ['backend','localhost', '0.0.0.0', '127.0.0.1']


# Add apps only used in development like this
# INSTALLED_APPS += ["debug_toolbar"]  # noqa F405


# Add middleware only used in development like this
# MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]  # noqa F405


# Dangerous - allows all. Only use in development
CORS_ALLOW_ALL_ORIGINS = True