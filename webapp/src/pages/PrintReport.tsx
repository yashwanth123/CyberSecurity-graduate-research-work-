import { Link } from 'react-router-dom'
import { useCallback, useRef } from 'react'
import { buildReport } from '../lib/report'
import { useProject } from '../hooks/useProject'
import { parts, questions } from '../lib/data'
import { computeMaturity } from '../lib/types'
import { Card, ProgressBar } from '../components/ui'

export default function PrintReport() {
  const { project } = useProject()
  const reportRef = useRef<HTMLDivElement>(null)
  const report = buildReport(project)

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return (
    <div className="space-y-4">
      <div className="no-print flex gap-2 mb-6">
        <button
          type="button"
          onClick={handlePrint}
          className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium"
        >
          Print / Save as PDF
        </button>
        <Link to="/reports" className="px-4 py-2 rounded-lg bg-industrial-800 text-sm border border-industrial-700">
          ← Back to Reports
        </Link>
      </div>

      <div ref={reportRef} className="print-report bg-white text-black p-8 rounded-xl print:p-0 print:rounded-none">
        <header className="border-b-2 border-gray-800 pb-4 mb-6">
          <h1 className="text-2xl font-bold">IEC 62443 Assessment Report</h1>
          <p className="text-gray-600 mt-1">{report.meta.projectName}</p>
          <p className="text-sm text-gray-500 mt-2">
            Generated {new Date(report.meta.generatedAt).toLocaleString()} · {report.meta.sector}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Executive Summary</h2>
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                ['Organization', report.meta.organization || '—'],
                ['Assessor', report.meta.assessor || '—'],
                ['Overall Maturity', `${report.compliance.overallMaturity}%`],
                ['Zones Defined', String(report.zones.length)],
                ['Open Risks', String(report.risks.filter((r) => r.status === 'open').length)],
                ['Critical Risks', String(report.gaps.criticalRisks.length)],
                ['SL Gaps', String(report.gaps.zoneSlGaps.length)],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-gray-200">
                  <td className="py-2 font-medium text-gray-700 w-1/3">{k}</td>
                  <td className="py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Maturity by Standard Part</h2>
          <table className="w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Part</th>
                <th className="border border-gray-300 p-2 text-right">Maturity</th>
              </tr>
            </thead>
            <tbody>
              {report.compliance.byPart.map(({ part, maturity }) => (
                <tr key={part}>
                  <td className="border border-gray-300 p-2">{part}</td>
                  <td className="border border-gray-300 p-2 text-right">{maturity}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {report.gaps.zoneSlGaps.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">Security Level Gaps</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {report.gaps.zoneSlGaps.map((z) => (
                <li key={z.id}>{z.name}: SL-A {z.slAchieved} &lt; SL-T {z.slTarget}</li>
              ))}
            </ul>
          </section>
        )}

        {report.risks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">Risk Register</h2>
            <table className="w-full text-xs border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-1">Asset</th>
                  <th className="border p-1">Threat</th>
                  <th className="border p-1">Score</th>
                  <th className="border p-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {report.risks.map((r) => (
                  <tr key={r.id}>
                    <td className="border p-1">{r.asset}</td>
                    <td className="border p-1">{r.threat}</td>
                    <td className="border p-1">{r.score} ({r.priority})</td>
                    <td className="border p-1">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <footer className="text-xs text-gray-500 border-t pt-4 mt-8">
          IEC 62443 IACS Assessment Platform · For audit and thesis evidence · Cite via repository CITATION.cff
        </footer>
      </div>

      {/* Screen-only preview card */}
      <Card title="Print Preview" className="no-print">
        <ProgressBar label="Overall maturity" value={computeMaturity(project.compliance, questions.map((q) => q.id))} />
        <p className="text-sm text-slate-400 mt-4">
          Use Print → &quot;Save as PDF&quot; for audit packages. {parts.length} standard parts covered.
        </p>
      </Card>
    </div>
  )
}
