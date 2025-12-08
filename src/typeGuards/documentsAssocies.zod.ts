import { z } from 'zod'
import { ObjectId } from 'bson'
import { zLabelTreatments } from './common.zod'

export enum DocumentAssocieType {
  AVIS = 'avis',
  RAPPORT = 'rapport'
}

// Schéma Zod pour l'enum
export const documentAssocieTypeSchema = z.enum(DocumentAssocieType)

// Schéma pour DocumentAssocie
export const DocumentAssocieSchema = z.object({
  _id: z.instanceof(ObjectId),
  decisionId: z.instanceof(ObjectId),
  documentType: documentAssocieTypeSchema,
  orignalText: z.string(),
  pseudoText: z.string().optional(),
  labelTreatments: z.array(zLabelTreatments),
  metadata: z.record(z.string(), z.unknown()).optional()
})
export type DocumentAssocie = z.infer<typeof DocumentAssocieSchema>
