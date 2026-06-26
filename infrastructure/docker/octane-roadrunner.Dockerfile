FROM php:8.4-cli

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev unzip autoconf build-essential pkg-config libpq-dev \
    && pecl install mongodb redis \
    && docker-php-ext-enable mongodb redis \
    && docker-php-ext-install pdo_pgsql zip sockets

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install RoadRunner binary
RUN composer require spiral/roadrunner-cli && \
    ./vendor/bin/rr get-binary

# Expose Octane port
EXPOSE 8000

CMD ["php", "artisan", "octane:start", "--server=roadrunner", "--host=0.0.0.0", "--port=8000"]
