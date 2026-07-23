import { useProject } from '../hooks/useProject'
import { parts, questions } from '../lib/data'
import { computeMaturity, riskPriority, riskScore } from '../lib/types'
import { Card, ProgressBar } from '../components/ui'

export default function Reports() {
  const { project, resetProject } = useProject()

  const report = {
    meta: {
      projectName: project.projectName,
      organization: project.organization,
      assessor: project.assessor,
      sector: project.sector,
      generatedAt: new Date().toISOString(),
      updatedAt: project.updatedAt,
    },
    compliance: {
      overallMaturity: computeMaturity(project.compliance, questions.map((q) => q.id)),
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
        (r) => r.status === 'open' && riskPriority(riskScore(r.likelihood, r.impact)) === 'critical',
      ),
    },
  }

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iec62443-report-${project.projectName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportCsv = () => {
    const rows = [['ID', 'Part', 'Standard', 'Question', 'Response', 'Notes']]
    for (const q of questions) {
      rows.push([
        q.id,
        q.part,
        q.standard,
        `"${q.question.replace(/"/g, '""')}"`,
        project.compliance[q.id]?.value ?? '',
        `"${(project.compliance[q.id]?.notes ?? '').replace(/"/g, '""')}"`,
      ])
    }
    const csv = rows.map((r) => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iec62443-compliance-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports & Export</h1>
          <p className="text-slate-400 mt-1">
            Export assessment data for thesis appendices or audit evidence
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={exportCsv} className="px-4 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-sm border border-industrial-700">
            Export CSV
          </button>
          <button type="button" onClick={exportJson} className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium">
            Export JSON
          </button>
        </div>
      </header>

      <Card title="Executive Summary">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <ProgressBar label="Overall compliance maturity" value={report.compliance.overallMaturity} />
            <div className="mt-4 space-y-2">
              {report.compliance.byPart.map(({ part, maturity }) => (
                <ProgressBar key={part} label={part} value={maturity} />
              ))}
            </div>
          </div>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between"><dt className="text-slate-400">Project</dt><dd>{project.projectName}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Organization</dt><dd>{project.organization || '—'}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Assessor</dt><dd>{project.assessor || '—'}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Sector</dt><dd>{project.sector}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Zones</dt><dd>{project.zones.length}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Risks</dt><dd>{project.risks.length}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">Critical risks</dt><dd className="text-red-400">{report.gaps.criticalRisks.length}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-400">SL gaps</dt><dd className="text-amber-400">{report.gaps.zoneSlGaps.length}</dd></div>
          </dl>
        </div>
      </Card>

      <Card title="Gap Analysis">
        <div className="text-sm space-y-3">
          <p className="text-slate-300">
            Parts below 50% maturity:{' '}
            <span className="text-amber-400">
              {report.gaps.complianceBelow50.length ? report.gaps.complianceBelow50.join(', ') : 'None'}
            </span>
          </p>
          {report.gaps.zoneSlGaps.length > 0 && (
            <ul className="list-disc list-inside text-slate-400">
              {report.gaps.zoneSlGaps.map((z) => (
                <li key={z.id}>{z.name}: SL-A {z.slAchieved} &lt; SL-T {z.slTarget}</li>
              ))}
            </ul>
          )}
        </div>
      </Card>

      <Card
        title="Data Management"
        action={
          <button
            type="button"
            onClick={() => {
              if (confirm('Reset all assessment data? This cannot be undone.')) resetProject()
            }}
            className="text-xs text-red-400 hover:text-red-300"
          >
            Reset project
          </button>
        }
      >
        <p className="text-sm text-slate-400">
          Data is stored in your browser (localStorage). Export JSON before clearing browser data.
          Use exported files in <code className="text-industrial-400">docs/thesis/data/</code> for thesis evidence.
        </p>
      </Card>
    </div>
  )
}
