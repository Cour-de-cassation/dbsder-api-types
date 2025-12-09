import {
  CurrentZoning,
  LabelTreatments,
  zCurrentZoning,
  zLabelStatus,
  zLabelTreatments,
  Zoning,
  zPublishStatus
} from './common.zod'
import { LabelStatus, PublishStatus } from './common.enum'

export function isCurrentZoning(x: Zoning): x is CurrentZoning {
  return zCurrentZoning.safeParse(x).success
}

export function parseCurrentZoning(x: unknown): CurrentZoning {
  return zCurrentZoning.parse(x)
}

export function parseLabelStatus(x: unknown): LabelStatus {
  return zLabelStatus.parse(x)
}

export function parseLabelTreatments(x: unknown): LabelTreatments {
  return zLabelTreatments.parse(x)
}

export function parsePublishStatus(x: unknown): PublishStatus {
  return zPublishStatus.parse(x)
}
