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

1. Changer la version sur le **package.json** :

```
  "version": "1.0.0"
```

> Après chaque mise à jour, incrémenter la version par de 1 exemple : 1.0.1 puis 1.0.2 etc...


2. Lancer un prepublish afin de mettre à jour le dossier dist avec la commande :

```
npm run prepublish
```

3. Une fois le prepublish réussi, enregistrer et publier le code sur github : 

```
git add .
git commit -m "feat:(description de la modificiation)"
git push origin
```

4. Puis publiez sur npmjs.org :
```
npm publish
```

