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

Le package est publié automatiquement sur [npmjs](https://www.npmjs.com/package/dbsder-api-types) lorsqu'un tag est ajouté. Le tag doit respecter le format `[0-9]+.[0-9]+.[0-9]+`. Pour clarifier le suivi il est préconisé d'ajouter le tag via une release github une fois la branche mergée sur master.
