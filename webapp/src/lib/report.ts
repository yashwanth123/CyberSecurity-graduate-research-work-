import { parts, questions } from './data'
import {
  computeMaturity,
  riskPriority,
  riskScore,
  type ProjectData,
  type ResponseValue,
} from './types'

export interface AssessmentReport {
  meta: {
    projectName: string
    organization: string
    assessor: string
    sector: string
    generatedAt: string
    updatedAt: string
  }
  compliance: {
    overallMaturity: number
    byPart: Array<{
      part: string
      maturity: number
      responses: Array<{
        id: string
        standard: string
        question: string
        response: string | null
        notes: string
      }>
    }>
  }
  zones: ProjectData['zones']
  risks: Array<
    ProjectData['risks'][number] & {
      score: number
      priority: ReturnType<typeof riskPriority>
    }
  >
  gaps: {
    complianceBelow50: string[]
    zoneSlGaps: ProjectData['zones']
    criticalRisks: ProjectData['risks']
  }
}

export function buildReport(project: ProjectData): AssessmentReport {
  return {
    meta: {
      projectName: project.projectName,
      organization: project.organization,
      assessor: project.assessor,
      sector: project.sector,
      generatedAt: new Date().toISOString(),
      updatedAt: project.updatedAt,
    },
    compliance: {
      overallMaturity: computeMaturity(
        project.compliance,
        questions.map((q) => q.id),
      ),
      byPart: parts.map((part) => ({
        part,
        maturity: computeMaturity(
          project.compliance,
          questions.filter((q) => q.part === part).map((q) => q.id),
        ),
        responses: questions
          .filter((q) => q.part === part)
          .map((q) => ({
            id: q.id,
            standard: q.standard,
            question: q.question,
            response: project.compliance[q.id]?.value ?? null,
            notes: project.compliance[q.id]?.notes ?? '',
          })),
      })),
    },
    zones: project.zones,
    risks: project.risks.map((r) => ({
      ...r,
      score: riskScore(r.likelihood, r.impact),
      priority: riskPriority(riskScore(r.likelihood, r.impact)),
    })),
    gaps: {
      complianceBelow50: parts.filter(
        (p) =>
          computeMaturity(
            project.compliance,
            questions.filter((q) => q.part === p).map((q) => q.id),
          ) < 50,
      ),
      zoneSlGaps: project.zones.filter((z) => z.slAchieved < z.slTarget),
      criticalRisks: project.risks.filter(
        (r) =>
          r.status === 'open' &&
          riskPriority(riskScore(r.likelihood, r.impact)) === 'critical',
      ),
    },
  }
}

export function importProjectData(raw: unknown): ProjectData | null {
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>

  // Full project export
  if (data.compliance && data.projectName) {
    return {
      projectName: String(data.projectName),
      organization: String(data.organization ?? ''),
      assessor: String(data.assessor ?? ''),
      sector: String(data.sector ?? 'Manufacturing'),
      createdAt: String(data.createdAt ?? new Date().toISOString()),
      updatedAt: new Date().toISOString(),
      compliance: (data.compliance as ProjectData['compliance']) ?? {},
      risks: (data.risks as ProjectData['risks']) ?? [],
      zones: (data.zones as ProjectData['zones']) ?? [],
    }
  }

  // Report export wrapper — restore from nested structure if needed
  if (data.meta && data.compliance && data.zones) {
    const report = data as unknown as AssessmentReport
    const compliance: ProjectData['compliance'] = {}
    for (const part of report.compliance.byPart) {
      for (const r of part.responses) {
        if (r.response) {
          compliance[r.id] = {
            value: r.response as ResponseValue,
            notes: r.notes,
          }
        }
      }
    }
    const meta = report.meta
    return {
      projectName: meta.projectName,
      organization: meta.organization,
      assessor: meta.assessor,
      sector: meta.sector,
      createdAt: meta.generatedAt,
      updatedAt: new Date().toISOString(),
      compliance,
      risks: report.risks.map(({ id, asset, threat, vulnerability, likelihood, impact, zone, mitigation, status }) => ({
        id, asset, threat, vulnerability, likelihood, impact, zone, mitigation, status,
      })),
      zones: report.zones,
    }
  }

  return null
}
