import { record, z } from 'zod'
import { ObjectId } from 'bson'
import {
  BlocOccultation,
  Category,
  LabelRoute,
  LabelStatus,
  PseudoStatus,
  PublishStatus,
  QualitePartieExhaustive,
  SuiviOccultation,
  TypePartieExhaustive
} from './common.enum'

export const zLabelStatus = z.enum(LabelStatus)

export const zPublishStatus = z.enum(PublishStatus)

const zCategory = z.enum(Category)

const zEntity = z.object({
  entityId: z.string(),
  text: z.string(),
  start: z.number().or(z.nan()),
  end: z.number().or(z.nan()).optional(),
  category: zCategory,
  score: z.number().or(z.nan()).optional().nullable(),
  certaintyScore: z.number().or(z.nan()).optional().nullable(),
  source: z.string().optional().nullable()
})
export type Entity = z.infer<typeof zEntity>

const zSentenceIndex = z.object({
  start: z.number().or(z.nan()),
  end: z.number().or(z.nan())
})
export type SentenceIndex = z.infer<typeof zSentenceIndex>

const zCheck = z.object({
  check_type: z.string(),
  message: z.string(),
  short_message: z.string(),
  entities: z.array(zEntity),
  sentences: z.array(zSentenceIndex),
  metadata_text: z.array(z.string()),
  _rank: z.number().or(z.nan()).nullable().optional()
})
export type Check = z.infer<typeof zCheck>

const zNLPVersionDetails = z.object({
  version: z.string(),
  date: z.string()
})
export type NLPVersionDetails = z.infer<typeof zNLPVersionDetails>

const zModelName = z.object({
  name: z.string()
})
export type ModelName = z.infer<typeof zModelName>

const zNLPVersion = z.object({
  juriSpacyTokenizer: zNLPVersionDetails,
  juritools: zNLPVersionDetails,
  pseudonymisationApi: zNLPVersionDetails.optional(),
  nlpApi: zNLPVersionDetails.optional(),
  model: zModelName
})
export type NLPVersion = z.infer<typeof zNLPVersion>

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
export type LabelTreatments = z.infer<typeof zLabelTreatments>

export const zPseudoStatus = z.enum(PseudoStatus)

export const zOccultation = z.object({
  additionalTerms: z.string(),
  additionalTermsToAnnotate: z.array(z.string()).optional(),
  additionalTermsToUnAnnotate: z.array(z.string()).optional(),
  categoriesToOmit: z.array(zCategory),
  motivationOccultation: z.boolean().optional()
})
export type Occultation = z.infer<typeof zOccultation>

export const zSuiviOccultation = z.enum(SuiviOccultation)

export const zQualitePartie = z.enum(QualitePartieExhaustive)
export type QualitePartie = z.infer<typeof zQualitePartie>

export const zTypePartie = z.enum(TypePartieExhaustive)
export type TypePartie = z.infer<typeof zTypePartie>

export const zBlocOccultation = z.enum(BlocOccultation)

export const zLabelRoute = z.enum(LabelRoute)

export const zObjectId = z
  .string()
  .refine((id: string) => {
    return ObjectId.isValid(id) && new ObjectId(id).toString() === id
  })
  .transform((_) => new ObjectId(_))

export const zZoneRange = z.object({
  start: z.number(),
  end: z.number()
})
export type ZoneRange = z.infer<typeof zZoneRange>

export const zZoningZones = z.object({
  introduction: zZoneRange.optional().nullable(),
  moyens: z.array(zZoneRange).optional(),
  'expose du litige': zZoneRange.optional().nullable(),
  motivations: z.array(zZoneRange).optional(),
  dispositif: zZoneRange.optional().nullable(),
  'moyens annexes': z.array(zZoneRange).optional()
})
export type ZoningZone = z.infer<typeof zZoningZones>

export const zIntroductionSubzonageJurinet = z.object({
  n_arret: z.string().optional().nullable(),
  formation: z.string().optional().nullable(),
  publication: z.array(z.string()).optional().nullable(),
  juridiction: z.string().optional().nullable(),
  chambre: z.string().optional().nullable(),
  pourvoi: z.array(z.string()).optional().nullable(),
  composition: zZoneRange.optional().nullable()
})
export type IntroductionSubzonageJurinet = z.infer<typeof zIntroductionSubzonageJurinet>

export const zIntroductionSubzonageJurica = z.object({
  type_arret: z.string().optional().nullable(),
  code_nac: z.string().optional().nullable(),
  nportalis: z.string().optional().nullable(),
  j_preced: zZoneRange.optional().nullable(),
  j_preced_date: z.string().optional().nullable(),
  j_preced_nrg: z.string().optional().nullable(),
  j_preced_npourvoi: z.string().optional().nullable(),
  j_preced_instance: z.string().optional().nullable(),
  composition: zZoneRange.optional().nullable()
})
export type IntroductionSubzonageJurica = z.infer<typeof zIntroductionSubzonageJurica>

export const zCurrentZoning = z.object({
  zones: zZoningZones.optional(),
  introduction_subzonage: zIntroductionSubzonageJurinet.or(zIntroductionSubzonageJurica).optional(),
  visa: z.array(z.string()).optional().nullable(),
  is_public: z.number().optional().nullable(),
  is_public_text: z.array(z.string()).optional().nullable(),
  arret_id: z.number()
})
export type CurrentZoning = z.infer<typeof zCurrentZoning>

export const zZoning = zCurrentZoning.or(record(z.string(), z.unknown()))
export type Zoning = z.infer<typeof zZoning>
