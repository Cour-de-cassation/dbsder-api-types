/*
import { ObjectId } from 'bson'
import { LabelStatus, PseudoStatus, PublishStatus } from '../typeGuards/common.zod'

type JurisdictionCodeDILA = 'CA' | 'CC' | 'OTHER' | 'TGI'

//same as CC :
type PublicationCategoryDILA = 'D' | 'P' | 'N' | 'B' | 'R' | 'L' | 'C'

type DecisionAnalysisDILA = {
  analyse?: null | never[]
  link: string[]
  reference: string[]
  source: string
  summary: string[]
  title: string[][]
  nature?: null | string
  target?: string | null
  doctrine?: null
}

type OccultationDILA = {
  additionalTerms: ''
  categoriesToOmit: never[]
}

export type DecisionDila = {
  _id: ObjectId
  sourceId: string
  sourceName: 'dila'

  _rev: number
  _version: number

  registerNumber: string | number | null
  dateDecision: string | Date // not sure about datetime.datetime

  dateCreation: string | Date // not sure about datetime.datetime

  jurisdictionCode: JurisdictionCodeDILA
  jurisdictionName: string

  chamberId: string | number | null
  pubCategory: PublicationCategoryDILA
  solution: string | null

  pseudoText: string | null
  pseudoStatus: PseudoStatus

  appeals: (string | number)[]
  analysis: DecisionAnalysisDILA

  labelStatus: LabelStatus
  occultation?: OccultationDILA
  publishStatus?: PublishStatus
  unpublishDate?: string | null
  public?: true
  locked: false

  NACCode?: null
  NPCode?: null
  endCaseCode?: null
  labelTreatments: never[]
  parties: never[] | {}
  decatt?: null
  natureAffaireCivil?: null
  codeMatiereCivil?: null
  natureAffairePenal?: null
  publication?: never[]
  chamberName?: null
  originalText?: null
  zoning?: null
  formation?: null
  blocOccultation?: null
  jurisdictionId?: null
}

export type UnIdentifiedDecisionDila = Omit<DecisionDila, '_id'>
*/
