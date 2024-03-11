# DBSDER API Types

Afin d'harmoniser nos types de données dans nos différents répertoires, nous proposons cette librairie définissant une décision comme modèle à maintenir.

## Utilisation de la librairie sur votre projet

Sur le répertoire de votre choix avec la commande :

```sh
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

## Modifier et publier le package

* Créer une branch pour faire vos modifications
* Une fois les modifications terminées ouvrir une PR sur github
* Le nom de votre PR conditionne la montée de version du package :
    - Si `BREAKING CHANGE` ou `!` est présent dans le titre ==> version majeure
    - Si `feat` est présent dans le titre ==> version mineure
    - Sinon ==> version patch 
* Une fois votre PR merge vérifier le bon fonctionnement du github action.


# Pour utiliser le package en local sur un projet

* `npm run build`
* Dans le projet ou vous souhaitez utiliser le package : `npm install --save ~/PATH/TO/THE/REPO/dbsder-api-types`