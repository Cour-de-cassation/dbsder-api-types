export { parseDecisionTj, hasSourceNameTj } from './decisions_tj.zod'
export { parseDecisionCa, hasSourceNameCa } from './decisions_ca.zod'
export { parseDecisionCc, hasSourceNameCc } from './decisions_cc.zod'
export { parseDecisionDila, hasSourceNameDila } from './decisions_dila.zod'
export { parseDecisionCph, hasSourceNameCph } from './decisions_cph.zod'

export { parseLabelStatus, parseLabelTreatments, parsePublishStatus } from './common.zod'
export { ZodError as ParseError } from 'zod'

import {
  decisionTcomSchema,
  parseDecisionTcom,
  parsePartialDecisionTcom
} from './decisions_tcom.zod'
import { decisionTjSchema, parseDecisionTj, parsePartialDecisionTj } from './decisions_tj.zod'
import { decisionCaSchema, parseDecisionCa, parsePartialDecisionCa } from './decisions_ca.zod'
import { decisionCcSchema, parseDecisionCc, parsePartialDecisionCc } from './decisions_cc.zod'
import { decisionCphSchema, parseDecisionCph, parsePartialDecisionCph } from './decisions_cph.zod'
import {
  decisionDilaSchema,
  parseDecisionDila,
  parsePartialDecisionDila
} from './decisions_dila.zod'

import {
  Decision,
  DecisionCa,
  DecisionCc,
  DecisionCph,
  DecisionDila,
  DecisionTcom,
  DecisionTj,
  UnIdentifiedDecision
} from '../types'
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
    .or(decisionCphSchema.pick({ sourceName: true }))
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
    case 'portalis-cph':
      return parseDecisionCph(x)
    default:
      sourceName satisfies never
      throw new Error('unexpected error')
  }
}

export function parsePartialDecision(
  sourceName: Decision['sourceName'],
  x: unknown
):
  | Partial<DecisionCc>
  | Partial<DecisionCa>
  | Partial<DecisionDila>
  | Partial<DecisionTcom>
  | Partial<DecisionTj>
  | Partial<DecisionCph> {
  switch (sourceName) {
    case 'jurinet':
      return parsePartialDecisionCc(x)
    case 'jurica':
      return parsePartialDecisionCa(x)
    case 'juritj':
      return parsePartialDecisionTj(x)
    case 'dila':
      return parsePartialDecisionDila(x)
    case 'juritcom':
      return parsePartialDecisionTcom(x)
    case 'portalis-cph':
      return parsePartialDecisionCph(x)
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
