# DBSDER API Types

Cette librairie contient défini les types correspondant aux données contenue dans la base de donnée mongo DBSDER. Elle contient également des fonctions de parsing permettant de valider les objets en s'appuyant sur leur schéma zod.

Les schéma zod ont été générés en utilisant la librairie `ts-to-zod`. Lorsque l'on fait évoluer un type il faut modifier également le schéma zod associé ou utiliser a nouveau la librairie.

## Utilisation de la librairie sur votre projet

[![npm](https://img.shields.io/npm/v/dbsder-api-types)](https://www.npmjs.com/package/dbsder-api-types)

Sur le répertoire de votre choix avec la commande :

```sh
npm install dbsder-api-types
```

## Utilisation de la librairie en local

```bash
npm install
```

```bash
npm run watch
```

Pour utiliser localement cette librairie dans un autre projet Node.js, vous pouvez créer un lien symbolique avec npm link :

```bash
npm link ~/PATH/TO/THE/REPO/dbsder-api-types

```

## Modifier et publier le package

Le package est automatiquement publié sur [npmjs](https://www.npmjs.com/package/dbsder-api-types) et la version incrémentée lorsque le code est fusioné dans la branche master. Voici la marche a suivre :

- Créer une branch issue de `master` pour faire vos modifications
- Une fois les modifications terminées ouvrir une PR sur github
- Le nom de votre PR conditionne la montée de version du package :
  - Si `BREAKING CHANGE` ou `!` est présent dans le titre ==> version majeure
  - Si `feat` est présent dans le titre ==> version mineure
  - Sinon ==> version patch
- Une fois votre PR merge vérifier le bon fonctionnement du github action.
