"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Occultation = exports.Sources = exports.QualitePartie = exports.TypePartie = exports.LabelStatus = void 0;
var LabelStatus;
(function (LabelStatus) {
    LabelStatus["TOBETREATED"] = "toBeTreated";
    LabelStatus["LOADED"] = "loaded";
    LabelStatus["DONE"] = "done";
    LabelStatus["EXPORTED"] = "exported";
    LabelStatus["BLOCKED"] = "blocked";
    LabelStatus["IGNORED_DECISION_NON_PUBLIQUE"] = "ignored_decisionNonPublique";
    LabelStatus["IGNORED_DATE_DECISION_INCOHERENTE"] = "ignored_dateDecisionIncoherente";
    LabelStatus["IGNORED_CODE_NAC_NON_TRANSMIS_CC"] = "ignored_codeNACnonTransmisCC";
    LabelStatus["IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE"] = "ignored_codeNACdeDecisionNonPublique";
    LabelStatus["IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE"] = "ignored_codeNACdeDecisionPartiellementPublique";
})(LabelStatus || (exports.LabelStatus = LabelStatus = {}));
var TypePartie;
(function (TypePartie) {
    TypePartie["PP"] = "PP";
    TypePartie["PM"] = "PM";
    TypePartie["AA"] = "AA";
})(TypePartie || (exports.TypePartie = TypePartie = {}));
var QualitePartie;
(function (QualitePartie) {
    QualitePartie["F"] = "F";
    QualitePartie["G"] = "G";
    QualitePartie["I"] = "I";
    QualitePartie["J"] = "J";
    QualitePartie["K"] = "K";
    QualitePartie["L"] = "L";
    QualitePartie["M"] = "M";
    QualitePartie["N"] = "N";
})(QualitePartie || (exports.QualitePartie = QualitePartie = {}));
var Sources;
(function (Sources) {
    Sources["CC"] = "CC";
    Sources["TJ"] = "TJ";
    Sources["CA"] = "CA";
})(Sources || (exports.Sources = Sources = {}));
var Occultation;
(function (Occultation) {
    Occultation["AUCUNE"] = "aucune";
    Occultation["CONFORME"] = "conforme";
    Occultation["SUBSTITUANT"] = "substituant";
    Occultation["COMPLEMENT"] = "compl\u00E9ment";
})(Occultation || (exports.Occultation = Occultation = {}));
