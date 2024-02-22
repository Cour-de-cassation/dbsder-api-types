# Rappels sur la publication du package

Le package est publié automatiquement sur NPM lorsque la PR est fusionnée dans `master`.

## Gestion des versions

Les versions sont gérées automatiquement par le [Github Actions](/.github/workflows/publish-npm-package.yml):

- si le dernier commit contient la mention `BREAKING CHANGES`, la version majeure est augmentée.
- si le dernier commit contient la mention `feat`, la version mineure est augmentée.
- autrement, le patch est augmenté.

## Gestion de l'authentification

Les identifiants sont gérés par [Paul Déchorgnat](https://github.com/pauldechorgnat).
