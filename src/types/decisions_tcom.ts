import { ObjectId } from "mongodb";
import { BlocOccultation, LabelStatus, LabelTreatment, Occultation, PublishStatus, TypePartie } from "./common";

export enum JusticeFunctionTcom {
    GRF = 'GRF',
    JUG = 'JUG',
    PDT = 'PDT',
    PRO = 'PRO',
    JUS = 'JUS'
}

type CompositionTcom = {
    fonction?: JusticeFunctionTcom
    nom: string
    prenom?: string
    civilite?: string
}

export enum JusticeRoleTcom {
    AVOCAT = 'AVOCAT',
    AVOCAT_GENERAL = 'AVOCAT GENERAL',
    RAPPORTEUR = 'RAPPORTEUR',
    MANDATAIRE = 'MANDATAIRE',
    PARTIE = 'PARTIE',
    AUTRE = 'AUTRE'
}

type PartieTcom = {
    type: TypePartie;
    role: JusticeRoleTcom,
    nom: string;
    prenom?: string;
    civilite?: string;
};

export type DecisionTcom = {
    _id?: ObjectId;
    sourceId: number;
    sourceName: 'juritcom';

    __v: number;

    originalText: string;
    pseudoText?: string;

    registerNumber: string;
    dateDecision: string;

    jurisdictionCode: string;
    jurisdictionId: string;
    jurisdictionName: string;

    public?: boolean;
    solution?: string;

    labelStatus: LabelStatus;
    publishStatus?: PublishStatus;
    labelTreatments?: LabelTreatment[];

    dateCreation: string;
    publishDate?: string | null;
    firstImportDate?: string;
    lastImportDate?: string;
    unpublishDate?: string | null;

    zoning?: { [k: string]: unknown } | null;
    originalTextZoning?: { [k: string]: unknown };
    pseudoTextZoning?: { [k: string]: unknown };

    chamberId: string;
    chamberName: string;

    debatPublic: boolean;
    selection: boolean;

    blocOccultation: BlocOccultation;
    occultation: Occultation;
    parties?: PartieTcom[];

    filenameSource: string;

    appeals: never[];

    codeMatiereCivil?: string;

    idGroupement: string;
    idDecisionTCOM: string;
    codeProcedure?: string;
    libelleMatiere?: string;
    composition?: CompositionTcom[];
}

export type UnIdentifiedDecisionTcom = Omit<DecisionTcom, "_id">