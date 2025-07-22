# Utilise Node.js Alpine pour un container léger
FROM node:20-alpine

# Dossier de travail dans le container
WORKDIR /app

# Copie des fichiers de dépendances en premier pour optimiser le cache Docker
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers du projet
COPY . .

# Expose le port utilisé par Nuxt (devServer.port)
EXPOSE 3000

# Démarre le serveur de développement
CMD ["npm", "run", "dev"]
