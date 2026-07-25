import { Card } from '../components/ui'
import { useProject } from '../hooks/useProject'
import { loadSampleCaseStudy } from '../lib/sample'

const LIVE_DEMO = 'https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/'
const REPO = 'https://github.com/yashwanth123/CyberSecurity-graduate-research-work-'
const TRUTH_DOC = `${REPO}/blob/cursor/thesis-and-webapp-848f/docs/TRUTH-AND-SCOPE.md`
const SYSTEM_DESIGN = `${REPO}/blob/cursor/thesis-and-webapp-848f/docs/architecture/SYSTEM-DESIGN.md`

export default function About() {
  const { setProject } = useProject()

  const loadSample = async () => {
    const imported = await loadSampleCaseStudy()
    if (imported) {
      setProject(imported)
      alert('Loaded Manufacturing Pilot sample case study.')
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">About & Review Guide</h1>
        <p className="text-slate-400 mt-1">
          Scope, live demo, and documentation for advisors and reviewers
        </p>
      </header>

      <Card title="Live demo (share this link)">
        <p className="text-sm text-slate-300 mb-3">
          No install required. Advisors can review the same tool referenced in the IEEE ICSCI 2026 paper.
        </p>
        <a
          href={LIVE_DEMO}
          className="text-industrial-400 hover:text-industrial-300 text-sm font-mono break-all"
          target="_blank"
          rel="noreferrer"
        >
          {LIVE_DEMO}
        </a>
        <ol className="text-sm text-slate-300 mt-4 space-y-2 list-decimal list-inside">
          <li>Open the link above</li>
          <li>Click <strong className="text-white">Load Pilot Case Study</strong> below (or Dashboard banner / Reports)</li>
          <li>Review <strong className="text-white">Dashboard</strong>, <strong className="text-white">Zones & Conduits</strong>, <strong className="text-white">Risk Register</strong></li>
        </ol>
        <button
          type="button"
          onClick={loadSample}
          className="mt-4 px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-700 text-sm font-medium text-white"
        >
          Load Pilot Case Study
        </button>
      </Card>

      <Card title="Truth & scope (read before reviewing)">
        <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
          <p>
            <strong className="text-white">The tool is real.</strong> 107 IEC 62443–mapped questions, SL calculator,
            zones/conduits, risk register, JSON/CSV export.
          </p>
          <p>
            <strong className="text-white">The pilot case study is structured illustrative data</strong> — a documented
            reference architecture and JSON dataset. It is <em>not</em> an on-site audit of live PLCs or a network emulator.
          </p>
          <p>
            Reported metrics (49.1% maturity, SL gaps, critical risks) are <strong className="text-white">correctly computed</strong>{' '}
            by the app from that pilot input. PLCs appear in the Level 2 Control zone as <strong className="text-white">modeled assets</strong>.
          </p>
          <p>
            Full documentation:{' '}
            <a href={TRUTH_DOC} className="text-industrial-400 hover:underline" target="_blank" rel="noreferrer">
              TRUTH-AND-SCOPE.md
            </a>
            {' · '}
            <a href={SYSTEM_DESIGN} className="text-industrial-400 hover:underline" target="_blank" rel="noreferrer">
              SYSTEM-DESIGN.md
            </a>
          </p>
        </div>
      </Card>

      <Card title="Project purpose">
        <p className="text-sm text-slate-300 leading-relaxed">
          Open assessment platform for IEC 62443 — Industrial Automation and Control Systems (IACS) security.
          Supports graduate research (exportable evidence) and OT teams (compliance baseline, SL-T, risk register).
          Developed at California State University Channel Islands.
        </p>
      </Card>

      <Card title="How to cite">
        <blockquote className="border-l-4 border-industrial-600 pl-4 text-sm text-slate-400 italic">
          Tirukkovalluru, Y. S. (2026). IEC 62443 Industrial Cybersecurity Assessment Platform (Version 1.0.0)
          [Computer software]. GitHub. {REPO}
        </blockquote>
        <p className="text-sm text-slate-400 mt-3">
          See <code className="text-industrial-400">CITATION.cff</code> in the repository root.
        </p>
      </Card>

      <Card title="Run locally">
        <pre className="text-sm text-slate-300 bg-industrial-900 rounded-lg p-4 overflow-x-auto">
{`git clone ${REPO}.git
cd CyberSecurity-graduate-research-work-/webapp
npm install
npm run dev
# Open http://localhost:5173`}
        </pre>
        <p className="text-sm text-slate-400 mt-2">
          Docker: <code className="text-industrial-400">docker compose up -d --build</code> → http://localhost:8080
        </p>
      </Card>

      <Card title="Standards coverage">
        <p className="text-sm text-slate-400">
          107 questions mapped to IEC 62443 parts 1-1 through 4-2. SL matrix aligned with 62443-3-2/3-3.
          Self-assessment tool — not a certification body.
        </p>
      </Card>

      <Card title="License">
        <p className="text-sm text-slate-400">MIT License — free to use, modify, and deploy.</p>
      </Card>
    </div>
  )
}
