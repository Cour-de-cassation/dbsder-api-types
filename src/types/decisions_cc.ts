import type { ObjectId } from 'mongodb'
import {
  Occultation,
  LabelStatus,
  LabelTreatments,
  PseudoStatus,
  PublishStatus,
  BlocOccultation
} from './common'

type JurisdictionCodeCC = 'AUTRE' | 'CC'

type AnalyzeCC = [
  documentId: number,
  numAnalyze: number,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  sommaire: string,
  titreReference: string
]

type TitreReferenceCC = [
  documentId: number,
  numAnalyze: number | null,
  numTitreReference: number | null,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

type ViewPartieCC = {
  typePersonne: string
  partieId: number
  naturePartie: number
  typePartie: string
  idTitre: string
  nom: string
  prenom: string
  nomMartial: string
  autrePrenom: string
  alias: string
  domiciliation: string
  adresse1: string
  adresse2: string
  adresse3: string
  codePostal: string
  nomCommune: string
  numero: string
}

type DecisionAnalysisCC = {
  analyse?: null | AnalyzeCC[]
  doctrine?: null | string
  link?: null | string
  reference?: null | TitreReferenceCC[]
  source?: null | string
  summary?: null | string
  target?: null | string
  title?: null | string[]
  nature?: null | string
}

type PublicationCategoryCC = 'D' | 'P' | 'N' | 'B' | 'R' | 'L' | 'C'

export type DecisionCc = {
  _id: ObjectId
  sourceId: number
  sourceName: 'jurinet'

  _rev?: number
  __v?: number
  _version?: number | null

  originalText?: string
  pseudoText?: string

  dateDecision: null | string

  jurisdictionCode: null | JurisdictionCodeCC
  jurisdictionId?: null
  jurisdictionName: null | string

  public?: boolean | null
  solution?: string
  formation?: string

  labelStatus: LabelStatus
  publishStatus?: PublishStatus
  labelTreatments?: LabelTreatments

  dateCreation: string
  publishDate?: string | null
  firstImportDate?: string | null
  lastImportDate?: string
  unpublishDate?: string | null

  zoning?: 'Internal Server Error' | { [k: string]: unknown }

  originalTextZoning?: { [k: string]: unknown }
  pseudoTextZoning?: { [k: string]: unknown }

  registerNumber: string | null
  chamberId: string | null
  chamberName?: null
  pubCategory: PublicationCategoryCC | null
  pseudoStatus: PseudoStatus
  appeals: string[]
  analysis: DecisionAnalysisCC
  decatt?: string[] | number[] | null

  blocOccultation?: null | BlocOccultation

  natureAffaireCivil?: string | null
  natureAffairePenal?: string | null
  codeMatiereCivil?: string | null

  NAOCode?: string | null
  NACCode?: null
  NPCode?: null
  locked: boolean
  publication?: PublicationCategoryCC[]
  occultation: Occultation // OccultationTJ ?
  endCaseCode?: null
  isLoadedInLabel?: boolean
  parties?: ViewPartieCC[] | {}
  recommandationOccultation?: null
  selection?: false
}

export type UnIdentifiedDecisionCc = Omit<DecisionCc, '_id'>
