# DBSDER API Types

Afin d'harmoniser nos types de données dans nos différents répertoires, nous proposons cette librairie définissant une décision comme modèle à maintenir.

## Utilisation de la librairie sur votre projet

Sur le répertoire de votre choix avec la commande :

```
npm install dbsder-api-types
```

Puis importer le type souhaité :

```typescript
import { DecisionDTO } from 'dbsder-api-types'
```

## Installation du package

Pour installer les packages nécessaires au bon fonctionnement de la librairie, ouvrir un terminal et entrer la commande suivante :

```bash
npm install
```  

N'oubliez pas d'installer **husky** pour obtenir les hooks de commit/push

```bash
npx husky install
```

## Publication du package

Une fois vos modifications faites :

1. Lancer un build afin de mettre à jour le dossier dist et la version du package avec la commande :

```
npm run build
```

Note : versionner une majeure ou une mineure se fait manuellement

2. Une fois le build réussi, enregistrer et publier le code sur github :

```
git add .
git commit -m "feat:(description de la modificiation)"
git push origin
```

3. Puis publiez sur npmjs.org :

```
npm publish
```
