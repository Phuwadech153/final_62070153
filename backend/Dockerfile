FROM node:16.14-alpine
WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 1111

CMD ["npm", "start"]

