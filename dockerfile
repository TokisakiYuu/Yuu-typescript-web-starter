FROM node:10.17.0
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD node ./