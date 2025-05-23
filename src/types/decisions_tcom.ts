import { ObjectId } from 'mongodb'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatment,
  Occultation,
  PublishStatus,
  TypePartie
} from './common'

export enum JusticeFunctionTcom {
  GRF = 'GRF',
  JUG = 'JUG',
  PDT = 'PDT',
  PRO = 'PRO',
  JUS = 'JUS'
}

type CompositionTcom = {
  fonction?: JusticeFunctionTcom | null
  nom: string
  prenom?: string | null
  civilite?: string | null
}

export enum JusticeRoleTcom {
  AVOCAT = 'AVOCAT',
  AVOCAT_GENERAL = 'AVOCAT GENERAL',
  RAPPORTEUR = 'RAPPORTEUR',
  MANDATAIRE = 'MANDATAIRE',
  PARTIE = 'PARTIE',
  AUTRE = 'AUTRE'
}

type PartieTcom = {
  type: TypePartie
  role: JusticeRoleTcom
  nom: string
  prenom?: string | null
  civilite?: string | null
}

export type DecisionTcom = {
  _id?: ObjectId
  sourceId: number
  sourceName: 'juritcom'

  __v: number

  originalText: string
  pseudoText?: string

  registerNumber: string
  dateDecision: string

  jurisdictionCode: string
  jurisdictionId: string
  jurisdictionName: string

  public?: boolean | null
  solution?: string | null

  labelStatus: LabelStatus
  publishStatus?: PublishStatus
  labelTreatments?: LabelTreatment[]

  dateCreation: string
  publishDate?: string | null
  firstImportDate?: string
  lastImportDate?: string
  unpublishDate?: string | null

  zoning?: { [k: string]: unknown } | null
  originalTextZoning?: { [k: string]: unknown }
  pseudoTextZoning?: { [k: string]: unknown }

  chamberId?: string | null
  chamberName?: string | null

  debatPublic: boolean
  selection: boolean

  blocOccultation: BlocOccultation
  occultation: Occultation
  parties?: PartieTcom[] | null

  filenameSource: string

  appeals: never[]

  codeMatiereCivil?: string | null

  idGroupement: string
  idDecisionTCOM: string
  codeProcedure?: string | null
  libelleMatiere?: string | null
  composition?: CompositionTcom[] | null
}

export type UnIdentifiedDecisionTcom = Omit<DecisionTcom, '_id'>
