# DBSDER API Types

Afin d'harmoniser nos types de données dans nos différents répertoires, nous proposons cette librairie définissant une décision comme modèle à maintenir.

Le type **DecisionDTO** est le suivant :

Tous les types sont renseignés dans **dbsderApiTypes.d.ts**

```typescript
export class DecisionDTO {
    id: string
    
    analysis: DecisionAnalyse
    
    appeals: Array<string>
    
    chamberId: string
    
    chamberName: string
    
    dateCreation?: string
    
    dateDecision?: string
    
    decatt: number[]
    
    jurisdictionCode: string
    
    jurisdictionId: string
    
    jurisdictionName: string
    
    labelStatus: LabelStatus
    
    labelTreatments: labelTreatmentsType
    
    occultation: {
        additionalTerms: string
        categoriesToOmit: string[]
    }
    
    originalText: string
    
    parties: Array<any>
    
    pseudoStatus: string
    
    pseudoText: string
    
    pubCategory: string
    
    publication: string[]
    
    registerNumber: string
    
    solution: string
    
    sourceId: number
    
    sourceName: string
    
    zoning?: {
        introduction_subzonage: {
            publication: string[]
        }
    }
    
    formation: string
    
    blocOccultation: number
    
    natureAffaireCivil?: string
    
    natureAffairePenal: string
    
    codeMatiereCivil?: string
    
    NAOCode: string
    
    NACCode?: string
    
    endCaseCode?: string
    
    filenameSource: string
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

