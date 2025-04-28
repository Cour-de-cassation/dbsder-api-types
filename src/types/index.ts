import { DecisionTj, UnIdentifiedDecisionTj } from './decisions_tj'
import { DecisionCa, UnIdentifiedDecisionCa } from './decisions_ca'
import { DecisionCc, UnIdentifiedDecisionCc } from './decisions_cc'
import { DecisionDila, UnIdentifiedDecisionDila } from './decisions_dila'
import { DecisionTcom, UnIdentifiedDecisionTcom } from './decisions_tcom'

export { DecisionTj, UnIdentifiedDecisionTj } from './decisions_tj'
export { DecisionCa, UnIdentifiedDecisionCa } from './decisions_ca'
export { DecisionCc, UnIdentifiedDecisionCc } from './decisions_cc'
export { DecisionDila, UnIdentifiedDecisionDila } from './decisions_dila'
export { DecisionTcom, UnIdentifiedDecisionTcom, JusticeFunctionTcom, JusticeRoleTcom } from './decisions_tcom'

export { CodeNac } from './codeNacs'
export { CodeDecision } from './codeDecisions'

export { LabelTreatment, LabelStatus, PublishStatus, TypePartieExhaustive, QualitePartieExhaustive, SuiviOccultation, Category } from './common'

export type Decision = DecisionTj | DecisionTcom | DecisionCa | DecisionCc | DecisionDila
export type UnIdentifiedDecision =
  | UnIdentifiedDecisionTj
  | UnIdentifiedDecisionTcom
  | UnIdentifiedDecisionCa
  | UnIdentifiedDecisionCc
  | UnIdentifiedDecisionDila
