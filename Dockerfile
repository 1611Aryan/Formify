FROM node:14.17
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . ./
EXPOSE 5000
CMD ["tsnd","--respawn","server.ts"]