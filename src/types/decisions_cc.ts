import type { ObjectId } from 'bson'
import {
  Occultation,
  LabelStatus,
  LabelTreatments,
  PseudoStatus,
  PublishStatus,
  BlocOccultation,
  Zoning
} from './common'

type JurisdictionCodeCC = 'AUTRE' | 'CC'

type AnalyzeCC = unknown[]

type TitreReferenceCC = unknown[]

type ViewPartieCC = {
  typePersonne: string
  partieId: number
  naturePartie: number
  typePartie: string
  idTitre: string
  nom: string
  prenom: string
  // nom marital ?
  nomMartial: string
  autrePrenom: string
  alias: string
  // peut être que vous pourriez utiliser l'api BAN (base des adresses nationales)
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

  originalText?: null | string
  pseudoText?: null | string

  dateDecision: null | string

  jurisdictionCode: null | JurisdictionCodeCC
  jurisdictionId?: null
  jurisdictionName: null | string

  public?: boolean | null
  solution?: string
  formation?: string | null

  labelStatus: LabelStatus
  publishStatus?: PublishStatus
  labelTreatments?: LabelTreatments

  dateCreation: string
  publishDate?: string | null
  firstImportDate?: string | null
  lastImportDate?: string
  unpublishDate?: string | null

  zoning?: 'Internal Server Error' | { [k: string]: unknown } | null

  originalTextZoning?: Zoning
  pseudoTextZoning?: Zoning

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
