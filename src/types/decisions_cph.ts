import { ObjectId } from 'mongodb'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatments,
  Occultation,
  PublishStatus,
  SuiviOccultation
} from './common'

export type DecisionCph = {
  _id: ObjectId
  sourceId: number
  sourceName: 'portalis-cph'
  originalText: string
  pseudoText?: string

  originalTextZoning?: { [k: string]: unknown }
  pseudoTextZoning?: { [k: string]: unknown }

  labelStatus: LabelStatus
  publishStatus?: PublishStatus
  labelTreatments?: LabelTreatments

  dateDecision: string
  dateCreation: string
  publishDate?: string | null
  firstImportDate?: string | null
  lastImportDate?: string
  unpublishDate?: string | null

  NACCode: string
  NACLibelle?: string
  endCaseCode: string
  libelleEndCaseCode?: string

  chamberId?: string
  chamberName?: string
  jurisdictionCode: string
  jurisdictionId: string
  jurisdictionName: string

  selection: boolean
  sommaire?: string

  blocOccultation?: BlocOccultation
  occultation: Occultation
  recommandationOccultation: SuiviOccultation

  formation?: string
  parties: unknown[]
  composition: unknown[]
  tiers: unknown[]

  public: boolean
  debatPublic: boolean
  indicateurQPC?: boolean
  // matiereDeterminee?: undefined,
  pourvoiCourDeCassation: boolean
  pourvoiLocal: boolean

  filenameSource: string
}

export type UnIdentifiedDecisionCph = Omit<DecisionCph, '_id'>
