FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

COPY ssl/cf-origin.pem /etc/ssl/certs/cf-origin.pem
COPY ssl/cf-origin-key.pem /etc/ssl/private/cf-origin-key.pem
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
