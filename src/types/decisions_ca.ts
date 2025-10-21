import { ObjectId } from 'bson'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatments,
  Occultation,
  PseudoStatus,
  PublishStatus,
  QualitePartie,
  SuiviOccultation,
  TypePartie
} from './common'

type PublicationCategoryCA = 'W' | 'A'

type PartieAttributesCA = {
  qualitePartie: QualitePartie
  typePersonne: TypePartie
}

type PartieCA = {
  attributes: PartieAttributesCA
  identite: string
}

type DecisionAnalysisCA = {
  analyse?: null[]
  doctrine?: null
  link?: null
  reference?: null[]
  source?: null
  summary?: null
  target?: null
  title?: null
  nature?: null
}

export type DecisionCa = {
  _id: ObjectId
  sourceId: number
  sourceName: 'jurica'

  _rev?: number
  _version?: number | null

  originalText?: string | null
  pseudoText?: string | null

  registerNumber: string
  dateDecision: string | null

  public?: boolean | null

  labelStatus: LabelStatus
  publishStatus?: PublishStatus
  labelTreatments?: LabelTreatments

  dateCreation: string
  publishDate?: string | null
  firstImportDate?: string | null
  lastImportDate?: string
  unpublishDate?: string | null

  zoning?: { [k: string]: unknown } | null // Deprecated : replaced by originalTextZoning and pseudoTextZoning

  originalTextZoning?: { [k: string]: unknown }
  pseudoTextZoning?: { [k: string]: unknown }

  NACCode?: string | null
  libelleNAC?: string
  NPCode?: string | null
  libelleNatureParticuliere?: string
  endCaseCode?: string | null
  libelleEndCaseCode?: string

  chamberId: string | null
  chamberName: string | null
  jurisdictionCode: string | null
  jurisdictionId: string | null
  jurisdictionName: string | null

  selection?: boolean
  sommaire?: string
  solution?: string | null

  blocOccultation?: BlocOccultation | null
  occultation?: Occultation
  recommandationOccultation?: SuiviOccultation

  pubCategory: PublicationCategoryCA
  pseudoStatus: PseudoStatus

  parties: PartieCA[] | {}

  natureAffaireCivil?: null
  natureAffairePenal?: null
  codeMatiereCivil?: null
  NAOCode?: null
  decatt?: null
  appeals: never[]
  publication?: never[] | null
  locked: false
  analysis: DecisionAnalysisCA
  formation?: null
}

export type UnIdentifiedDecisionCa = Omit<DecisionCa, '_id'>
