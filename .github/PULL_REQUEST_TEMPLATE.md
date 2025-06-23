## Rappels sur la publication du package

Le package est publié automatiquement sur NPM lorsque la PR est fusionnée dans `master`.

## Gestion des versions

Les versions sont gérées automatiquement par le [Github Actions](/.github/workflows/publish-npm-packages.yml):

Le nom de votre PR conditionne la montée de version du package :

- Si `BREAKING CHANGE` ou `!` est présent dans le titre ==> version majeure
- Si `feat` est présent dans le titre ==> version mineure
- Sinon ==> version patch

## Gestion de l'authentification

La génération et la mise a jour du token npmjs est géré par [Paul Déchorgnat](https://github.com/pauldechorgnat) et [Antoine Jeanneney](https://github.com/ajeanneney).
