FROM node:12

ENV IN_FRONTEND_DOCKER 1

WORKDIR /frontend

RUN apt-get update && apt-get install -y \
    vim

#COPY package.json . # for production
#RUN npm install     # done in ./dev utility so that node_modules folder is included in the bind mount volumen. Also we hack the server to stop clearing the console
#COPY . /frontend # for production

EXPOSE 3000

CMD npm start