import { z } from 'zod'
import { ObjectId } from 'bson'
import { Category, zBlocOccultation, zLabelRoute } from './common'

const zCategory = z.enum(Category)

const NiveauCodeNACSchema = z.object({
  code: z.string(),
  libelle: z.string()
})
export type NiveauCodeNAC = z.infer<typeof NiveauCodeNACSchema>

const CategoriesToOmitSchema = z.object({
  aucune: z.array(zCategory),
  conforme: z.array(zCategory),
  complément: z.array(zCategory),
  substituant: z.array(zCategory)
})

const CodeNacSchema = z.object({
  _id: z.instanceof(ObjectId),
  codeNAC: z.string(),
  libelleNAC: z.string(),
  niveau1NAC: NiveauCodeNACSchema,
  niveau2NAC: NiveauCodeNACSchema,

  indicateurAffaireSignalee: z.boolean(),
  indicateurDebatsPublics: z.boolean().optional(),
  indicateurDecisionRenduePubliquement: z.boolean().optional(),

  blocOccultationCA: zBlocOccultation.optional(),
  blocOccultationTJ: zBlocOccultation.optional(),
  categoriesToOmitCA: CategoriesToOmitSchema.optional(),
  categoriesToOmitTJ: CategoriesToOmitSchema.optional(),

  routeRelecture: zLabelRoute.optional(),

  isInJuricaDatabase: z.boolean(),
  logs: z.array(z.record(z.string(), z.unknown())) //julien: plus compliqué mais pas hyper important

  // dateDebutValidite: z.date(),
  // dateFinValidite: z.date().optional(),
})
export type CodeNac = z.infer<typeof CodeNacSchema>
