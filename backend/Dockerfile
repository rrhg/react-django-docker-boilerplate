FROM python:3.9

ENV PYTHONUNBUFFERED 1
ENV IN_BACKEND_DOCKER 1

# Install dependencies in one single command/layer
RUN apt-get update && apt-get install -y \
    vim \
    libffi-dev \
    libssl-dev \
    sqlite3 \
    libjpeg-dev \
    libopenjp2-7-dev \
    locales \
    cron \
    postgresql-client \
    gettext

# Add requirements and install them. We do this unnecessasy rebuilding.
ADD requirements.txt /
#ADD requirements-plugins.txt /

RUN pip install --upgrade pip && \
    pip install -r requirements.txt
#    pip install -r requirements-plugins.txt

WORKDIR /backend

#COPY . /backend

EXPOSE 8000

CMD python manage.py runserver 0.0.0.0:8000