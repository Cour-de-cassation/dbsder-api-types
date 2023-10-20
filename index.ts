export enum LabelStatus {
    TOBETREATED = 'toBeTreated',
    LOADED = 'loaded',
    DONE = 'done',
    EXPORTED = 'exported',
    BLOCKED = 'blocked',
    IGNORED_DECISION_NON_PUBLIQUE = 'ignored_decisionNonPublique',
    IGNORED_DATE_DECISION_INCOHERENTE = 'ignored_dateDecisionIncoherente',
    IGNORED_CODE_NAC_NON_TRANSMIS_CC = 'ignored_codeNACnonTransmisCC',
    IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE = 'ignored_codeNACdeDecisionNonPublique',
    IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE = 'ignored_codeNACdeDecisionPartiellementPublique'
}

/**
 * typePartie:
 * PP = personne physique,
 * PM = personne morale, 
 * AA = autorité administrative
 */

export enum TypePartie {
    PP = 'PP',
    PM = 'PM',
    AA = 'AA'
  }
  
  /**
   *Qualité de la partie :
   * Si Personne Physique :
   *  I = Demandeur
   *  K = Défendeur
   *  M = Partie intervenante
   *  F = Autre partie
   * 
   * Si Personne Morale :
   *  J = Demandeur
   *  L = Défendeur
   *  G = Autre
   *  N = Partie intervenante
   */

export enum QualitePartie {
    F = 'F',
    G = 'G',
    I = 'I',
    J = 'J',
    K = 'K',
    L = 'L',
    M = 'M',
    N = 'N'
}

export interface Annotation {
    category: string;
    entityId: string;
    start: number;
    text: string;
    certaintyScore: number;
}

export interface LabelTreatment {
    annotations: Annotation[];
    source: string;
    order: number;
}

export interface DecisionAnalyse {
    analyse: string[];
    doctrine: string;
    link: string;
    reference: string[];
    source: string;
    summary: string;
    target: string;
    title: string[];
}

export interface Partie {
    type?: TypePartie
    nom?: string
    prenom?: string
    civilite?: string
    qualite?: QualitePartie
}

export interface DecisionOccultation {
    additionalTerms: string;
    categoriesToOmit: string[];
}

export enum Sources {
    CC = 'jurinet',
    TJ = 'juritj',
    CA = 'jurica',
}

 export interface DecisionAssociee {
    numeroRegistre: string
    numeroRoleGeneral: string
    idJuridiction: string
    date: string
    idDecisionWinci?: string
}
 export interface President {
    fonction: string
    nom: string
    prenom?: string
    civilite?: string

}
export enum Occultation {
    AUCUNE = 'aucune',
    CONFORME = 'conforme',
    SUBSTITUANT = 'substituant',
    COMPLEMENT = 'complément'
}

export interface DecisionDTO {
    _id: string;
    analysis?: DecisionAnalyse;
    appeals: string[];
    chamberId: string;
    chamberName: string;
    dateCreation: string;
    dateDecision: string;
    decatt?: number[];
    jurisdictionCode: string;
    jurisdictionId: string;
    jurisdictionName: string;
    labelStatus: LabelStatus;
    occultation: DecisionOccultation;
    originalText: string;
    pseudoStatus?: string;
    pseudoText?: string;
    public?: boolean;
    registerNumber: string;
    solution?: string;
    sourceId: number;
    sourceName: Sources;
    zoning?: object;
    publication?: string[];
    formation?: string;
    blocOccultation: number;
    NAOCode?: string;
    natureAffaireCivil?: string;
    natureAffairePenal?: string;
    codeMatiereCivil?: string;
    NACCode?: string;
    NPCode?: string;
    endCaseCode?: string;
    filenameSource?: string;
    labelTreatments?: LabelTreatment[];
    parties?: Partie[];
    pubCategory?: string;
}

export interface DecisionTJDTO extends DecisionDTO {
    codeDecision:string;
    codeNature:string;
    codeService:string;
    debatPublic:boolean;
    decisionAssociee : DecisionAssociee;
    indicateurQPC?: boolean;
    idDecisionWinci?: string;
    libelleCodeDecision:string;
    libelleNAC:string;
    libelleNatureParticuliere:string;
    libelleService:string;
    matiereDeterminee:boolean;
    numeroRoleGeneral:string;
    pourvoiCourDeCassation:boolean;
    pourvoiLocal:boolean;
    president?:President;
    recommandationOccultation : Occultation;
    sommaire?: string
    selection: boolean
}
