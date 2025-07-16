# Dockerfile para frontend
FROM node:lts-alpine
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npx", "vite", "preview", "--host"]
