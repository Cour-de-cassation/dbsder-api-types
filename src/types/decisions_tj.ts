import { ObjectId } from 'bson'
import {
  BlocOccultation,
  LabelStatus,
  LabelTreatments,
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
  idDecisionWinci?: string | null
}

type PartieTj = {
  type: TypePartie
  nom: string
  prenom?: string | null
  civilite?: string | null
  qualite?: QualitePartie | null
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

  jurisdictionCode?: string | null
  jurisdictionId: string
  jurisdictionName: string

  public?: boolean | null
  solution?: string | null
  formation?: string | null

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

  NACCode: string
  libelleNAC: string
  NPCode?: string | null
  libelleNatureParticuliere?: string | null
  endCaseCode: string
  libelleEndCaseCode: string

  chamberId: ''
  chamberName: ''
  codeService: string
  libelleService: string

  debatPublic: boolean
  indicateurQPC?: boolean | null
  matiereDeterminee: boolean
  pourvoiCourDeCassation: boolean
  pourvoiLocal: boolean
  selection: boolean
  sommaire?: string | null

  blocOccultation: BlocOccultation
  recommandationOccultation: SuiviOccultation
  occultation: Occultation

  president?: PresidentTj | null
  parties?: PartieTj[] | null

  filenameSource: string
  idDecisionTJ: string
  idDecisionWinci?: string | null
  numeroRoleGeneral: string

  appeals: string[]
  decatt: never[]
  publication: never[]
  decisionAssociee?: DecisionAssocieeTj | null
}

export type UnIdentifiedDecisionTj = Omit<DecisionTj, '_id'>
