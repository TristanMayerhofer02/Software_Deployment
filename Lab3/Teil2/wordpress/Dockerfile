FROM debian:latest

RUN apt-get update && apt-get install -y \
    apache2 \
    php \
    php-mysql \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN wget https://wordpress.org/latest.zip \
    && unzip latest.zip \
    && mv wordpress/* /var/www/html/ \
    && chown -R www-data:www-data /var/www/html/ \
    && chmod -R 755 /var/www/html/ \
    && rm -rf latest.zip wordpress

RUN rm /var/www/html/index.html


RUN echo '<Directory /var/www/html/>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>\n\
DirectoryIndex index.php index.html\n' > /etc/apache2/conf-available/wordpress.conf \
    && a2enconf wordpress

CMD ["apachectl", "-D", "FOREGROUND"]
