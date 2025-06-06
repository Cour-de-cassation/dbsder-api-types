// Generated by ts-to-zod
import { z } from 'zod'
import {
  PseudoStatus,
  BlocOccultation,
  LabelRoute,
  LabelStatus,
  PublishStatus,
  Category,
  SuiviOccultation,
  QualitePartieExhaustive,
  TypePartieExhaustive,
  LabelTreatments
} from '../types/common'
import { ObjectId } from 'mongodb'

export const zLabelStatus = z.nativeEnum(LabelStatus)

export const zPublishStatus = z.nativeEnum(PublishStatus)

const zCategory = z.nativeEnum(Category)

const zEntity = z.object({
  entityId: z.string(),
  text: z.string(),
  start: z.number().or(z.nan()),
  end: z.number().or(z.nan()).optional(),
  category: zCategory,
  score: z.number().or(z.nan()).optional(),
  certaintyScore: z.number().or(z.nan()).optional().nullable(),
  source: z.string().optional()
})

const zSentenceIndex = z.object({
  start: z.number().or(z.nan()),
  end: z.number().or(z.nan())
})

const zCheck = z.object({
  check_type: z.string(),
  message: z.string(),
  short_message: z.string(),
  entities: z.array(zEntity),
  sentences: z.array(zSentenceIndex),
  metadata_text: z.array(z.string()),
  _rank: z.number().or(z.nan()).nullable().optional()
})

const zNLPVersionDetails = z.object({
  version: z.string(),
  date: z.string()
})

const zModelName = z.object({
  name: z.string()
})

const zNLPVersion = z.object({
  juriSpacyTokenizer: zNLPVersionDetails,
  juritools: zNLPVersionDetails,
  pseudonymisationApi: zNLPVersionDetails.optional(),
  nlpApi: zNLPVersionDetails.optional(),
  model: zModelName
})

export const zLabelTreatments = z.array(
  z.object({
    order: z.number().or(z.nan()),
    annotations: z.array(zEntity),
    source: z.string(),
    version: zNLPVersion.optional().nullable(),
    treatmentDate: z.string().optional(),
    checklist: z.array(zCheck).optional()
  })
)

export const zPseudoStatus = z.nativeEnum(PseudoStatus)

export const zOccultation = z.object({
  additionalTerms: z.string(),
  categoriesToOmit: z.array(zCategory),
  motivationOccultation: z.boolean().optional()
})

export const zSuiviOccultation = z.nativeEnum(SuiviOccultation)

export const zQualitePartie = z.nativeEnum(QualitePartieExhaustive)

export const zTypePartie = z.nativeEnum(TypePartieExhaustive)

export const zBlocOccultation = z.nativeEnum(BlocOccultation)

export const zLabelRoute = z.nativeEnum(LabelRoute)

export const zObjectId = z
  .string()
  .refine((id: string) => {
    return ObjectId.isValid(id) && new ObjectId(id).toString() === id
  })
  .transform((_) => new ObjectId(_))

export function parseLabelStatus(x: unknown): LabelStatus {
  return zLabelStatus.parse(x)
}

export function parseLabelTreatments(x: unknown): LabelTreatments {
  return zLabelTreatments.parse(x)
}

export function parsePublishStatus(x: unknown): PublishStatus {
  return zPublishStatus.parse(x)
}
