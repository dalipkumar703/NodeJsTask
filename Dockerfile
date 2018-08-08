FROM node:7
WORKDIR /home/dalip/Desktop/app
COPY package.json /home/dalip/Desktop/app
RUN npm install
COPY . /home/dalip/Desktop/app
CMD node index.js
EXPOSE 8000
