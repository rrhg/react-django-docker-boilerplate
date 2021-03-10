


How to create a new Django app
`./dev manage.py startapp sampleapp`


Production - How delete all containers & network, rebuild images only if necesary, initialize backend (migrations & createsuperuser), without deleting volumes (data saved by postgres in host files is safe):
```
./prod down
./prod init
./prod up
```   


