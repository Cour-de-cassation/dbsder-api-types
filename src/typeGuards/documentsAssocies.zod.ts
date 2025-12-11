import { z } from 'zod'
import { zLabelTreatments, zObjectId } from './common.zod'

export enum DocumentAssocieType {
  AVIS = 'avis',
  RAPPORT = 'rapport'
}

export const documentAssocieTypeSchema = z.enum(DocumentAssocieType)

export const DocumentAssocieSchema = z.object({
  _id: zObjectId,
  decisionId: zObjectId,
  documentType: documentAssocieTypeSchema,
  originalText: z.string(),
  pseudoText: z.string().optional(),
  labelTreatments: z.array(zLabelTreatments),
  metadata: z.record(z.string(), z.unknown()).optional()
})
export type DocumentAssocie = z.infer<typeof DocumentAssocieSchema>
export type UnIdentifiedDocumentAssocie = Omit<DocumentAssocie, '_id'>

export function parseDocumentAssocie(x: unknown): UnIdentifiedDocumentAssocie {
  return DocumentAssocieSchema.omit({ _id: true }).parse(x)
}

export function parsePartialDocumentAssocie(x: unknown): Partial<DocumentAssocie> {
  return DocumentAssocieSchema.partial().parse(x)
}
