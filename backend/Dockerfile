FROM python:3.9


ARG USER_ID
ARG GROUP_ID
ARG USER_NAME

ENV PYTHONUNBUFFERED 1
ENV IN_BACKEND_DOCKER 1

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

ADD requirements.txt /

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

RUN addgroup --gid "${GROUP_ID}" "${USER_NAME}"
RUN adduser --disabled-password --gecos '' --uid "${USER_ID}" --gid "${GROUP_ID}" "${USER_NAME}"
USER "${USER_NAME}"

WORKDIR /backend

# for production
#COPY . /backend

EXPOSE 8000

CMD python manage.py runserver 0.0.0.0:8000