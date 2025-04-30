export { parseDecisionTj, hasSourceNameTj } from './decisions_tj.zod'
export { parseDecisionCa, hasSourceNameCa } from './decisions_ca.zod'
export { parseDecisionCc, hasSourceNameCc } from './decisions_cc.zod'
export { parseDecisionDila, hasSourceNameDila } from './decisions_dila.zod'
export { isLabelStatus, isLabelTreatment, isPublishStatus } from './common.zod'

import { decisionTcomSchema, parseDecisionTcom } from './decisions_tcom.zod'
import { decisionTjSchema, parseDecisionTj } from './decisions_tj.zod'
import { decisionCaSchema, parseDecisionCa } from './decisions_ca.zod'
import { decisionCcSchema, parseDecisionCc } from './decisions_cc.zod'
import { decisionDilaSchema, parseDecisionDila } from './decisions_dila.zod'
import { Decision, UnIdentifiedDecision } from '../types'
import { zObjectId } from './common.zod'
import { ObjectId } from 'mongodb'

export function isId(x: unknown): x is ObjectId {
  try {
    return !!zObjectId.parse(x)
  } catch (_) {
    return false
  }
}

export function isSourceName(x: unknown): x is Decision['sourceName'] {
  try {
    const sourceName = decisionCaSchema.pick({ sourceName: true })
      .or(decisionCcSchema.pick({ sourceName: true }))
      .or(decisionTjSchema.pick({ sourceName: true }))
      .or(decisionTcomSchema.pick({ sourceName: true }))
      .or(decisionDilaSchema.pick({ sourceName: true }))
      .parse({ sourceName: x })
      .sourceName

    // /!\ used to check exhaustivity: error type means you forget a schema /!\
    type ExhaustiveSourceName = Decision["sourceName"] extends typeof sourceName ? typeof sourceName : never
    const exhaustiveSourceName: ExhaustiveSourceName = sourceName

    return !!exhaustiveSourceName
  } catch (_) {
    return false
  }
}

export function parseUnIdentifiedDecision(x: unknown): UnIdentifiedDecision {
  const isValidX = typeof x === "object" && !!x && "sourceName" in x
  if (!isValidX || !isSourceName(x.sourceName)) throw new Error('sourceName is invalid in decision')

  switch (x.sourceName) {
    case 'jurinet':
      return parseDecisionCc(x)
    case 'jurica':
      return parseDecisionCa(x)
    case 'juritj':
      return parseDecisionTj(x)
    case 'dila':
      return parseDecisionDila(x)
    case 'juritcom':
      return parseDecisionTcom(x)
    default:
      x.sourceName satisfies never
      throw new Error('unexpected error')
  }
}

export function parseDecision(x: unknown): Decision {
  const isValidX = typeof x === "object" && !!x && "_id" in x
  if (!isValidX || !isId(x._id)) throw new Error('_id is invalid in decision')

  const decision = parseUnIdentifiedDecision(x)

  return { _id: x._id, ...decision }
}
