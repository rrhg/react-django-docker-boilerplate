#!/usr/bin/env bash


# wait for db
export PGPASSWORD=$POSTGRES_PASSWORD
RETRIES=60
until psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -c "select 1" > /dev/null 2>&1 || [ $RETRIES -eq 0 ]; do
    echo "Waiting for PostgreSQL to start, $((RETRIES--)) remaining attempts..."
    echo "++++++++++++++ Waiting for Postgres from the inside temporary backend container in order to create initial Django migrations & create superuser +++++++++++++++++++++++++"
    sleep 5
done

echo "  Giving postgres some time to be ready..."
sleep 3

./manage.py makemigrations
./manage.py migrate

# password: Django uses env variable DJANGO_SUPERUSER_PASSWORD for the superuser password
./manage.py createsuperuser --username "$SUPERUSER_USERNAME" --email "$SUPERUSER_EMAIL" --no-input