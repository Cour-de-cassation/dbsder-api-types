import { DecisionTj, UnIdentifiedDecisionTj } from './decisions_tj'
import { DecisionCa, UnIdentifiedDecisionCa } from './decisions_ca'
import { DecisionCc, UnIdentifiedDecisionCc } from './decisions_cc'
import { DecisionDila, UnIdentifiedDecisionDila } from './decisions_dila'

export { DecisionTj, UnIdentifiedDecisionTj } from './decisions_tj'
export { DecisionCa, UnIdentifiedDecisionCa } from './decisions_ca'
export { DecisionCc, UnIdentifiedDecisionCc } from './decisions_cc'
export { DecisionDila, UnIdentifiedDecisionDila } from './decisions_dila'
export { CodeNac } from './codeNacs'
export { CodeDecision } from './codeDecisions'

export { LabelTreatment, LabelStatus, PublishStatus } from './common'

export type Decision = DecisionTj | DecisionCa | DecisionCc | DecisionDila
export type UnIdentifiedDecision =
  | UnIdentifiedDecisionTj
  | UnIdentifiedDecisionCa
  | UnIdentifiedDecisionCc
  | UnIdentifiedDecisionDila
