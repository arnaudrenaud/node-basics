FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

RUN npm run build

# La commande CMD ne sera pas exécutée lors de la compilation mais lors de l'exécution
CMD npm run start