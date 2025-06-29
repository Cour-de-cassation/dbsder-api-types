// Generated by ts-to-zod
import { z } from 'zod'

import {
  zBlocOccultation,
  zLabelStatus,
  zLabelTreatments,
  zObjectId,
  zOccultation,
  zPublishStatus,
  zQualitePartie,
  zSuiviOccultation,
  zTypePartie
} from './common.zod'
import { UnIdentifiedDecision, UnIdentifiedDecisionTj, Decision, DecisionTj } from '../types'

const presidentTJSchema = z.object({
  nom: z.string(),
  prenom: z.string(),
  fonction: z.string(),
  civilite: z.string()
})

const decisionAssocieeTJSchema = z.object({
  idJuridiction: z.string(),
  numeroRegistre: z.string(),
  numeroRoleGeneral: z.string(),
  date: z.string(),
  idDecisionWinci: z.string().nullable().optional()
})

const partieTJSchema = z.object({
  type: zTypePartie,
  nom: z.string(),
  prenom: z.string().nullable().optional(),
  civilite: z.string().nullable().optional(),
  qualite: zQualitePartie.nullable().optional()
})

export const decisionTjSchema = z.object({
  _id: zObjectId,
  sourceId: z.number().or(z.nan()),
  sourceName: z.literal('juritj'),
  _rev: z.number().or(z.nan()).optional(),
  __v: z.number().or(z.nan()),
  originalText: z.string(),
  pseudoText: z.string().optional(),
  registerNumber: z.string(),
  dateDecision: z.string(),
  jurisdictionCode: z.string().nullable().optional(),
  jurisdictionId: z.string(),
  jurisdictionName: z.string(),
  public: z.boolean().nullable().optional(),
  solution: z.string().nullable().optional(),
  formation: z.string().nullable().optional(),
  labelStatus: zLabelStatus,
  publishStatus: zPublishStatus.optional(),
  labelTreatments: zLabelTreatments.optional(),
  dateCreation: z.string(),
  publishDate: z.string().optional().nullable(),
  firstImportDate: z.string().optional(),
  lastImportDate: z.string().optional(),
  unpublishDate: z.string().optional(),
  zoning: z.record(z.unknown()).nullable().optional(),
  originalTextZoning: z.record(z.unknown()).optional(),
  pseudoTextZoning: z.record(z.unknown()).optional(),
  NACCode: z.string(),
  libelleNAC: z.string(),
  NPCode: z.string().nullable().optional(),
  libelleNatureParticuliere: z.string().nullable().optional(),
  endCaseCode: z.string(),
  libelleEndCaseCode: z.string(),
  chamberId: z.literal(''),
  chamberName: z.literal(''),
  codeService: z.string(),
  libelleService: z.string(),
  debatPublic: z.boolean(),
  indicateurQPC: z.boolean().nullable().optional(),
  matiereDeterminee: z.boolean(),
  pourvoiCourDeCassation: z.boolean(),
  pourvoiLocal: z.boolean(),
  selection: z.boolean(),
  sommaire: z.string().nullable().optional(),
  blocOccultation: zBlocOccultation,
  recommandationOccultation: zSuiviOccultation,
  occultation: zOccultation,
  president: presidentTJSchema.nullable().optional(),
  parties: z.array(partieTJSchema).nullable().optional(),
  filenameSource: z.string(),
  idDecisionTJ: z.string(),
  idDecisionWinci: z.string().nullable().optional(),
  numeroRoleGeneral: z.string(),
  appeals: z.array(z.string()),
  decatt: z.array(z.never()),
  publication: z.array(z.never()),
  decisionAssociee: decisionAssocieeTJSchema.nullable().optional()
})

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
