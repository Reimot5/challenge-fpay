FROM node:16.13.1-alpine3.15

WORKDIR /challenge-fpay

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
