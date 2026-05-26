import { z } from 'zod'

import {
  zLabelStatus,
  zLabelTreatments,
  zObjectId,
  zOccultation,
  zPublishStatus,
  zRaisonInteretParticulier,
  zSuiviOccultation,
  zZoning
} from './common.zod'
import { Decision, UnIdentifiedDecision } from './index'

const zDecisionAttaquee = z.object({
  type_juridiction: z.string().nullable(),
  ville: z.string().nullable(),
  date: z.string().nullable()
})
export type DecisionAttaqueeCaV2 = z.infer<typeof zDecisionAttaquee>

const zParty = z.object({
  identite: z.string().optional(),
  qualite_partie: z.string().optional(),
  type_personne: z.string().optional()
})
export type PartyCaV2 = z.infer<typeof zParty>

export const decisionCaV2Schema = z.object({
  // Identifiant Mongo
  _id: zObjectId,

  // Identifiants JURICA V2
  sourceId: zObjectId,
  sourceName: z.literal('juricav2'),

  // Identifiants métier
  /// Date
  dateDecision: z.string(),
  /// Juridiction
  jurisdictionCode: z.string(),
  jurisdictionId: z.string(),
  jurisdictionName: z.string(),
  /// Dossier
  registerNumber: z.string().trim().min(1).max(40),

  // Textes
  originalText: z.string(),
  pseudoText: z.string().optional(),

  // Règles d'occultation
  occultation: zOccultation,
  recommandationOccultation: zSuiviOccultation,

  // Traitements NLP
  labelTreatments: zLabelTreatments.optional(),

  // Zonage
  zoning: zZoning.optional(),
  originalTextZoning: zZoning.optional(),
  pseudoTextZoning: zZoning.optional(),

  // Statut
  labelStatus: zLabelStatus,
  publishStatus: zPublishStatus.optional(),

  // Dates d'événements
  dateCreation: z.string(),
  publishDate: z.string().optional().nullable(),
  firstImportDate: z.string().optional().nullable(),
  lastImportDate: z.string().optional(),
  unpublishDate: z.string().optional().nullable(),
  
  // Interet particulier
  selection: z.boolean(),
  sommaire: z.string().optional(),
  indicateurQPC: z.boolean().optional(),
  matiereDeterminee: z.boolean().optional(),
  pourvoiLocal: z.boolean().optional(),
  pourvoiCourDeCassation: z.boolean().optional(),
  raisonInteretParticulier: zRaisonInteretParticulier.nullable().optional(),

  // Publicité de la décision
  public: z.boolean(),
  debatPublic: z.boolean(),

  // Nature de l'affaire
  NACCode: z.string(),
  NACLibelle: z.string().optional(),

  // Nature de la décision
  endCaseCode: z.string(),
  libelleEndCaseCode: z.string().optional(),

  // Service/Chambre ayant rendu la décision
  chamberId: z.string().optional(),
  chamberName: z.string().optional(),

  // Lien avec le fichier source
  filenameSource: z.string().optional(),

  // Personnes liées à la décision
  parties: z.union([z.array(zParty), z.object({})]).optional(),
  composition: z.string().max(200).nullable().optional(),
  

  // ????????????????????????????????????????
  solution: z.string().optional(),
  
  // Chaînage
  decatt: zDecisionAttaquee.nullable().optional()

})
export type DecisionCaV2 = z.infer<typeof decisionCaV2Schema>
export type UnIdentifiedDecisionCaV2 = Omit<DecisionCaV2, '_id'>

export function hasSourceNameCaV2(x: UnIdentifiedDecision): x is UnIdentifiedDecisionCaV2
export function hasSourceNameCaV2(x: Decision): x is DecisionCaV2
export function hasSourceNameCaV2(
  x: Decision | UnIdentifiedDecision
): x is DecisionCaV2 | UnIdentifiedDecisionCaV2 {
  return x.sourceName === 'juricav2'
}

export function parseDecisionCaV2(x: unknown): UnIdentifiedDecisionCaV2 {
  return decisionCaV2Schema.omit({ _id: true }).parse(x)
}

export function parsePartialDecisionCaV2(x: unknown): Partial<DecisionCaV2> {
  return decisionCaV2Schema.partial().parse(x)
}
