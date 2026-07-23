import { Fragment, useState } from 'react'
import { Badge, Card } from '../components/ui'
import { useProject } from '../hooks/useProject'
import { riskPriority, riskScore, type RiskEntry } from '../lib/types'

function emptyRisk(): RiskEntry {
  return {
    id: crypto.randomUUID(),
    asset: '',
    threat: '',
    vulnerability: '',
    likelihood: 3,
    impact: 3,
    zone: '',
    mitigation: '',
    status: 'open',
  }
}

const PRIORITY_VARIANT = {
  critical: 'danger',
  high: 'warning',
  medium: 'info',
  low: 'default',
} as const

export default function Risks() {
  const { project, updateProject } = useProject()
  const [draft, setDraft] = useState<RiskEntry | null>(null)

  const saveRisk = () => {
    if (!draft?.asset.trim() || !draft.threat.trim()) return
    const exists = project.risks.find((r) => r.id === draft.id)
    const risks = exists
      ? project.risks.map((r) => (r.id === draft.id ? draft : r))
      : [...project.risks, draft]
    updateProject({ risks: risks.sort((a, b) => riskScore(b.likelihood, b.impact) - riskScore(a.likelihood, a.impact)) })
    setDraft(null)
  }

  const removeRisk = (id: string) => {
    updateProject({ risks: project.risks.filter((r) => r.id !== id) })
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Risk Register</h1>
          <p className="text-slate-400 mt-1">
            IEC 62443-3-2 aligned risk tracking — likelihood × impact matrix
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDraft(emptyRisk())}
          className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium"
        >
          + Add Risk
        </button>
      </header>

      {draft && (
        <Card title={project.risks.some((r) => r.id === draft.id) ? 'Edit Risk' : 'New Risk'}>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block md:col-span-2">
              <span className="text-xs text-slate-400">Asset / System</span>
              <input
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.asset}
                onChange={(e) => setDraft({ ...draft, asset: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Threat</span>
              <input
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.threat}
                onChange={(e) => setDraft({ ...draft, threat: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Vulnerability</span>
              <input
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.vulnerability}
                onChange={(e) => setDraft({ ...draft, vulnerability: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Zone</span>
              <select
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.zone}
                onChange={(e) => setDraft({ ...draft, zone: e.target.value })}
              >
                <option value="">— Select zone —</option>
                {project.zones.map((z) => (
                  <option key={z.id} value={z.name}>{z.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Status</span>
              <select
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.status}
                onChange={(e) => setDraft({ ...draft, status: e.target.value as RiskEntry['status'] })}
              >
                <option value="open">Open</option>
                <option value="mitigated">Mitigated</option>
                <option value="accepted">Accepted</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Likelihood (1–5)</span>
              <input
                type="range" min={1} max={5}
                className="mt-2 w-full"
                value={draft.likelihood}
                onChange={(e) => setDraft({ ...draft, likelihood: Number(e.target.value) })}
              />
              <span className="text-sm text-white">{draft.likelihood}</span>
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">Impact (1–5)</span>
              <input
                type="range" min={1} max={5}
                className="mt-2 w-full"
                value={draft.impact}
                onChange={(e) => setDraft({ ...draft, impact: Number(e.target.value) })}
              />
              <span className="text-sm text-white">{draft.impact}</span>
            </label>
            <label className="block md:col-span-2">
              <span className="text-xs text-slate-400">Mitigation / Control</span>
              <textarea
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm min-h-[80px]"
                value={draft.mitigation}
                onChange={(e) => setDraft({ ...draft, mitigation: e.target.value })}
              />
            </label>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant={PRIORITY_VARIANT[riskPriority(riskScore(draft.likelihood, draft.impact))]}>
              Score: {riskScore(draft.likelihood, draft.impact)} — {riskPriority(riskScore(draft.likelihood, draft.impact))}
            </Badge>
            <button type="button" onClick={saveRisk} className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-sm">
              Save Risk
            </button>
            <button type="button" onClick={() => setDraft(null)} className="px-4 py-2 rounded-lg bg-industrial-800 text-sm">
              Cancel
            </button>
          </div>
        </Card>
      )}

      <Card title="Risk Heat Map">
        <div className="grid grid-cols-6 gap-1 max-w-md text-center text-xs">
          <div />
          {[1, 2, 3, 4, 5].map((l) => (
            <div key={l} className="text-slate-500 py-1">L{l}</div>
          ))}
          {[5, 4, 3, 2, 1].map((impact) => (
            <Fragment key={`row-${impact}`}>
              <div className="text-slate-500 flex items-center justify-end pr-2">I{impact}</div>
              {[1, 2, 3, 4, 5].map((likelihood) => {
                const score = riskScore(likelihood, impact)
                const count = project.risks.filter(
                  (r) => r.likelihood === likelihood && r.impact === impact && r.status === 'open',
                ).length
                const bg =
                  score >= 15 ? 'bg-red-800' : score >= 8 ? 'bg-amber-800' : score >= 4 ? 'bg-yellow-900' : 'bg-industrial-800'
                return (
                  <div key={`${likelihood}-${impact}`} className={`${bg} rounded p-2 min-h-[36px] flex items-center justify-center`}>
                    {count > 0 ? count : ''}
                  </div>
                )
              })}
            </Fragment>
          ))}
        </div>
      </Card>

      <div className="space-y-3">
        {project.risks.map((risk) => {
          const score = riskScore(risk.likelihood, risk.impact)
          const priority = riskPriority(score)
          return (
            <Card key={risk.id} className="!p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-white">{risk.asset}</p>
                  <p className="text-sm text-slate-400 mt-1">{risk.threat}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant={PRIORITY_VARIANT[priority]}>{priority} ({score})</Badge>
                  <Badge variant={risk.status === 'open' ? 'danger' : 'success'}>{risk.status}</Badge>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Vulnerability: {risk.vulnerability || '—'}</p>
              {risk.mitigation && <p className="text-xs text-slate-400 mt-1">Mitigation: {risk.mitigation}</p>}
              <div className="flex gap-2 mt-2">
                <button type="button" onClick={() => setDraft(risk)} className="text-xs text-industrial-400">Edit</button>
                <button type="button" onClick={() => removeRisk(risk.id)} className="text-xs text-red-400">Remove</button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
