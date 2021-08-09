FROM node:14-alpine

WORKDIR /home/api

COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .

CMD npm run start:dev