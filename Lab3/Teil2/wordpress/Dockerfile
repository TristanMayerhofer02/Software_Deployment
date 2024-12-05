FROM debian:bullseye

RUN apt update && apt upgrade -y
RUN apt install -y apache2 \
    php \
    libapache2-mod-php \
    php-mysql \
    php-zip \
    php-mbstring \
    php-curl \
    wget unzip

RUN cd /var/www/html/ && \
    wget https://wordpress.org/latest.zip && \
    unzip -q latest.zip && \
    chown -R www-data:www-data /var/www/html/wordpress && \
    chmod -R 755 /var/www/html/wordpress && \
    mkdir -p /var/www/html/wordpress/wp-content/uploads && \
    chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads


RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/wordpress|g' /etc/apache2/sites-available/000-default.conf

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
