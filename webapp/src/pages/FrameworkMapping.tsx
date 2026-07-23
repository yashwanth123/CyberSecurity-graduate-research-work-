import { Card, Badge } from '../components/ui'
import mapping from '../data/nist-csf-mapping.json'
import { parts } from '../lib/data'

interface MappingEntry {
  iecPart: string
  iecStandard: string
  csfFunction: string
  csfCategory: string
  description: string
}

const entries = mapping as MappingEntry[]
const csfFunctions = [...new Set(entries.map((e) => e.csfFunction))]

export default function FrameworkMapping() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Framework Cross-Mapping</h1>
        <p className="text-slate-400 mt-1">
          IEC 62443 parts mapped to NIST Cybersecurity Framework functions — for industry GRC alignment
        </p>
      </header>

      <Card title="NIST CSF Functions">
        <div className="flex flex-wrap gap-2">
          {csfFunctions.map((fn) => (
            <Badge key={fn} variant="info">{fn}</Badge>
          ))}
        </div>
        <p className="text-sm text-slate-400 mt-4">
          Use this mapping when presenting IEC 62443 results to IT security teams familiar with NIST CSF.
        </p>
      </Card>

      {parts.map((part) => {
        const partEntries = entries.filter((e) => e.iecPart === part)
        if (!partEntries.length) return null
        return (
          <Card key={part} title={part}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-industrial-800">
                    <th className="pb-2 pr-4">IEC Standard</th>
                    <th className="pb-2 pr-4">CSF Function</th>
                    <th className="pb-2 pr-4">CSF Category</th>
                    <th className="pb-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {partEntries.map((e, i) => (
                    <tr key={i} className="border-b border-industrial-800/50">
                      <td className="py-2 pr-4 text-industrial-400">{e.iecStandard}</td>
                      <td className="py-2 pr-4">{e.csfFunction}</td>
                      <td className="py-2 pr-4">{e.csfCategory}</td>
                      <td className="py-2 text-slate-400">{e.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
