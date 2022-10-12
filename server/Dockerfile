FROM node:17

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

COPY .env ./build

EXPOSE 1234

CMD ["npm","run","start"]
