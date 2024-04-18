FROM node:18-alpine

USER node

WORKDIR /home/node

COPY package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "." ]