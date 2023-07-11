export declare enum LabelStatus {
    TOBETREATED = "toBeTreated",
    LOADED = "loaded",
    DONE = "done",
    TOIGNORE = "toIgnore"
}

export type Annotation = {
    category: string;
    entityId: string;
    start: number;
    text: string;
}

export type LabelTreatment = {
    annotations: Annotation[];
    source: string;
    order: number;
}

export type LabelTreatmentsType = Array<LabelTreatment>;

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

export interface DecisionDTO {
    id: string;
    analysis: DecisionAnalyse;
    appeals: string[];
    chamberId: string;
    chamberName: string;
    dateCreation?: string;
    dateDecision?: string;
    decatt: number[];
    jurisdictionCode: string;
    jurisdictionId: string;
    jurisdictionName: string;
    labelStatus: LabelStatus;
    labelTreatments: LabelTreatmentsType;
    occultation: {
        additionalTerms: string;
        categoriesToOmit: string[];
    };
    originalText: string;
    parties: any[];
    pseudoStatus: string;
    pseudoText: string;
    pubCategory: string;
    publication: string[];
    registerNumber: string;
    solution: string;
    sourceId: number;
    sourceName: string;
    zoning?: {
        introduction_subzonage: {
            publication: string[];
        };
    };
    formation: string;
    blocOccultation: number;
    natureAffaireCivil?: string;
    natureAffairePenal: string;
    codeMatiereCivil?: string;
    NAOCode: string;
    NACCode?: string;
    endCaseCode?: string;
    filenameSource: string;
}
