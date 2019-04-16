FROM node:10-slim

ARG NODE_ENV=development
ENV IEX_CLOUD_SECRET_TOKEN=sk_4d4e3d845cef47fb91a609e505d296da
ENV IEX_CLOUD_API_URL=https://cloud.iexapis.com/beta/

EXPOSE 3000/tcp

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run start:prod
