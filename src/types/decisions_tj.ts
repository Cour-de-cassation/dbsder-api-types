import { ObjectId } from 'mongodb'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatment,
  Occultation,
  PublishStatus,
  QualitePartie,
  SuiviOccultation,
  TypePartie
} from './common'

type PresidentTj = {
  nom: string
  prenom: string
  fonction: string
  civilite: string
}

type DecisionAssocieeTj = {
  idJuridiction: string
  numeroRegistre: string
  numeroRoleGeneral: string
  date: string
  idDecisionWinci?: string
}

type PartieTj = {
  type: TypePartie
  nom: string
  prenom?: string
  civilite?: string
  qualite?: QualitePartie
}

export type DecisionTj = {
  _id: ObjectId
  sourceId: number
  sourceName: 'juritj'

  _rev?: number
  __v: number

  originalText: string
  pseudoText?: string

  registerNumber: string
  dateDecision: string

  jurisdictionCode?: string
  jurisdictionId: string
  jurisdictionName: string

  public?: boolean
  solution?: string
  formation?: string

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

  NACCode: string
  libelleNAC: string
  NPCode?: string
  libelleNatureParticuliere?: string
  endCaseCode: string
  libelleEndCaseCode: string

  chamberId: ''
  chamberName: ''
  codeService: string
  libelleService: string

  debatPublic: boolean
  indicateurQPC?: boolean
  matiereDeterminee: boolean
  pourvoiCourDeCassation: boolean
  pourvoiLocal: boolean
  selection: boolean
  sommaire?: string

  blocOccultation: BlocOccultation
  recommandationOccultation: SuiviOccultation
  occultation: Occultation

  president?: PresidentTj
  parties?: PartieTj[]

  filenameSource: string
  idDecisionTJ: string
  idDecisionWinci?: string
  numeroRoleGeneral: string

  appeals: string[]
  decatt: never[]
  publication: never[]
  decisionAssociee?: DecisionAssocieeTj
}

export type UnIdentifiedDecisionTj = Omit<DecisionTj, '_id'>
