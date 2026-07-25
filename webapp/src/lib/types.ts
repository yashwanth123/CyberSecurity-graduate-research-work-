export type ResponseValue = 'yes' | 'partial' | 'no' | 'na' | null

export interface ComplianceResponse {
  value: ResponseValue
  notes?: string
}

export interface RiskEntry {
  id: string
  asset: string
  threat: string
  vulnerability: string
  likelihood: number
  impact: number
  zone: string
  mitigation: string
  status: 'open' | 'mitigated' | 'accepted'
}

export interface ZoneEntry {
  id: string
  name: string
  description: string
  assets: string
  slTarget: number
  slAchieved: number
  conduitTo: string
}

export interface ProjectData {
  projectName: string
  organization: string
  assessor: string
  sector: string
  createdAt: string
  updatedAt: string
  compliance: Record<string, ComplianceResponse>
  risks: RiskEntry[]
  zones: ZoneEntry[]
}

export const STORAGE_KEY = 'iec62443-project'

export const defaultProject = (): ProjectData => ({
  projectName: 'New Assessment',
  organization: '',
  assessor: '',
  sector: 'Manufacturing',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  compliance: {},
  risks: [],
  zones: [],
})

export function loadProject(): ProjectData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaultProject(), ...JSON.parse(raw) }
  } catch {
    /* ignore */
  }
  return defaultProject()
}

export function saveProject(data: ProjectData): void {
  data.updatedAt = new Date().toISOString()
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* private browsing / storage quota — app still works in-memory */
  }
}

export function computeMaturity(
  responses: Record<string, ComplianceResponse>,
  questionIds: string[],
): number {
  let score = 0
  let total = 0
  for (const id of questionIds) {
    const v = responses[id]?.value
    if (!v || v === 'na') continue
    total++
    if (v === 'yes') score += 1
    else if (v === 'partial') score += 0.5
  }
  return total === 0 ? 0 : Math.round((score / total) * 100)
}

export function riskScore(likelihood: number, impact: number): number {
  return likelihood * impact
}

export function riskPriority(score: number): 'critical' | 'high' | 'medium' | 'low' {
  if (score >= 15) return 'critical'
  if (score >= 8) return 'high'
  if (score >= 4) return 'medium'
  return 'low'
}

export function suggestSL(profile: {
  misuse: string
  means: string
  resources: string
  knowledge: string
  motivation: string
}): number {
  const m = profile.misuse.toLowerCase()
  if (m.includes('acciden') || profile.misuse === '-') return 1
  const means = profile.means.toLowerCase()
  const knowledge = profile.knowledge.toLowerCase()
  const motivation = profile.motivation.toLowerCase()
  const resources = profile.resources.toLowerCase()

  if (resources.includes('extensive') || motivation.includes('high')) return 4
  if (knowledge.includes('iacs') && (resources.includes('moderate') || means.includes('complex'))) return 3
  if (means.includes('simple') || motivation.includes('low')) return 2
  return 2
}
