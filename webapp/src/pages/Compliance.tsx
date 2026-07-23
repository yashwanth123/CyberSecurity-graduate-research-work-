import { useMemo, useState } from 'react'
import { Badge, Card, ProgressBar } from '../components/ui'
import { useProject } from '../hooks/useProject'
import { parts, questions } from '../lib/data'
import { computeMaturity, type ResponseValue } from '../lib/types'

const RESPONSES: { value: ResponseValue; label: string; color: string }[] = [
  { value: 'yes', label: 'Yes', color: 'bg-green-700 hover:bg-green-600' },
  { value: 'partial', label: 'Partial', color: 'bg-amber-700 hover:bg-amber-600' },
  { value: 'no', label: 'No', color: 'bg-red-700 hover:bg-red-600' },
  { value: 'na', label: 'N/A', color: 'bg-slate-700 hover:bg-slate-600' },
]

export default function Compliance() {
  const { project, updateProject } = useProject()
  const [filterPart, setFilterPart] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      if (filterPart !== 'all' && q.part !== filterPart) return false
      if (search && !q.question.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [filterPart, search])

  const setResponse = (id: string, value: ResponseValue) => {
    updateProject({
      compliance: {
        ...project.compliance,
        [id]: { ...project.compliance[id], value },
      },
    })
  }

  const setNotes = (id: string, notes: string) => {
    updateProject({
      compliance: {
        ...project.compliance,
        [id]: { ...project.compliance[id], value: project.compliance[id]?.value ?? null, notes },
      },
    })
  }

  const partMaturity = computeMaturity(
    project.compliance,
    filtered.map((q) => q.id),
  )

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Compliance Assessment</h1>
        <p className="text-slate-400 mt-1">
          {questions.length} questions mapped to IEC 62443 parts — sourced from repository checklist
        </p>
      </header>

      <Card>
        <div className="flex flex-wrap gap-4 items-end">
          <label className="block flex-1 min-w-[200px]">
            <span className="text-xs text-slate-400">Filter by part</span>
            <select
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              value={filterPart}
              onChange={(e) => setFilterPart(e.target.value)}
            >
              <option value="all">All parts</option>
              {parts.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className="block flex-1 min-w-[200px]">
            <span className="text-xs text-slate-400">Search</span>
            <input
              className="mt-1 w-full bg-industrial-800 border border-industrial-700 rounded-lg px-3 py-2 text-sm"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <div className="min-w-[180px]">
            <ProgressBar label="Filtered maturity" value={partMaturity} />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {filtered.map((q, idx) => {
          const resp = project.compliance[q.id]
          return (
            <Card key={q.id} className="!p-4">
              <div className="flex flex-wrap items-start gap-2 mb-3">
                <Badge variant="info">{q.id}</Badge>
                <Badge>{q.part}</Badge>
                <Badge variant="default">{q.standard}</Badge>
                <Badge variant="warning">{q.framework_category}</Badge>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                <span className="text-slate-500 mr-2">{idx + 1}.</span>
                {q.question}
              </p>
              <p className="text-xs text-slate-500 mt-1">{q.subcategory}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {RESPONSES.map(({ value, label, color }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setResponse(q.id, value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      resp?.value === value
                        ? `${color} ring-2 ring-white/30 text-white`
                        : 'bg-industrial-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <input
                className="mt-3 w-full bg-industrial-950 border border-industrial-700 rounded-lg px-3 py-2 text-xs text-slate-300"
                placeholder="Evidence / notes (optional)"
                value={resp?.notes ?? ''}
                onChange={(e) => setNotes(q.id, e.target.value)}
              />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
