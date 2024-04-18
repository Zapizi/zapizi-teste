FROM node

USER node
WORKDIR /home/node

COPY package.json ./

RUN npm install

COPY --chown=node:node . . 

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 3000

CMD ["npm", "run", "dev"]
