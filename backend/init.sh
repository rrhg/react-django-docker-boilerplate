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

# create superuser Admin with password "password"
./manage.py createsuperuser --username $username --email $email --password $password

# maybe not needed since this will not use Django templates. It will only use Rest Framewok as an API.
# ./manage.py collectstatic --noinput

# gunicorn backend.wsgi --bind 0.0.0.0:3031 --workers 4 --threads 4