   FROM node:17

   WORKDIR /api

   COPY package.json .

   RUN npm install

   COPY . .

   EXPOSE 1234


   CMD ["npm","run","dev"]
