export enum LabelStatus {
  TOBETREATED = 'toBeTreated',
  LOADED = 'loaded',
  DONE = 'done',
  EXPORTED = 'exported',
  BLOCKED = 'blocked',
  IGNORED_DEBAT_NON_PUBLIC = 'ignored_debatNonPublic',
  IGNORED_DECISION_NON_PUBLIQUE = 'ignored_decisionNonPublique',
  IGNORED_CODE_DECISION_BLOQUE_CC = 'ignored_codeDecisionBloqueCC',
  IGNORED_DATE_DECISION_INCOHERENTE = 'ignored_dateDecisionIncoherente',
  IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE = 'ignored_codeNACdeDecisionNonPublique',
  IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE = 'ignored_codeNACdeDecisionPartiellementPublique',
  IGNORED_CODE_NAC_INCONNU = 'ignored_codeNACInconnu',
  IGNORED_CARACTERE_INCONNU = 'ignored_caractereInconnu',
  IGNORED_DATE_AVANT_MISE_EN_SERVICE = 'ignored_dateAvantMiseEnService',
  IGNORED_CONTROLE_REQUIS = 'ignored_controleRequis',
  IGNORED_DECISION_NON_PUBLIQUE_PAR_ZONAGE = 'ignored_decisionNonPubliqueParZonage',
  IGNORED_DECISION_PARTIELLEMENT_PUBLIQUE_PAR_ZONAGE = 'ignored_decisionPartiellementPubliqueParZonage',
  IGNORED_BLOC_OCCULATION_NON_DEFINI = 'ignored_blocOcculationNonDefini',
  IGNORED_RECOMMANDATION_OCCULTATION_NON_SUIVIE = 'ignored_recommandationOccultationNonSuivie',
  LOCKED = 'locked'
}

export enum PublishStatus {
  TOBEPUBLISHED = 'toBePublished',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE_PREPARING = 'failure_preparing',
  FAILURE_INDEXING = 'failure_indexing',
  BLOCKED = 'blocked',
  UNPUBLISHED = 'unpublished'
}

export enum Category {
  ADRESSE = 'adresse',
  CADASTRE = 'cadastre',
  PERSONNEMORALE = 'personneMorale',
  PERSONNEPHYSIQUE = 'personnePhysique',
  PROFESSIONNELAVOCAT = 'professionnelAvocat',
  PROFESSIONNELMAGISTRATGREFFIER = 'professionnelMagistratGreffier',
  DATENAISSANCE = 'dateNaissance',
  DATEDECES = 'dateDeces',
  DATEMARIAGE = 'dateMariage',
  INSEE = 'insee',
  NUMEROIDENTIFIANT = 'numeroIdentifiant',
  PLAQUEIMMATRICULATION = 'plaqueImmatriculation',
  COMPTEBANCAIRE = 'compteBancaire',
  LOCALITE = 'localite',
  NUMEROSIRETSIREN = 'numeroSiretSiren',
  SITEWEBSENSIBLE = 'siteWebSensible',
  ETABLISSEMENT = 'etablissement',
  TELEPHONEFAX = 'telephoneFax',
  EMAIL = 'email',
  MOTIVATIONS = 'motivations',
  ANNOTATIONSUPPLEMENTAIRE = 'annotationSupplementaire',
  PERSONNEPHYSIQUENOM = 'personnePhysiqueNom',
  PERSONNEPHYSIQUEPRENOM = 'personnePhysiquePrenom',
  PROFESSIONNELNOM = 'professionnelNom',
  PROFESSIONNELPRENOM = 'professionnelPrenom',
  PERSONNEPHYSICOMORALE = 'personnePhysicoMorale',
  PERSONNEGEOMORALE = 'personneGeoMorale',
  CUSTOM = 'custom'
}

export type Entity = {
  entityId: string
  text: string
  start: number
  end?: number
  category: Category
  score?: number | null
  certaintyScore?: number | null
  source?: string | null
}

type SentenceIndex = {
  start: number
  end: number
}

export type Check = {
  check_type: string
  message: string
  short_message: string
  entities: Entity[]
  sentences: SentenceIndex[]
  metadata_text: string[]
  _rank?: number | null
}

type NLPVersionDetails = {
  version: string
  date: string
}

type ModelName = {
  name: string
}

export type NLPVersion = {
  juriSpacyTokenizer: NLPVersionDetails
  juritools: NLPVersionDetails
  pseudonymisationApi?: NLPVersionDetails
  nlpApi?: NLPVersionDetails
  model: ModelName
}

export type LabelTreatments = {
  order: number
  annotations: Entity[]
  source: string
  version?: NLPVersion | null
  treatmentDate?: string
  checklist?: Check[]
}[]

export enum PseudoStatus {
  A_PSEUDONYMISER = 0,
  EN_COURS_DE_PSEUDONYMISATION = 1,
  PSEUDONYMISE = 2,
  MIS_EN_DOUTE = 3,
  ERREUR = 4
}

export type Occultation = {
  additionalTerms: string
  additionalTermsToAnnotate?: string[]
  additionalTermsToUnAnnotate?: string[]
  categoriesToOmit: Category[]
  motivationOccultation?: boolean
}

export enum SuiviOccultation {
  AUCUNE = 'aucune',
  CONFORME = 'conforme',
  SUBSTITUANT = 'substituant',
  COMPLEMENT = 'complément'
}

export enum QualitePartieExhaustive {
  F = 'F',
  G = 'G',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N'
}

export type QualitePartie = QualitePartieExhaustive | ''

export enum TypePartieExhaustive {
  PP = 'PP',
  PM = 'PM',
  AA = 'AA',
  NA = 'NA'
}

export type TypePartie = TypePartieExhaustive | ''

export enum BlocOccultation {
  CODE_NAC_NON_VALIDE = 0,
  TOUTES_CATAGORIES = 1,
  TOUTES_CATEGORIES_SAUF_DATES = 2,
  TOUTES_CATEGORIES_SAUF_PERSONNES_MORALES = 3,
  TOUTES_CATEGORIES_SAUF_DATES_ET_PERSONNES_MORALES = 4
}

export enum LabelRoute {
  DOUBLE_RELECTURE = 'double',
  RELECTURE_SYSTEMATIQUE = 'systematique',
  RELECTURE_ALEATOIRE_DE_DECISIONS_SENSIBLES = 'aleatoireSensible',
  RELECTURE_ALEATOIRE_DE_DECISIONS_NON_SENSIBLES = 'aleatoireNonSensible',
  PAS_DE_RELECTURE = 'automatique'
}

export type ZoneRange = {
  start: number
  end: number
}

export type ZoningZones = {
  introduction?: ZoneRange
  moyens?: ZoneRange[]
  'expose du litige'?: ZoneRange
  motivations?: ZoneRange[]
  dispositif?: ZoneRange
  'moyens annexes'?: ZoneRange[]
}

export type IntroductionSubzonage = {
  n_arret?: string
  formation?: string
  publication?: string[]
  juridiction?: string
  chambre?: string
  pourvoi?: string[]
  composition?: ZoneRange
}

export type CurrentZoning = {
  zones?: ZoningZones
  introduction_subzonage?: IntroductionSubzonage
  visa?: string[] | null
  is_public?: number
  is_public_text?: string[]
  arret_id: number
}

export type Zoning = CurrentZoning | { [k: string]: unknown }
