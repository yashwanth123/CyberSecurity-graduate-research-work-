import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useProject } from '../hooks/useProject'
import { buildReport, importProjectData } from '../lib/report'
import { loadSampleCaseStudy } from '../lib/sample'
import { saveProject } from '../lib/types'
import { Card, ProgressBar } from '../components/ui'

export default function Reports() {
  const { project, setProject, resetProject } = useProject()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const report = buildReport(project)

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iec62443-report-${project.projectName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportProjectJson = () => {
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iec62443-project-${project.projectName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportCsv = () => {
    const rows = [['ID', 'Part', 'Standard', 'Question', 'Response', 'Notes']]
    for (const part of report.compliance.byPart) {
      for (const r of part.responses) {
        rows.push([
          r.id,
          part.part,
          r.standard,
          `"${r.question.replace(/"/g, '""')}"`,
          r.response ?? '',
          `"${r.notes.replace(/"/g, '""')}"`,
        ])
      }
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

  const handleImport = async (file: File) => {
    try {
      const raw = JSON.parse(await file.text())
      const imported = importProjectData(raw)
      if (!imported) {
        alert('Invalid file format. Use a project or report JSON export from this tool.')
        return
      }
      setProject(imported)
      saveProject(imported)
      alert(`Imported: ${imported.projectName}`)
    } catch {
      alert('Could not parse JSON file.')
    }
  }

  const loadSample = async () => {
    try {
      const imported = await loadSampleCaseStudy()
      if (imported) {
        setProject(imported)
        alert('Loaded Manufacturing Pilot sample case study.')
      }
    } catch {
      alert('Could not load sample assessment.')
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports & Export</h1>
          <p className="text-slate-400 mt-1">
            Export for thesis appendices, audit evidence, or industry briefings
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/print-report"
            className="px-4 py-2 rounded-lg bg-green-800 hover:bg-green-700 text-sm font-medium"
          >
            Print / PDF
          </Link>
          <button type="button" onClick={exportCsv} className="px-4 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-sm border border-industrial-700">
            Export CSV
          </button>
          <button type="button" onClick={exportJson} className="px-4 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-sm border border-industrial-700">
            Export Report JSON
          </button>
          <button type="button" onClick={exportProjectJson} className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium">
            Export Project JSON
          </button>
        </div>
      </header>

      <Card title="Import & Samples">
        <p className="text-sm text-slate-400 mb-4">
          Restore a saved assessment or load the demo case study to show industry stakeholders.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-sm border border-industrial-700"
          >
            Import JSON
          </button>
          <button
            type="button"
            onClick={loadSample}
            className="px-4 py-2 rounded-lg bg-amber-900/50 hover:bg-amber-900 text-sm border border-amber-800 text-amber-200"
          >
            Load Sample Case Study
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleImport(f)
              e.target.value = ''
            }}
          />
        </div>
      </Card>

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
          See <Link to="/about" className="text-industrial-400 hover:underline">About</Link> for citation and credit guidance.
        </p>
      </Card>
    </div>
  )
}
