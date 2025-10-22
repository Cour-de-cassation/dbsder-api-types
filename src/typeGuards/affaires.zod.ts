import { z } from 'zod'
import { Category } from '../types/common'
import { Affaire, UnIdentifiedAffaire } from '../types/affaires'
import { zObjectId } from './common.zod'

export const zCategory = z.enum(Category)

export const zReplacementTerms = z.object({
  entityId: z.string(),
  replacementTerm: z.string(),
  originalTextInstances: z.array(z.string()),
  category: zCategory
})

export const zAffaireSchema = z.object({
  _id: zObjectId,
  replacementTerms: z.array(zReplacementTerms),
  decisionIds: z.array(zObjectId),
  numeroPourvois: z.array(z.string())
})

export function parseAffaire(x: unknown): UnIdentifiedAffaire {
  return zAffaireSchema.omit({ _id: true }).parse(x)
}

export function parsePartialAffaire(x: unknown): Partial<Affaire> {
  return zAffaireSchema.partial().parse(x)
}
