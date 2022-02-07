FROM node:16.13.1-alpine

ENV PORT = 3000

LABEL version="1.0" description="node image"

WORKDIR /usr/nest-camp-api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
