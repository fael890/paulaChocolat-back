FROM node:latest

WORKDIR /paula-chocolat/back-end

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["node", "server.js"]

EXPOSE 3000