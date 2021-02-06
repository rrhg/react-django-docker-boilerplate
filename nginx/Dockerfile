FROM nginx:stable-alpine

# add bash for debugging. may be removed 
RUN apk add --no-cache bash

COPY ./frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
