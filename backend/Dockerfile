FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY package-lock.json package-lock.json 
COPY package.json package.json 


RUN npm i -g nodemon
COPY . . 

EXPOSE 3000

CMD ["node", "app.js"]


