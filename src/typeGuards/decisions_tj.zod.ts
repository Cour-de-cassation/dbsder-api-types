import { z } from 'zod'

import {
  zBlocOccultation,
  zLabelStatus,
  zLabelTreatments,
  zObjectId,
  zOccultation,
  zPublishStatus,
  zQualitePartie,
  zRaisonInteretParticulier,
  zSuiviOccultation,
  zTypePartie,
  zZoning
} from './common.zod'
import { Decision, UnIdentifiedDecision } from './index'

const presidentTJSchema = z.object({
  nom: z.string(),
  prenom: z.string(),
  fonction: z.string(),
  civilite: z.string()
})
export type PresidentTJ = z.infer<typeof presidentTJSchema>

const decisionAssocieeTJSchema = z.object({
  idJuridiction: z.string(),
  numeroRegistre: z.string(),
  numeroRoleGeneral: z.string(),
  date: z.string(),
  idDecisionWinci: z.string().nullable().optional()
})
export type DecisionAssociateTJ = z.infer<typeof decisionAssocieeTJSchema>

const partieTJSchema = z.object({
  type: zTypePartie,
  nom: z.string(),
  prenom: z.string().nullable().optional(),
  civilite: z.string().nullable().optional(),
  qualite: zQualitePartie.nullable().optional()
})
export type PartieTJ = z.infer<typeof partieTJSchema>

export const decisionTjSchema = z.object({
  // Identifiant Mongo
  _id: zObjectId,

  // Identifiants WINCI
  sourceId: z.number(),
  sourceName: z.literal('juritj'),
  idDecisionWinci: z.string().nullable().optional(),
  idDecisionTJ: z.string(),


  // Identifiants métier
  /// Date
  dateDecision: z.string(),
  /// Juridiction
  jurisdictionCode: z.string().nullable().optional(),
  jurisdictionId: z.string(),
  jurisdictionName: z.string(),
  /// Dossier
  registerNumber: z.string(),
  numeroRoleGeneral: z.string(),

  // Textes
  originalText: z.string(),
  pseudoText: z.string().optional(),

  // Règles d'occultation
  blocOccultation: zBlocOccultation,
  recommandationOccultation: zSuiviOccultation,
  occultation: zOccultation,

  // Traitements NLP
  labelTreatments: zLabelTreatments.optional(),

  // Zonage
  zoning: z.record(z.string(), z.unknown()).nullable().optional(),
  originalTextZoning: zZoning.optional(),
  pseudoTextZoning: zZoning.optional(),

  // Statut
  labelStatus: zLabelStatus,
  publishStatus: zPublishStatus.optional(),

  // Dates d'événements
  dateCreation: z.string(),
  publishDate: z.string().optional().nullable(),
  firstImportDate: z.string().optional(),
  lastImportDate: z.string().optional(),
  unpublishDate: z.string().optional().nullable(),

  // Interet particulier
  selection: z.boolean(),
  sommaire: z.string().nullable().optional(),
  indicateurQPC: z.boolean().nullable().optional(),
  matiereDeterminee: z.boolean(),
  pourvoiCourDeCassation: z.boolean(),
  pourvoiLocal: z.boolean(),
  raisonInteretParticulier: zRaisonInteretParticulier.nullable().optional(),

  // Publicité de la décision et des débats
  public: z.boolean().nullable().optional(),
  debatPublic: z.boolean(),

  // Nature de l'affaire
  NACCode: z.string(),
  libelleNAC: z.string(),
  NPCode: z.string().nullable().optional(),
  libelleNatureParticuliere: z.string().nullable().optional(),

  // Nature de la décision
  endCaseCode: z.string(),
  libelleEndCaseCode: z.string(),

  // Service/Chambre ayant rendu la décision
  codeService: z.string(),
  libelleService: z.string(),

  // Lien avec le fichier source
  filenameSource: z.string(),

  // Personnes liées à la décision
  president: presidentTJSchema.nullable().optional(),
  parties: z.array(partieTJSchema).nullable().optional(),


  // Chaînage
  appeals: z.array(z.string()),
  decisionAssociee: decisionAssocieeTJSchema.nullable().optional(),

  // Variables présentes mais sans intérêt
  chamberId: z.literal(''),
  chamberName: z.literal(''),
  decatt: z.array(z.never()),
  publication: z.array(z.never()),

  // Variables absentes
  solution: z.string().nullable().optional(),
  formation: z.string().nullable().optional(),


  // Variables internes ?
  _rev: z.number().or(z.nan()).optional(),
  __v: z.number().or(z.nan()),
})
export type DecisionTj = z.infer<typeof decisionTjSchema>
export type UnIdentifiedDecisionTj = Omit<DecisionTj, '_id'>

export function hasSourceNameTj(x: UnIdentifiedDecision): x is UnIdentifiedDecisionTj
export function hasSourceNameTj(x: Decision): x is DecisionTj
export function hasSourceNameTj(
  x: Decision | UnIdentifiedDecision
): x is DecisionTj | UnIdentifiedDecisionTj {
  return x.sourceName === 'juritj'
}

export function parseDecisionTj(x: unknown): UnIdentifiedDecisionTj {
  return decisionTjSchema.omit({ _id: true }).parse(x)
}

export function parsePartialDecisionTj(x: unknown): Partial<DecisionTj> {
  return decisionTjSchema.partial().parse(x)
}
