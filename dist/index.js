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
/**
 * typePartie:
 * PP = personne physique,
 * PM = personne morale,
 * AA = autorité administrative
 */
var TypePartie;
(function (TypePartie) {
    TypePartie["PP"] = "PP";
    TypePartie["PM"] = "PM";
    TypePartie["AA"] = "AA";
})(TypePartie || (exports.TypePartie = TypePartie = {}));
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
    Sources["CC"] = "jurinet";
    Sources["TJ"] = "juritj";
    Sources["CA"] = "jurica";
})(Sources || (exports.Sources = Sources = {}));
var Occultation;
(function (Occultation) {
    Occultation["AUCUNE"] = "aucune";
    Occultation["CONFORME"] = "conforme";
    Occultation["SUBSTITUANT"] = "substituant";
    Occultation["COMPLEMENT"] = "compl\u00E9ment";
})(Occultation || (exports.Occultation = Occultation = {}));
