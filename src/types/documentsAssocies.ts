import { ObjectId } from 'bson'
import { LabelTreatments } from '../typeGuards/common.zod'

export enum DocumentAssocieType {
  AVIS = 'avis',
  RAPPORT = 'rapport'
}

export type DocumentAssocie = {
  _id: ObjectId
  decisionId: ObjectId
  documentType: DocumentAssocieType
  orignalText: string
  pseudoText?: string
  labelTreatments: LabelTreatments[]
  metadata?: Object
}
