FROM node:12

# vars coming from docker-compose.yaml & been exported in ./dev bash utility
ARG USER_ID
ARG GROUP_ID
ARG USER_NAME

# only available in a running container, not in image creation
ENV IN_FRONTEND_DOCKER 1

RUN apt-get update && apt-get install -y \
    vim

#COPY package.json . # for production
#RUN npm install     # done in ./dev utility so that node_modules folder is included in the bind mount volumen. Also we hack the server to stop clearing the console
#COPY . /frontend # for production


# How change user for node image : https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# So that `npm build` would create files with same user as host, so that they can be edited from host (like adding static files from django admin)  
RUN groupmod -g "${GROUP_ID}" node && usermod -u "${USER_ID}" -g "${GROUP_ID}" node

# gives error can not create home directory
# RUN usermod -d "/home/${USER_NAME}" -l "${USER_NAME}" node

# only change name of user
RUN usermod -l "${USER_NAME}" node

# this says user id is already in use
# RUN adduser --disabled-password --gecos '' --uid "${USER_ID}" --gid "${GROUP_ID}" "${USER_NAME}"

USER "${USER_NAME}"

WORKDIR /frontend

EXPOSE 3000

CMD npm start