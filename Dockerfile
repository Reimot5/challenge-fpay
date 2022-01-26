FROM node

WORKDIR /challenge-fpay

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]


