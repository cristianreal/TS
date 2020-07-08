FROM node:12

COPY . /server

COPY package*.json ./

EXPOSE 5000

WORKDIR /server

RUN npm install

CMD [ "npm", "run", "dev" ]