

`ProgrammingError at /api/apimodel/`
Probably the initialization (migrations) was not run
One way to fix this could be:   
`./dev rebuildup`   (in development)   
or   
`./prod rebuildup`   (in production)   
This will:   
1. Rebuild images
1. Run Django migrations
1. Create superuser
1. Create & run containers



```   
# Error in browser console
Uncaught SyntaxError: expected expression got '<'
```   
Apprently this worked but now I'm geeting "500 Internal Server Error"
`git add -f frontend/build/`   

But next time run `./dev npm-build` console gave same error again

did 
`git add -f frontend/build/static`
`git add -f frontend/build/static/admin`
`git add -f frontend/build/static/css`
`git add -f frontend/build/static/js`
`git add -f frontend/build/static/media`
`git add -f frontend/build/static/rest_framework`



```   
Error response from daemon: Get https://registry-1.docker.io/v2/: dial tcp: lookup registry-1.docker.io…i/o timeout
```   

Solution 1: just try again

Manytimes this a temporary network error that can be fixed by trying again or restarting your network or connection. Other times you have to reconfigure your network.
https://stackoverflow.com/questions/61094097/error-response-from-daemon-get-https-registry-1-docker-io-v2-dial-tcp-look




```   
Service 'nginx' failed to build: Get https://registry-1.docker.io/v2/: dial tcp: lookup registry-1.docker.io on 127.0.0.53:53: read udp 127.0.0.1:43708->127.0.0.53:53: i/o timeout   
```   


Solution 1: just try again

