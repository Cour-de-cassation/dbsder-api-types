import { ObjectId } from 'mongodb'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatments,
  Occultation,
  PublishStatus,
  QualitePartieExhaustive,
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

export class AdresseTcom {
  numero?: string | null
  type?: string | null
  voie?: string | null
  codePostal?: string | null
  pays?: string | null
  localite?: string | null
  complement?: string | null
  bureau?: string | null
}

type PartieTcom = {
  type: TypePartie
  role: JusticeRoleTcom
  nom: string
  nomUsage?: string | null
  prenom?: string | null
  prenomAutre?: string | null
  alias?: string | null
  civilite?: string | null
  qualite: QualitePartieExhaustive
  adresse?: AdresseTcom | null
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
  labelTreatments?: LabelTreatments

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
