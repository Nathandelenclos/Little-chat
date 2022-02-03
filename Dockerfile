FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

RUN npm install
COPY . /
CMD ["node", "app.js"]