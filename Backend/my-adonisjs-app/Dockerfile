FROM node:22.4.1-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3333

CMD [ "npm", "run", "dev" ]