# DBSDER API Types

Afin d'harmoniser nos types de données dans nos différents répertoires, nous proposons cette librairie définissant une décision comme modèle à maintenir.

## Installation de la librairie

Sur le répertoire de votre choix avec la commande :
```
npm install dbsder-api-types
```

Puis importer le type souhaité :
```typescript
import { DecisionDTO } from 'dbsder-api-types'
```

## Publication du package

Une fois vos modifications faites :

1. Lancer un prepublish afin de mettre à jour le dossier dist et la version du package avec la commande :

```
npm run prepublish
```
Note : versionner une majeure ou une mineure se fait manuellement

2. Une fois le prepublish réussi, enregistrer et publier le code sur github : 

```
git add .
git commit -m "feat:(description de la modificiation)"
git push origin
```

3. Puis publiez sur npmjs.org :
```
npm publish
```

