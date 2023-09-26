export declare enum LabelStatus {
    TOBETREATED = "toBeTreated",
    LOADED = "loaded",
    DONE = "done",
    EXPORTED = "exported",
    BLOCKED = "blocked",
    IGNORED_DECISION_NON_PUBLIQUE = "ignored_decisionNonPublique",
    IGNORED_DATE_DECISION_INCOHERENTE = "ignored_dateDecisionIncoherente",
    IGNORED_CODE_NAC_NON_TRANSMIS_CC = "ignored_codeNACnonTransmisCC",
    IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE = "ignored_codeNACdeDecisionNonPublique",
    IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE = "ignored_codeNACdeDecisionPartiellementPublique"
}
export declare enum TypePartie {
    PP = "PP",
    PM = "PM",
    AA = "AA"
}
export declare enum QualitePartie {
    F = "F",
    G = "G",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N"
}
export type labelTreatmentsType = Array<{
    annotations: Array<{
        category: string;
        entityId: string;
        start: number;
        text: string;
    }>;
    source: string;
    order: number;
}>;
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
    type?: TypePartie;
    nom: string;
    prenom?: string;
    civilite?: string;
    qualite?: QualitePartie;
}
export interface DecisionOccultation {
    additionalTerms: string;
    categoriesToOmit: string[];
}
export declare enum Sources {
    CC = "CC",
    TJ = "TJ",
    CA = "CA"
}
export interface DecisionAssociee {
    numeroRegistre: string;
    numeroRoleGeneral: string;
    idJuridiction: string;
    date: string;
}
export interface President {
    fonction: string;
    nom: string;
    prenom?: string;
    civilite?: string;
}
export declare enum Occultation {
    AUCUNE = "aucune",
    CONFORME = "conforme",
    SUBSTITUANT = "substituant",
    COMPLEMENT = "compl\u00E9ment"
}
export interface DecisionDTO {
    _id: string;
    analysis: DecisionAnalyse;
    appeals: string[];
    chamberId: string;
    chamberName: string;
    dateCreation: string;
    dateDecision: string;
    decatt: number[];
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
    solution: string;
    sourceId: number;
    sourceName: Sources;
    zoning?: object;
    publication: string[];
    formation: string;
    blocOccultation: number;
    NAOCode: string;
    natureAffaireCivil: string;
    natureAffairePenal: string;
    codeMatiereCivil: string;
    NACCode?: string;
    NPCode?: string;
    endCaseCode?: string;
    filenameSource?: string;
    labelTreatments?: string[];
    parties?: Partie[];
    pubCategory?: string;
}
export interface DecisionTJDTO extends DecisionDTO {
    codeDecision: string;
    codeNature: string;
    codeService: string;
    debatPublic: boolean;
    decisionAssociee: DecisionAssociee;
    libelleCodeDecision: string;
    libelleNAC: string;
    libelleNature: string;
    libelleService: string;
    matiereDeterminee: boolean;
    numeroRoleGeneral: string;
    pourvoiCourDeCassation: boolean;
    pourvoiLocal: boolean;
    president?: President;
    recommandationOccultation: Occultation;
    sommaire?: string;
    selection: boolean;
    indicateurQPC?: boolean;
}
