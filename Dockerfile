FROM nginx:alpine

COPY . /usr/share/nginx/html/

COPY ssl/cf-origin.pem /etc/ssl/certs/cf-origin.pem
COPY ssl/cf-origin-key.pem /etc/ssl/private/cf-origin-key.pem

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80 443