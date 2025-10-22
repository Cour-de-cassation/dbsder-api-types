import { ObjectId } from 'bson'
import { Category } from './common'

export type Affaire = {
  _id: ObjectId
  replacementTerms: replacementTerms[]
  decisionIds: ObjectId[]
  numeroPourvois: string[]
}

type replacementTerms = {
  entityId: string
  replacementTerm: string
  originalTextInstances: string[]
  category: Category
}

export type UnIdentifiedAffaire = Omit<Affaire, '_id'>
