import { ObjectId } from 'mongodb'

type CategorieCodeDecision = {
  code: string
  libelle: string
}

export type CodeDecision = {
  _id: ObjectId
  codeDecision: string
  libelleCodeDecision?: string
  categorieCodeDecision?: CategorieCodeDecision
  isTransmissibleToCC?: boolean
  overwritesNAC?: boolean

  routeCA?: null | string
  routeTJ?: null | string
}
