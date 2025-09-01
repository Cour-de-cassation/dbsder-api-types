import { ObjectId } from 'mongodb'
import { BlocOccultation, Category, LabelRoute } from './common'

type NiveauCodeNAC = {
  code: string
  libelle: string
}

export type CodeNac = {
  _id: ObjectId
  codeNAC: string
  libelleNAC: string
  niveau1NAC: NiveauCodeNAC
  niveau2NAC: NiveauCodeNAC

  indicateurAffaireSignalee: boolean
  indicateurDebatsPublics?: boolean
  indicateurDecisionRenduePubliquement?: boolean

  blocOccultationCA?: BlocOccultation
  blocOccultationTJ?: BlocOccultation
  categoriesToOmitCA?: {
    aucune: Category[]
    conforme: Category[]
    complément: Category[]
    substituant: Category[]
  }
  categoriesToOmitTJ?: {
    aucune: Category[]
    conforme: Category[]
    complément: Category[]
    substituant: Category[]
  }

  routeRelecture?: LabelRoute

  isInJuricaDatabase: boolean
  logs: { [k: string]: unknown }[] // plus compliqué mais pas hyper important

  // dateDebutValidite: Date
  // dateFinValidite?: Date
}
