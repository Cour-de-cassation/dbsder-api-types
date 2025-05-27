export { parseDecisionTj, hasSourceNameTj } from './decisions_tj.zod'
export { parseDecisionCa, hasSourceNameCa } from './decisions_ca.zod'
export { parseDecisionCc, hasSourceNameCc } from './decisions_cc.zod'
export { parseDecisionDila, hasSourceNameDila } from './decisions_dila.zod'
export { parseLabelStatus, parseLabelTreatments, parsePublishStatus } from './common.zod'

import { decisionTcomSchema, parseDecisionTcom } from './decisions_tcom.zod'
import { decisionTjSchema, parseDecisionTj } from './decisions_tj.zod'
import { decisionCaSchema, parseDecisionCa } from './decisions_ca.zod'
import { decisionCcSchema, parseDecisionCc } from './decisions_cc.zod'
import { decisionDilaSchema, parseDecisionDila } from './decisions_dila.zod'
import { Decision, UnIdentifiedDecision } from '../types'
import { zObjectId } from './common.zod'
import { ObjectId } from 'mongodb'

export function parseId(x: unknown): ObjectId {
  return zObjectId.parse(x)
}

export function parseSourceName(x: unknown): Decision['sourceName'] {
    const sourceName = decisionCaSchema
      .pick({ sourceName: true })
      .or(decisionCcSchema.pick({ sourceName: true }))
      .or(decisionTjSchema.pick({ sourceName: true }))
      .or(decisionTcomSchema.pick({ sourceName: true }))
      .or(decisionDilaSchema.pick({ sourceName: true }))
      .parse({ sourceName: x }).sourceName

    // /!\ used to check exhaustivity: error type means you forget a schema /!\
    type ExhaustiveSourceName = Decision['sourceName'] extends typeof sourceName
      ? typeof sourceName
      : never
    const exhaustiveSourceName: ExhaustiveSourceName = sourceName

    return exhaustiveSourceName
}

export function parseUnIdentifiedDecision(x: unknown): UnIdentifiedDecision {
  const isValidX = typeof x === 'object' && x != null && 'sourceName' in x
  if (!isValidX) throw new Error('There is no sourceName in decision')
  
  const sourceName = parseSourceName(x.sourceName)

  switch (sourceName) {
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
      sourceName satisfies never
      throw new Error('unexpected error')
  }
}

export function parseDecision(x: unknown): Decision {
  const isValidX = typeof x === 'object' && !!x && '_id' in x
  if (!isValidX) throw new Error('There is no _id in decision')

  const _id = parseId(x._id)
  const decision = parseUnIdentifiedDecision(x)

  return { _id, ...decision }
}
