FROM debian:buster

ENV MYSQL_ROOT_PASSWORD='root' \
    MYSQL_DATABASE='wordpress' \
    MYSQL_USER='user' \
    MYSQL_PASSWORD='password' \
    DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get -y install mariadb-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/run/mysqld /var/lib/mysql && \
    sed -i 's/bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld

RUN service mysql start && \
    mysql --user=root -e "CREATE DATABASE IF NOT EXISTS wordpress;" && \
    mysql --user=root -e "CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';" && \
    mysql --user=root -e "GRANT ALL PRIVILEGES ON wordpress.* TO 'user'@'%';" && \
    mysql --user=root -e "FLUSH PRIVILEGES;"

EXPOSE 3306

CMD ["mysqld"]
