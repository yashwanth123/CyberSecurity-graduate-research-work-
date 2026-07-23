import { Link } from 'react-router-dom'
import { Card, ProgressBar, StatCard } from '../components/ui'
import { useProject } from '../hooks/useProject'
import { parts, questions } from '../lib/data'
import { computeMaturity, riskPriority, riskScore } from '../lib/types'

export default function Dashboard() {
  const { project, updateProject } = useProject()

  const answered = Object.values(project.compliance).filter((r) => r.value).length
  const overallMaturity = computeMaturity(
    project.compliance,
    questions.map((q) => q.id),
  )

  const partScores = parts.map((part) => ({
    part,
    score: computeMaturity(
      project.compliance,
      questions.filter((q) => q.part === part).map((q) => q.id),
    ),
    count: questions.filter((q) => q.part === part).length,
  }))

  const openRisks = project.risks.filter((r) => r.status === 'open')
  const criticalRisks = openRisks.filter((r) => riskPriority(riskScore(r.likelihood, r.impact)) === 'critical')

  const zoneGaps = project.zones.filter((z) => z.slAchieved < z.slTarget)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Assessment Dashboard</h1>
        <p className="text-slate-400 mt-1">
          IEC 62443 compliance overview for industrial automation systems
        </p>
      </header>

      <Card title="Project Settings">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <label className="block">
            <span className="text-xs text-slate-400">Project Name</span>
            <input
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              value={project.projectName}
              onChange={(e) => updateProject({ projectName: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-xs text-slate-400">Organization</span>
            <input
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              value={project.organization}
              onChange={(e) => updateProject({ organization: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-xs text-slate-400">Assessor</span>
            <input
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              value={project.assessor}
              onChange={(e) => updateProject({ assessor: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-xs text-slate-400">Industry Sector</span>
            <select
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              value={project.sector}
              onChange={(e) => updateProject({ sector: e.target.value })}
            >
              {['Manufacturing', 'Energy', 'Water/Wastewater', 'Oil & Gas', 'Transport', 'Other'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Overall Maturity" value={`${overallMaturity}%`} sub="Compliance score" color={overallMaturity >= 60 ? 'green' : 'amber'} />
        <StatCard label="Questions Answered" value={`${answered}/${questions.length}`} sub="Compliance checklist" color="blue" />
        <StatCard label="Open Risks" value={openRisks.length} sub={`${criticalRisks.length} critical`} color={criticalRisks.length ? 'red' : 'green'} />
        <StatCard label="Zone SL Gaps" value={zoneGaps.length} sub={`${project.zones.length} zones defined`} color={zoneGaps.length ? 'amber' : 'green'} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Maturity by Standard Part">
          <div className="space-y-4">
            {partScores.map(({ part, score, count }) => (
              <ProgressBar key={part} label={`${part} (${count} questions)`} value={score} />
            ))}
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: '/compliance', label: 'Start Compliance Assessment', desc: '107 IEC 62443 questions' },
              { to: '/sl-calculator', label: 'Determine Security Levels', desc: 'SL-T from threat profile' },
              { to: '/zones', label: 'Define Zones & Conduits', desc: '62443-3-2 architecture' },
              { to: '/risks', label: 'Manage Risk Register', desc: 'Track OT cyber risks' },
            ].map(({ to, label, desc }) => (
              <Link
                key={to}
                to={to}
                className="block p-4 rounded-lg bg-industrial-800 hover:bg-industrial-700 border border-industrial-700 transition-colors"
              >
                <p className="font-medium text-white text-sm">{label}</p>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
