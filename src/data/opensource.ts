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

export interface ActivityItem {
  repo: string
  title: string
  url: string
  date: string
}

export interface Activity {
  mergedPRs: ActivityItem[]
  openPRs: ActivityItem[]
  issues: ActivityItem[]
}

export const contributions: Contribution[] = (generated.contributions ??
  []) as Contribution[]

export const summary: OpenSourceSummary = generated.summary ?? {
  totalMergedPRs: 0,
  externalRepoCount: 0,
}

export const activity: Activity = (generated as { activity?: Activity })
  .activity ?? { mergedPRs: [], openPRs: [], issues: [] }
