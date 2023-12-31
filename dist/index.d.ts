export declare enum LabelStatus {
    TOBETREATED = "toBeTreated",
    LOADED = "loaded",
    DONE = "done",
    EXPORTED = "exported",
    BLOCKED = "blocked",
    IGNORED_DEBAT_NON_PUBLIC = "ignored_debatNonPublic",
    IGNORED_DECISION_NON_PUBLIQUE = "ignored_decisionNonPublique",
    IGNORED_CODE_DECISION_BLOQUE_CC = "ignored_codeDecisionBloqueCC",
    IGNORED_DATE_DECISION_INCOHERENTE = "ignored_dateDecisionIncoherente",
    IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE = "ignored_codeNACdeDecisionNonPublique",
    IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE = "ignored_codeNACdeDecisionPartiellementPublique",
    IGNORED_CODE_NAC_INCONNU = "ignored_codeNACInconnu",
    IGNORED_CARACTERE_INCONNU = "ignored_caractereInconnu",
    IGNORED_DATE_AVANT_MISE_EN_SERVICE = "ignored_dateAvantMiseEnService"
}
/**
 * publishStatus:
 *  toBePublished = décision à publier (positionné lorsque labelStatus passe à 'done' dans Label)
 *  pending = en cours de traitement (préparation et optimisation en vue de l'indexation)
 *  success =  publication effectuée avec succès
 *  failure_preparing = échec lors de la préparation (côté plateforme privée)
 *  failure_indexing = échec lors de l'indexation (côté plateforme publique/Elasticsearch)
 *  blocked = publication bloquée (positionné en amont suivant les besoins, par exemple lors du passage
 *            de labelStatus à 'done' pour une décision qui nécessiterait une validation finale avant
 *            publication)
 *  unpublished = décision dépubliée (devra repasser à 'toBePublished', manuellement ou automatiquement,
 *                afin que la décision soit à nouveau publiée)
 *
 * Could have:
 *  toBePublishedImmediately = à publier immédiatement (via un job hors "schedule" tournant en continu
 *                             et indépendant du job traitant les décisions 'toBePublished')
 */
export declare enum PublishStatus {
    TOBEPUBLISHED = "toBePublished",
    PENDING = "pending",
    SUCCESS = "success",
    FAILURE_PREPARING = "failure_preparing",
    FAILURE_INDEXING = "failure_indexing",
    BLOCKED = "blocked",
    UNPUBLISHED = "unpublished"
}
/**
 * typePartie:
 * PP = personne physique,
 * PM = personne morale,
 * AA = autorité administrative
 */
export declare enum TypePartie {
    PP = "PP",
    PM = "PM",
    AA = "AA"
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
export interface PartieTJ {
    type: TypePartie;
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
    CC = "jurinet",
    TJ = "juritj",
    CA = "jurica"
}
export interface DecisionAssociee {
    numeroRegistre: string;
    numeroRoleGeneral: string;
    idJuridiction: string;
    date: string;
    idDecisionWinci?: string;
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
export declare enum Categories {
    ADRESSE = "adresse",
    CADASTRE = "cadastre",
    PERSONNEMORALE = "personneMorale",
    PERSONNEPHYSIQUE = "personnePhysique",
    PROFESSIONNELAVOCAT = "professionnelAvocat",
    PROFESSIONNELMAGISTRATGREFFIER = "professionnelMagistratGreffier",
    DATENAISSANCE = "dateNaissance",
    DATEDECES = "dateDeces",
    DATEMARIAGE = "dateMariage",
    INSEE = "insee",
    PLAQUEIMMATRICULATION = "plaqueImmatriculation",
    COMPTEBANCAIRE = "compteBancaire",
    LOCALITE = "localite",
    NUMEROSIRETSIREN = "numeroSiretSiren",
    SITEWEBSENSIBLE = "siteWebSensible",
    ETABLISSEMENT = "etablissement",
    TELEPHONEFAX = "telephoneFax"
}
export interface DecisionDTO {
    _id?: string;
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
    publishStatus?: PublishStatus;
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
    parties?: PartieTJ[] | object[];
    pubCategory?: string;
}
export interface DecisionTJDTO extends DecisionDTO {
    codeDecision: string;
    codeService: string;
    debatPublic: boolean;
    decisionAssociee: DecisionAssociee;
    indicateurQPC?: boolean;
    idDecisionTJ: string;
    idDecisionWinci?: string;
    libelleCodeDecision: string;
    libelleNAC: string;
    libelleNatureParticuliere: string;
    libelleService: string;
    matiereDeterminee: boolean;
    numeroRoleGeneral: string;
    pourvoiCourDeCassation: boolean;
    pourvoiLocal: boolean;
    president?: President;
    recommandationOccultation: Occultation;
    sommaire?: string;
    selection: boolean;
}
export interface CodeNAC {
    codeNAC: string;
    libelleNAC: string;
    blocOccultationCA?: number;
    blocOccultationTJ?: number;
    indicateurDecisionRenduePubliquement?: boolean;
    indicateurDebatsPublics?: boolean;
    indicateurAffaireSignalee?: boolean;
    categoriesToOmitTJ: Record<Occultation, Categories[]>;
    categoriesToOmitCA: Record<Occultation, Categories[]>;
}
