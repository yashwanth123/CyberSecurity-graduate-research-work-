import { useState } from 'react'
import { Badge, Card } from '../components/ui'
import { useProject } from '../hooks/useProject'
import type { ZoneEntry } from '../lib/types'

const PURDUE_TEMPLATES = [
  { name: 'Level 5 — Enterprise', description: 'Corporate IT, ERP, email', slTarget: 2 },
  { name: 'Level 4 — Site Business', description: 'Plant MES, scheduling, site servers', slTarget: 2 },
  { name: 'Level 3.5 — DMZ', description: 'Data diodes, jump servers, AV updates', slTarget: 3 },
  { name: 'Level 3 — Operations', description: 'HMIs, engineering workstations, historians', slTarget: 3 },
  { name: 'Level 2 — Control', description: 'PLCs, RTUs, DCS controllers', slTarget: 3 },
  { name: 'Level 1 — Basic Control', description: 'Sensors, actuators, field devices', slTarget: 2 },
  { name: 'Level 0 — Process', description: 'Physical process (reference only)', slTarget: 1 },
]

function emptyZone(): ZoneEntry {
  return {
    id: crypto.randomUUID(),
    name: '',
    description: '',
    assets: '',
    slTarget: 2,
    slAchieved: 0,
    conduitTo: '',
  }
}

export default function Zones() {
  const { project, updateProject } = useProject()
  const [draft, setDraft] = useState<ZoneEntry | null>(null)

  const saveZone = () => {
    if (!draft?.name.trim()) return
    const exists = project.zones.find((z) => z.id === draft.id)
    const zones = exists
      ? project.zones.map((z) => (z.id === draft.id ? draft : z))
      : [...project.zones, draft]
    updateProject({ zones })
    setDraft(null)
  }

  const removeZone = (id: string) => {
    updateProject({ zones: project.zones.filter((z) => z.id !== id) })
  }

  const loadTemplates = () => {
    const zones = PURDUE_TEMPLATES.map((t) => ({
      id: crypto.randomUUID(),
      name: t.name,
      description: t.description,
      assets: '',
      slTarget: t.slTarget,
      slAchieved: 0,
      conduitTo: '',
    }))
    updateProject({ zones })
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Zones & Conduits</h1>
          <p className="text-slate-400 mt-1">
            Partition IACS per IEC 62443-3-2 — define zones, SL-T, and conduit paths
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={loadTemplates}
            className="px-4 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-sm border border-industrial-700"
          >
            Load Purdue Template
          </button>
          <button
            type="button"
            onClick={() => setDraft(emptyZone())}
            className="px-4 py-2 rounded-lg bg-industrial-600 hover:bg-industrial-500 text-sm font-medium"
          >
            + Add Zone
          </button>
        </div>
      </header>

      {draft && (
        <Card title={project.zones.some((z) => z.id === draft.id) ? 'Edit Zone' : 'New Zone'}>
          <div className="grid md:grid-cols-2 gap-4">
            {(
              [
                ['name', 'Zone Name', 'text'],
                ['description', 'Description', 'text'],
                ['assets', 'Key Assets (comma-separated)', 'text'],
                ['conduitTo', 'Conduits To (zone names)', 'text'],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="block">
                <span className="text-xs text-slate-400">{label}</span>
                <input
                  className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                  value={draft[key]}
                  onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                />
              </label>
            ))}
            <label className="block">
              <span className="text-xs text-slate-400">SL Target (SL-T)</span>
              <select
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.slTarget}
                onChange={(e) => setDraft({ ...draft, slTarget: Number(e.target.value) })}
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>SL {n}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-slate-400">SL Achieved (SL-A)</span>
              <select
                className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
                value={draft.slAchieved}
                onChange={(e) => setDraft({ ...draft, slAchieved: Number(e.target.value) })}
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>SL {n}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex gap-2 mt-4">
            <button type="button" onClick={saveZone} className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-sm">
              Save Zone
            </button>
            <button type="button" onClick={() => setDraft(null)} className="px-4 py-2 rounded-lg bg-industrial-800 text-sm">
              Cancel
            </button>
          </div>
        </Card>
      )}

      <div className="grid gap-4">
        {project.zones.length === 0 && (
          <Card>
            <p className="text-slate-400 text-sm">
              No zones defined. Add zones manually or load the Purdue model template to start IEC 62443-3-2 partitioning.
            </p>
          </Card>
        )}
        {project.zones.map((zone) => {
          const gap = zone.slAchieved < zone.slTarget
          return (
            <Card key={zone.id} className="!p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-white">{zone.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{zone.description}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge variant="info">SL-T: {zone.slTarget}</Badge>
                  <Badge variant={gap ? 'danger' : 'success'}>SL-A: {zone.slAchieved}</Badge>
                  {gap && <Badge variant="warning">Gap</Badge>}
                </div>
              </div>
              {zone.assets && (
                <p className="text-xs text-slate-500 mt-2"><span className="text-slate-400">Assets:</span> {zone.assets}</p>
              )}
              {zone.conduitTo && (
                <p className="text-xs text-slate-500 mt-1"><span className="text-slate-400">Conduits ?</span> {zone.conduitTo}</p>
              )}
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setDraft(zone)}
                  className="text-xs text-industrial-400 hover:text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => removeZone(zone.id)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </Card>
          )
        })}
      </div>

      {project.zones.length > 1 && (
        <Card title="Zone Architecture (ASCII)">
          <pre className="text-xs text-slate-400 font-mono overflow-x-auto leading-relaxed">
            {project.zones.map((z, i) => (
              `${'  '.repeat(Math.min(i, 3))}[${z.name}] SL-T:${z.slTarget}${z.conduitTo ? ` ??? ${z.conduitTo}` : ''}\n`
            )).join('')}
          </pre>
        </Card>
      )}
    </div>
  )
}
