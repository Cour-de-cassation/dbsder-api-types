"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sources = exports.QualitePartie = exports.TypePartie = exports.LabelStatus = void 0;
var LabelStatus;
(function (LabelStatus) {
    LabelStatus["TOBETREATED"] = "toBeTreated";
    LabelStatus["LOADED"] = "loaded";
    LabelStatus["DONE"] = "done";
    LabelStatus["TOIGNORE"] = "toIgnore";
    LabelStatus["IGNORED_DECISIONNONPUBLIQUE"] = "ignored_decisionNonPublique";
    LabelStatus["IGNORED_DATEDECISIONINCOHERENTE"] = "ignored_dateDecisionIncoherente";
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
