FROM ubuntu

RUN apt update && \
    apt install -y apache2 apache2-utils libapache2-mod-proxy-html libxml2-dev && \
    a2enmod proxy proxy_http && \
    apt clean

COPY index.html /var/www/html/
COPY proxy.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
