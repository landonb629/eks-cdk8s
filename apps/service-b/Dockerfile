FROM node:20-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV 

WORKDIR /usr/src/app/

ARG PORT=80
ENV PORT $PORT 

COPY package.json /usr/src/app/package.json 
COPY package-lock.json /usr/src/app/package-lock.json

COPY . /usr/src/app/ 

