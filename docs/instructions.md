


How to create a new Django app
`./dev manage.py startapp sampleapp`

Production:
1. While still on development, make sure to run:
  1. `./dev npm_build`
  1. To bundle the production ready static files into the frontend `build` folder
  1. 
1. `git commit`
1. `git push`
1. `ssh myuser@mypvsip`
1. `git clone myrepo myproject`
1. `cd myproject`
1. todo: enter values in env file
1. todo: set up https lets encrypt
1. `./prod init`
1. `./prod up`


Production - How delete all containers & network, rebuild images only if necesary, initialize backend (migrations & createsuperuser), without deleting volumes (data saved by postgres in host files is safe):
```
./prod down
./prod init
# or the shortcut
./prod restart
```   


