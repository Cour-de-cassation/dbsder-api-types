"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = exports.Occultation = exports.Sources = exports.QualitePartie = exports.TypePartie = exports.PublishStatus = exports.LabelStatus = void 0;
var LabelStatus;
(function (LabelStatus) {
    LabelStatus["TOBETREATED"] = "toBeTreated";
    LabelStatus["LOADED"] = "loaded";
    LabelStatus["DONE"] = "done";
    LabelStatus["EXPORTED"] = "exported";
    LabelStatus["BLOCKED"] = "blocked";
    LabelStatus["IGNORED_DEBAT_NON_PUBLIC"] = "ignored_debatNonPublic";
    LabelStatus["IGNORED_DECISION_NON_PUBLIQUE"] = "ignored_decisionNonPublique";
    LabelStatus["IGNORED_CODE_DECISION_BLOQUE_CC"] = "ignored_codeDecisionBloqueCC";
    LabelStatus["IGNORED_DATE_DECISION_INCOHERENTE"] = "ignored_dateDecisionIncoherente";
    LabelStatus["IGNORED_CODE_NAC_DECISION_NON_PUBLIQUE"] = "ignored_codeNACdeDecisionNonPublique";
    LabelStatus["IGNORED_CODE_NAC_DECISION_PARTIELLEMENT_PUBLIQUE"] = "ignored_codeNACdeDecisionPartiellementPublique";
    LabelStatus["IGNORED_CODE_NAC_INCONNU"] = "ignored_codeNACInconnu";
    LabelStatus["IGNORED_CARACTERE_INCONNU"] = "ignored_caractereInconnu";
    LabelStatus["IGNORED_DATE_AVANT_MISE_EN_SERVICE"] = "ignored_dateAvantMiseEnService";
    LabelStatus["IGNORED_CONTROLE_REQUIS"] = "ignored_controleRequis";
})(LabelStatus || (exports.LabelStatus = LabelStatus = {}));
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
var PublishStatus;
(function (PublishStatus) {
    PublishStatus["TOBEPUBLISHED"] = "toBePublished";
    // TOBEPUBLISHEDIMMEDIATELY = 'toBePublishedImmediately',
    PublishStatus["PENDING"] = "pending";
    PublishStatus["SUCCESS"] = "success";
    PublishStatus["FAILURE_PREPARING"] = "failure_preparing";
    PublishStatus["FAILURE_INDEXING"] = "failure_indexing";
    PublishStatus["BLOCKED"] = "blocked";
    PublishStatus["UNPUBLISHED"] = "unpublished";
})(PublishStatus || (exports.PublishStatus = PublishStatus = {}));
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
var Categories;
(function (Categories) {
    Categories["ADRESSE"] = "adresse";
    Categories["CADASTRE"] = "cadastre";
    Categories["PERSONNEMORALE"] = "personneMorale";
    Categories["PERSONNEPHYSIQUE"] = "personnePhysique";
    Categories["PROFESSIONNELAVOCAT"] = "professionnelAvocat";
    Categories["PROFESSIONNELMAGISTRATGREFFIER"] = "professionnelMagistratGreffier";
    Categories["DATENAISSANCE"] = "dateNaissance";
    Categories["DATEDECES"] = "dateDeces";
    Categories["DATEMARIAGE"] = "dateMariage";
    Categories["INSEE"] = "insee";
    Categories["PLAQUEIMMATRICULATION"] = "plaqueImmatriculation";
    Categories["COMPTEBANCAIRE"] = "compteBancaire";
    Categories["LOCALITE"] = "localite";
    Categories["NUMEROSIRETSIREN"] = "numeroSiretSiren";
    Categories["SITEWEBSENSIBLE"] = "siteWebSensible";
    Categories["ETABLISSEMENT"] = "etablissement";
    Categories["TELEPHONEFAX"] = "telephoneFax";
    // ANNOTATIONSUPPLEMENTAIRE = "annotationSupplementaire",
})(Categories || (exports.Categories = Categories = {}));
