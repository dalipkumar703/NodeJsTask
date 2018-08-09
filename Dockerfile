FROM node:7
WORKDIR /Users/nitinthakkar/Downloads/NodeJsTask
COPY package.json /Users/nitinthakkar/Downloads/NodeJsTask
RUN npm install
COPY . /Users/nitinthakkar/Downloads/NodeJsTask
CMD node index.js
EXPOSE 8000
