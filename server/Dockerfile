FROM node:12

COPY . /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD [ "node", "server.js" ]