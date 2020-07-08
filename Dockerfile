FROM node:12

COPY . /server

COPY package*.json ./

RUN npm install

EXPOSE 5000

WORKDIR /server

CMD [ "npm", "run", "dev" ]