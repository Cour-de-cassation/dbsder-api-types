import { ObjectId } from 'mongodb'
import { Category } from './common'

export type Affaire = {
  _id: ObjectId
  replacementTerms: replacementTerms[]
  decisions: ObjectId[]
}

type replacementTerms = {
  entityId: string
  replacementTerm: string
  origialTextInstances: string[]
  category: Category
}
