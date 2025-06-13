# Étape 1 : image de base
FROM node:18

# Étape 2 : définir le répertoire de travail
WORKDIR /app

# Étape 3 : copier les fichiers nécessaires
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste des fichiers
COPY . .

# Étape 6 : exposer le port
EXPOSE 3000

# Étape 7 : commande de démarrage
CMD ["node", "index.js"]

