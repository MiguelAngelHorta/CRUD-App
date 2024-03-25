# Base image for a web server
FROM httpd:2.4

# Copy your web app files to the container's document root
COPY . /usr/local/apache2/htdocs/

# Expose port 80 for the web server
EXPOSE 80