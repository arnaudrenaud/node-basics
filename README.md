# Node.js : bases

## Développement

### Exécution du code

Exécuter `npm start` (ou `npm run start`).

### Formatage automatique

Il est recommandé d'utiliser l'extension Prettier pour Visual Studio Code.
Pour formater automatiquement chaque fichier lors de sa sauvegarde, cocher l'option "Format on save" de VS Code.

## Initialisation d'un projet similaire

Exécuter la commande `npm init` (déjà fait dans le projet présent, ne pas refaire).

### Conteneurisation avec Docker et Docker Compose

Lancer le projet (serveur web et base de données) :

```
docker compose watch
```

(ou `docker compose up --build`).

Afficher les logs en parallèle :

```
docker compose logs -f
```
