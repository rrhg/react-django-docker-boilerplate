# react-django-docker-boilerplate

# work in process...

Only tested in Ubuntu Desktop 20.04

Credit: many ideas come from [misago](https://github.com/rafalp/Misago)


Make sure:
1. docker & docker-compose are installed
1. both can be used without sudo


```
git clone https://github.com/rrhg/react-django-docker-boilerplate.git myproject
cd myproject
./dev init
docker-compose up
```   

3 containers will be started:   
1. backend (with command python manage.py runserver)
1. frontend (with command npm start)
1. postgres   

Check your terminal & wait for both servers to be ready   

Create-react-app - - - -  -> localhost:3000   
Django - - - - - - - - - - -  -> localhost:8000   
rest-framework web browsable API -> localhost:8000/api   
Create a sample model - - -> localhost:8000/api/apimodel  


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
```   

How open open bash in running containers  
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


How delete all containers & initialize everything again:   
```
./dev reset
```   

For more dev options run `./dev` without arguments   





Django 3.1.4  
React 17.0.1  
react-router-dom 5.2.0  
bootstrap 4.5.3  
react-bootstrap 1.4.0  





