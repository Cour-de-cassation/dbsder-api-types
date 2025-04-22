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

export function isUnIdentifiedDecision(x: any): UnIdentifiedDecision {
  const sourceName = x.sourceName
  if (!isSourceName(sourceName)) throw new Error('sourceName is invalid')

  switch (sourceName) {
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
      const exhaustiveness: never = sourceName
      throw new Error('unexpected error')
  }
}

export function isDecision(x: any): Decision {
  const _id = x._id
  const unIdentifiedDecision = isUnIdentifiedDecision(x)

  if (!isId(_id)) throw new Error(`Decision is Unidentified`)
  return { _id, ...unIdentifiedDecision }
}

export function isId(x: any): x is ObjectId {
  try {
    return !!zObjectId.parse(x)
  } catch (_) {
    return false
  }
}

export function isSourceName(x: any): x is Decision['sourceName'] {
  try {
    return !!decisionCaSchema
      .pick({ sourceName: true })
      .or(decisionCcSchema.pick({ sourceName: true }))
      .or(decisionTjSchema.pick({ sourceName: true }))
      .or(decisionDilaSchema.pick({ sourceName: true }))
      .parse(x)
  } catch (_) {
    return false
  }
}
