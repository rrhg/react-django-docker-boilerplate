FROM nginx:stable-alpine

# add bash for debugging. may be removed 
RUN apk add --no-cache bash

# files are been share with a bind mount volume in docker-compose-prod.yaml
#COPY ./frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
