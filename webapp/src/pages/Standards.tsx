import { Badge, Card } from '../components/ui'
import { catalog } from '../lib/data'

export default function Standards() {
  const grouped = catalog.reduce<Record<string, typeof catalog>>((acc, entry) => {
    const key = entry.part.trim()
    if (!acc[key]) acc[key] = []
    acc[key].push(entry)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Standards Catalog</h1>
        <p className="text-slate-400 mt-1">
          IEC 62443 standard parts referenced in this assessment toolkit
        </p>
      </header>

      {Object.entries(grouped).map(([part, entries]) => (
        <Card key={part} title={part}>
          <div className="space-y-4">
            {entries.map((e) => (
              <div key={e.standard} className="border-b border-industrial-800 last:border-0 pb-4 last:pb-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="info">{e.standard}</Badge>
                  <Badge>{e.abbreviation}</Badge>
                </div>
                <h3 className="font-medium text-white text-sm">{e.role}</h3>
                {e.description && (
                  <p className="text-sm text-slate-400 mt-2 whitespace-pre-line leading-relaxed">
                    {e.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Card title="Repository Reference Documents">
        <ul className="text-sm text-slate-400 space-y-2">
          {[
            '62443-3-2.pdf — Risk assessment & system design',
            'SANS-Managing-ICS-Security-IEC-62443.pdf — Implementation guide',
            'Risk_identification_ICS.pdf — ICS threat framework',
            'Questions_reference_document.pdf — Training Q&A',
          ].map((doc) => (
            <li key={doc} className="flex items-start gap-2">
              <span className="text-industrial-400">?</span>
              {doc}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
