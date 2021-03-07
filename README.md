# react-django-docker-boilerplate

# work in process...(as in not ready)

Only tested in Ubuntu Desktop 20.04

Credit: many ideas come from [misago](https://github.com/rafalp/Misago) & [saasitive/django-react-boilerplate](https://github.com/saasitive/django-react-boilerplate)


1. Make sure:
   1. docker & docker-compose are installed
   1. both can be used without sudo
1. Fork the repo
1. `git clone https://github.com/<username>/react-django-docker-boilerplate.git myproject`
1. `cd myproject`
1. `./dev init`
   1. for Django migrations, createsuperuser, & ...   
1. `./dev up` or `docker-compose up`
1. 3 containers will be started:   
   1. frontend (with command npm start)
      1. [Create-react-app](https://github.com/facebook/create-react-app) -> localhost:3000
   1. backend (with command python manage.py runserver)
      1. rest-framework web browsable API -> localhost:8000/api
      1. Django admin  ->  localhost:8000/admin 
   1. postgres   
1. Check your terminal & wait for both servers to be ready
   1. In slow environments give them some time & reload browser  
1. Make your changes
   1. [Create-react-app](https://github.com/facebook/create-react-app) auto reload feature should work as expected
1. `./dev npm-build`
1. `git commit -m "Add React production static files to frontend/build directory"`
1. `git push`
1. In production:
   1. Your VPS(Virtual Private Server) should have docker & docker-compose.
      1. A good option is a $5/mo [digitalocean docker droplet](https://marketplace.digitalocean.com/apps/docker)
   1. `ssh user@<my_vps_ip>`
   1. `git clone https://github.com/<username>/react-django-docker-boilerplate.git myproject`
   1. `cd myproject`
   1. `./prod init`
   1. `./prod up` or `docker-compose up`    

Todos:   
☑ .env file   
☑ postgres bind mount volumen in production for data   
☑ Django use multiple settings files pattern   
☐ handle Django secret key in production   
☐ handle allowed hosts & CORS in production   
☐    
☐ https let's encrypt   
☐ will probably only use Django as an API with rest_framework & keep React completely independent & served by nginx   
☐ many more   
☐    
☐      




How create a new Django app:  
```
#shurtcut
./dev manage.py startapp myapp
# or 
docker-compose run --rm backend python manage.py startapp myapp
```   


How stop servers & run them again:   
```
<ctrl> c
docker-compose up
# or
./dev up
# in production
./prod up
```   

How open bash in running containers  
```   
# open new terminal window in project folder

# backend (Django) container
./dev bash-backend
# or
docker exec -it <container id> bash   
 
# frontend (Create-react-app) container
./dev bash-frontend
# or
docker exec -it <container id> bash
```   


How delete containers, rebuild images, initialize, & run containers again (without deleting database data volumes):   
```
./dev rebuildup
# or in production
./prod rebuildup
```   

For more dev options run `./dev` without arguments   





Django 3.1.4  
React 17.0.1  
react-router-dom 5.2.0  
bootstrap 4.5.3  
react-bootstrap 1.4.0  



