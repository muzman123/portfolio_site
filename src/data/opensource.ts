import generated from './generated/opensource.json'

export interface Contribution {
  repo: string
  stars: string
  desc: string
  url: string
  prCount: number
}

export interface OpenSourceSummary {
  totalMergedPRs: number
  externalRepoCount: number
}

export const contributions: Contribution[] = (generated.contributions ??
  []) as Contribution[]

export const summary: OpenSourceSummary = generated.summary ?? {
  totalMergedPRs: 0,
  externalRepoCount: 0,
}
