FROM node:12

ENV IN_FRONTEND_DOCKER 1

WORKDIR /frontend

ADD package.json /frontend/

RUN npm install


# for production
#COPY . /backend

EXPOSE 3000

CMD npm start