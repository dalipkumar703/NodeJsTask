FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /home/dalip/Desktop/app
CMD node index.js
EXPOSE 8000
