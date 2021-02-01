#!/bin/sh

# wait for db
# export PGPASSWORD=$POSTGRES_PASSWORD
# RETRIES=60
# until psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -c "select 1" > /dev/null 2>&1 || [ $RETRIES -eq 0 ]; do
    # echo "Waiting for PostgreSQL to start, $((RETRIES--)) remaining attempts..."
    # echo "++++++++++++++ Waiting for Postgres from the inside temporary backend container in order to create initial Django migrations & create superuser +++++++++++++++++++++++++"
    # sleep 5
# done

echo "  Giving postgres some time to be ready..."
sleep 3

until ./manage.py makemigrations > /dev/null 2>&1
do
    echo "Waiting for manage.py makemigrations & db to be ready"
    sleep 3
done

until ./manage.py migrate > /dev/null 2>&1
do
    echo "Waiting for manage.py migrate & db to be ready..."
    sleep 3
done

# create superuser Admin with password "password"
./manage.py createsuperuser --username $username --email $email --password $password

# maybe not needed since this will not use Django templates. It will only use Rest Framewok as an API.
# ./manage.py collectstatic --noinput