#!/bin/bash

# Configuración
domains=(40.233.20.158)
rsa_key_size=4096
data_path="./certbot"
email="jbmontufar85@gmail.com" # Email para notificaciones de Let's Encrypt

# Crear directorio si no existe
if [ ! -e "$data_path" ]; then
  mkdir -p "$data_path"
fi

# Crear configuración temporal de nginx para obtener certificado
echo "### Creando configuración temporal de nginx..."
cat > nginx/nginx-temp.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name 40.233.20.158;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 301 https://$host$request_uri;
        }
    }
}
EOF

echo "### Iniciando nginx temporal..."
docker-compose up -d nginx

echo "### Obteniendo certificado SSL..."
docker-compose run --rm certbot \
  certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email $email \
  --agree-tos \
  --no-eff-email \
  -d 40.233.20.158

echo "### Parando nginx temporal..."
docker-compose down

echo "### Restaurando configuración original de nginx..."
cp nginx/nginx.conf nginx/nginx-final.conf

echo "### Iniciando servicios completos..."
docker-compose up -d

echo "### ¡Listo! Tu aplicación debería estar disponible en https://40.233.20.158"
