
How to open bash in a running container

`cd react-django-docker-boilerplate`
`docker ps`

the output would be something like this
```
CONTAINER ID        IMAGE                                      COMMAND                  CREATED             STATUS              PORTS                      NAMES
16a7d5fc0775        react-django-docker-boilerplate_backend    "python manage.py ru…"   18 hours ago        Up 6 minutes        0.0.0.0:8000->8000/tcp     react-django-docker-boilerplate_backend_1
7167c3bbbb86        react-django-docker-boilerplate_frontend   "docker-entrypoint.s…"   18 hours ago        Up 6 minutes        0.0.0.0:3000->3000/tcp     react-django-docker-boilerplate_frontend_1
17a38e44a26b        postgres:10                                "docker-entrypoint.s…"   18 hours ago        Up 6 minutes        127.0.0.1:5432->5432/tcp   react-django-docker-boilerplate_postgres_1
```

example to open bash in frontend
`docker exec -it 7167 bash`
note: using id just because names are too long 