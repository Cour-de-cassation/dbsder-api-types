# DBSDER API Types

Afin d'harmoniser nos types de données dans nos différents répertoires, nous proposons cette librairie définissant une décision comme modèle à maintenir.

Le type **DecisionDTO** est le suivant :

Tous les types sont renseignés dans **index.ts**

```typescript
export interface DecisionDTO {
    _id: string
    
    analysis: DecisionAnalyse
    
    appeals: string[]
    
    chamberId: string
    
    chamberName: string
    
    dateCreation: string
    
    dateDecision: string
    
    decatt: number[]
    
    jurisdictionCode: string
    
    jurisdictionId: string
    
    jurisdictionName: string
    
    labelStatus: LabelStatus
    
    occultation: DecisionOccultation
    
    originalText: string
    
    pseudoStatus?: string
    
    pseudoText?: string
    
    public?: boolean
    
    registerNumber: string
    
    solution: string
    
    sourceId: number
    
    sourceName: Sources
    
    zoning?: object
    
    publication: string[]
    
    formation: string
    
    blocOccultation: number
    
    NAOCode: string
    
    natureAffaireCivil: string
    
    natureAffairePenal: string
    
    codeMatiereCivil: string
    
    NACCode?: string
    
    NPCode?: string
    
    endCaseCode?: string
    
    filenameSource?: string
    
    labelTreatments?: string[]
    
    parties?: Partie[],
    
    pubCategory?: string
    
}
```

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

Une fois vos modifications faites, pensez à mettre à jour le code sur github.

Changer la version sur le **package.json** :

```
  "version": "1.0.0"
```

Après chaque mise à jour, incrémenter la version par :
```
  "version": "1.0.1"
```

Puis publiez sur npmjs.org :
```
npm publish
```

