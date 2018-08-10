FROM node:7
WORKDIR /Users/nitinthakkar/Desktop/Socialcops
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 8000
