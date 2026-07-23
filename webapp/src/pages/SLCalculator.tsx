import { useState } from 'react'
import { Badge, Card, StatCard } from '../components/ui'
import { slMatrix } from '../lib/data'
import { suggestSL } from '../lib/types'

export default function SLCalculator() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [profile, setProfile] = useState({
    misuse: 'Intentional',
    means: 'Simple',
    resources: 'Few',
    knowledge: 'General',
    motivation: 'Low',
  })

  const suggested = suggestSL(profile)
  const active = slMatrix.find((s) => s.level === (selectedLevel ?? suggested))

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Security Level Calculator</h1>
        <p className="text-slate-400 mt-1">
          Determine Security Level Target (SL-T) per IEC 62443 threat actor model
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Threat Actor Profile">
          <p className="text-sm text-slate-400 mb-4">
            Characterize the threat environment for your zone or system under consideration.
          </p>
          <div className="space-y-4">
            {(
              [
                ['misuse', 'Misuse type', ['Accidental', 'Intentional']],
                ['means', 'Means', ['-', 'Simple', 'Complex']],
                ['resources', 'Resources', ['-', 'Few', 'Moderate', 'Extensive']],
                ['knowledge', 'Knowledge', ['-', 'General', 'IACS specific']],
                ['motivation', 'Motivation', ['-', 'Low', 'Moderate', 'High']],
              ] as const
            ).map(([key, label, options]) => (
              <label key={key} className="block">
                <span className="text-xs text-slate-400">{label}</span>
                <select
                  className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                  value={profile[key]}
                  onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                >
                  {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <StatCard
            label="Recommended SL-T"
            value={`SL ${suggested}`}
            sub="Based on selected threat profile"
            color="amber"
          />
          {active && (
            <Card title={`SL ${active.level} Characteristics`}>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                {(['misuse', 'means', 'resources', 'knowledge', 'motivation'] as const).map((k) => (
                  <div key={k}>
                    <dt className="text-slate-500 capitalize">{k}</dt>
                    <dd className="text-white font-medium">{active[k]}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          )}
        </div>
      </div>

      <Card title="IEC 62443 Security Level Matrix">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b border-industrial-800">
                <th className="pb-3 pr-4">SL</th>
                <th className="pb-3 pr-4">Misuse</th>
                <th className="pb-3 pr-4">Means</th>
                <th className="pb-3 pr-4">Resources</th>
                <th className="pb-3 pr-4">Knowledge</th>
                <th className="pb-3">Motivation</th>
              </tr>
            </thead>
            <tbody>
              {slMatrix.map((row) => (
                <tr
                  key={row.level}
                  onClick={() => setSelectedLevel(row.level)}
                  className={`border-b border-industrial-800/50 cursor-pointer transition-colors ${
                    (selectedLevel ?? suggested) === row.level
                      ? 'bg-industrial-600/20'
                      : 'hover:bg-industrial-800/50'
                  }`}
                >
                  <td className="py-3 pr-4">
                    <Badge variant={row.level >= 3 ? 'danger' : row.level >= 2 ? 'warning' : 'info'}>
                      SL {row.level}
                    </Badge>
                  </td>
                  <td className="py-3 pr-4 text-slate-300">{row.misuse}</td>
                  <td className="py-3 pr-4 text-slate-300">{row.means}</td>
                  <td className="py-3 pr-4 text-slate-300">{row.resources}</td>
                  <td className="py-3 pr-4 text-slate-300">{row.knowledge}</td>
                  <td className="py-3 text-slate-300">{row.motivation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          SL 0 = no specific requirement. SL 1–4 increase with adversary capability. Apply SL-T per zone (62443-3-2).
        </p>
      </Card>
    </div>
  )
}
