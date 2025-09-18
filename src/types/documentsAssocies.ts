import { ObjectId } from 'mongodb'
import { LabelTreatments } from './common'

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
}