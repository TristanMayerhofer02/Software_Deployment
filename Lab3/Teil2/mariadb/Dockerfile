# Basisimage
FROM debian:latest

# System-Updates und Installation von MariaDB
RUN apt-get update && apt-get install -y \
    mariadb-server \
    && rm -rf /var/lib/apt/lists/*

# Exponiere den MariaDB-Port
EXPOSE 3306

# Start MariaDB bei Container-Start
CMD ["mysqld"]
