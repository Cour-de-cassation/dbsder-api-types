import { z } from 'zod'
import { ObjectId } from 'bson'
import { zBlocOccultation, zLabelRoute } from './common.zod'

const NiveauCodeNACSchema = z.object({
  code: z.string(),
  libelle: z.string()
})
export type NiveauCodeNAC = z.infer<typeof NiveauCodeNACSchema>

const ChapitreSchema = z.object({
  code: z.string().length(1),
  libelle: z.string()
})

const sousChapitreSchema = z.object({
  code: z.string(),
  libelle: z.string()
})

const categoriesToOccultSchema = z.object({
  suivi: z.array(z.string()).nullable(),
  nonSuivi: z.array(z.string()).nullable()
})

const CodeNacSchema = z.object({
  _id: z.instanceof(ObjectId),
  codeNAC: z.string().min(3).nonoptional(),
  libelleNAC: z.string().nonoptional(),
  chapitre: ChapitreSchema.nonoptional(),
  sousChapitre: sousChapitreSchema.nonoptional(),
  dateDebutValidite: z.date().nonoptional(),
  dateFinValidite: z.date().nullable(),
  routeRelecture: zLabelRoute.nullable(),
  blocOccultation: zBlocOccultation.nullable(),
  categoriesToOccult: categoriesToOccultSchema.nullable(),
  decisionsPubliques: z
    .enum(['decisions publiques', 'decisions non publiques', ' decisions mixtes'])
    .nullable(),
  debatsPublics: z.enum(['débats publics', 'débats non publics', 'debats mixte']).nullable(),
  obsolete: z.boolean().default(false)
})

export function parsePartialCodeNac(x: unknown): Partial<CodeNac> {
  return CodeNacSchema.partial().parse(x)
}

export type CodeNac = z.infer<typeof CodeNacSchema>
