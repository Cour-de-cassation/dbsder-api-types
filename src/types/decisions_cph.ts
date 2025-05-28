import { ObjectId } from 'mongodb'
import {
  BlocOccultation,
  LabelStatus,
  Occultation,
  SuiviOccultation,
} from './common'

export type DecisionCph = {
  _id: ObjectId,
  sourceId: number,
  sourceName: "portalis-cph",
  originalText: string,
  pseudoText?: string,

  zoning?: { [k: string]: unknown } | null
  originalTextZoning?: { [k: string]: unknown }
  pseudoTextZoning?: { [k: string]: unknown }

  dateDecision: string,
  dateCreation: string,
  publishDate?: string | null
  firstImportDate?: string | null
  lastImportDate?: string
  unpublishDate?: string | null,

  NACCode: string,
  NACLibelle: string,
  endCaseCode: string,
  libelleEndCaseCode: string,

  chamberId: string,
  chamberName: string
  jurisdictionCode: string,
  jurisdictionId: string,
  jurisdictionName: string,

  selection: boolean,
  sommaire: string,

  blocOccultation: BlocOccultation,
  occultation: Occultation,
  recommandationOccultation: SuiviOccultation,

  // parties: undefined,
  formation?: string | undefined,
  // composition: undefined,
  // president: undefined,
  // experts: undefined,

  public: boolean,
  debatPublic: boolean,
  indicateurQPC: boolean,
  // matiereDeterminee?: undefined,
  pourvoiCourDeCassation: boolean
  pourvoiLocal: boolean

  filenameSource: string

  labelStatus: LabelStatus,
}

export type UnIdentifiedDecisionCph = Omit<DecisionCph, '_id'>
