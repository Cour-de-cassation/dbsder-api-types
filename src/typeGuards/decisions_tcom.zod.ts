import { z } from 'zod'

import {
  zBlocOccultation,
  zLabelStatus,
  zLabelTreatments,
  zObjectId,
  zOccultation,
  zPublishStatus,
  zQualitePartie,
  zTypePartie,
  zZoning
} from './common.zod'
import { Decision, UnIdentifiedDecision } from './index'

export enum JusticeFunctionTcom {
  GRF = 'GRF',
  JUG = 'JUG',
  PDT = 'PDT',
  PRO = 'PRO',
  JUS = 'JUS'
}

export const justiceFunctionTcomSchema = z.enum(JusticeFunctionTcom)

const compositionTcomSchema = z.object({
  fonction: justiceFunctionTcomSchema.nullable().optional(),
  nom: z.string(),
  prenom: z.string().nullable().optional(),
  civilite: z.string().nullable().optional()
})
export type CompositionTcom = z.infer<typeof compositionTcomSchema>

export enum JusticeRoleTcom {
  AVOCAT = 'AVOCAT',
  AVOCAT_GENERAL = 'AVOCAT GENERAL',
  RAPPORTEUR = 'RAPPORTEUR',
  MANDATAIRE = 'MANDATAIRE',
  PARTIE = 'PARTIE',
  AUTRE = 'AUTRE'
}
export const justiceRoleTcomSchema = z.enum(JusticeRoleTcom)

const adresseTcomSchema = z.object({
  numero: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  voie: z.string().nullable().optional(),
  codePostal: z.string().nullable().optional(),
  pays: z.string().nullable().optional(),
  localite: z.string().nullable().optional(),
  complement: z.string().nullable().optional(),
  bureau: z.string().nullable().optional()
})
export type AdresseTcom = z.infer<typeof adresseTcomSchema>

const partieTcomSchema = z.object({
  type: zTypePartie,
  role: justiceRoleTcomSchema,
  nom: z.string(),
  nomUsage: z.string().nullable().optional(),
  prenom: z.string().nullable().optional(),
  prenomAutre: z.string().nullable().optional(),
  alias: z.string().nullable().optional(),
  civilite: z.string().nullable().optional(),
  qualite: zQualitePartie,
  adresse: adresseTcomSchema.nullable().optional()
})
export type PartieTcom = z.infer<typeof partieTcomSchema>

export const decisionTcomSchema = z.object({
  // Identifiant Mongo
  _id: zObjectId,

  // Identifiant juritcom
  sourceId: z.number(),
  sourceName: z.literal('juritcom'),

  // Identifiants métier
  /// Date
  dateDecision: z.string(),
  /// Juridiction
  jurisdictionCode: z.string(),
  jurisdictionId: z.string(),
  jurisdictionName: z.string(),
  /// Dossier
  registerNumber: z.string(),

  // Textes
  originalText: z.string(),
  pseudoText: z.string().optional(),

  // Règles d'occultation
  blocOccultation: zBlocOccultation,
  occultation: zOccultation,
  motifsSecretAffaires: z.boolean(),
  motifsDebatsChambreConseil: z.boolean(),

  // Traitements NLP
  labelTreatments: zLabelTreatments.optional(),

  // Zonage
  zoning: z.record(z.string(), z.unknown()).optional().nullable(),
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

  // Intérêt particulier
  selection: z.boolean(),

  // Publicité de la décision et des débats
  public: z.boolean().nullable().optional(),
  debatPublic: z.boolean(),

  // Nature de l'affaire et de la décision
  codeProcedure: z.string().nullable().optional(),
  solution: z.string().nullable().optional(),
  codeMatiereCivil: z.string().nullable().optional(),
  libelleMatiere: z.string().nullable().optional(),

  // Service/Chambre ayant rendu la décision
  chamberId: z.string().nullable().optional(),
  chamberName: z.string().nullable().optional(),

  // Lien avec le fichier source
  filenameSource: z.string(),

  // Personnes liées à la décision
  parties: z.array(partieTcomSchema).nullable().optional(),
  composition: z.array(compositionTcomSchema).nullable().optional(),

  // Autre: groupement émettant la décision
  idGroupement: z.string(),
  idDecisionTCOM: z.string(),

  // ?
  __v: z.number().or(z.nan()),
  appeals: z.array(z.never()),

})
export type DecisionTcom = z.infer<typeof decisionTcomSchema>
export type UnIdentifiedDecisionTcom = Omit<DecisionTcom, '_id'>

export function hasSourceNameTcom(x: UnIdentifiedDecision): x is UnIdentifiedDecisionTcom
export function hasSourceNameTcom(x: Decision): x is DecisionTcom
export function hasSourceNameTcom(
  x: Decision | UnIdentifiedDecision
): x is DecisionTcom | UnIdentifiedDecisionTcom {
  return x.sourceName === 'juritcom'
}

export function parseDecisionTcom(x: unknown): UnIdentifiedDecisionTcom {
  return decisionTcomSchema.omit({ _id: true }).parse(x)
}

export function parsePartialDecisionTcom(x: unknown): Partial<DecisionTcom> {
  return decisionTcomSchema.partial().parse(x)
}
