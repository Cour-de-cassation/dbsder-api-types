export { isDecisionTj, hasSourceNameTj } from './decisions_tj.zod'
export { isDecisionCa, hasSourceNameCa } from './decisions_ca.zod'
export { isDecisionCc, hasSourceNameCc } from './decisions_cc.zod'
export { isDecisionDila, hasSourceNameDila } from './decisions_dila.zod'
export { isLabelStatus, isLabelTreatment, isPublishStatus } from './common.zod'

import { decisionTjSchema, isDecisionTj } from './decisions_tj.zod'
import { decisionCaSchema, isDecisionCa } from './decisions_ca.zod'
import { decisionCcSchema, isDecisionCc } from './decisions_cc.zod'
import { decisionDilaSchema, isDecisionDila } from './decisions_dila.zod'
import { Decision, UnIdentifiedDecision } from '../types'
import { zObjectId } from './common.zod'
import { ObjectId } from 'mongodb'

export function isUnIdentifiedDecision(x: unknown): UnIdentifiedDecision {
  const isValidX = typeof x === "object" && !!x && "sourceName" in x
  if (!isValidX || !isSourceName(x.sourceName)) throw new Error('sourceName is invalid in decision')

  switch (x.sourceName) {
    case 'jurinet':
      return isDecisionCc(x)
    case 'jurica':
      return isDecisionCa(x)
    case 'juritj':
      return isDecisionTj(x)
    case 'dila':
      return isDecisionDila(x)
    default:
      // hack to create type error on a non handled sourceName
      const exhaustiveness: never = x.sourceName
      throw new Error('unexpected error')
  }
}

export function isDecision(x: unknown): Decision {
  const isValidX = typeof x === "object" && !!x && "_id" in x
  if (!isValidX || !isId(x._id)) throw new Error('_id is invalid in decision')

  const decision = isUnIdentifiedDecision(x)

  return { _id: x._id, ...decision }
}

export function isId(x: unknown): x is ObjectId {
  try {
    return !!zObjectId.parse(x)
  } catch (_) {
    return false
  }
}

export function isSourceName(x: unknown): x is Decision['sourceName'] {
  try {
    return !!decisionCaSchema
      .pick({ sourceName: true })
      .or(decisionCcSchema.pick({ sourceName: true }))
      .or(decisionTjSchema.pick({ sourceName: true }))
      .or(decisionDilaSchema.pick({ sourceName: true }))
      .parse({ sourceName: x })
  } catch (_) {
    return false
  }
}
