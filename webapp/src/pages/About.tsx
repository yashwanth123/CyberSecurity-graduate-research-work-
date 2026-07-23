import { Card } from '../components/ui'

export default function About() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">About & Attribution</h1>
        <p className="text-slate-400 mt-1">
          Credit, citation, and paths for academic and industry use
        </p>
      </header>

      <Card title="Project Purpose">
        <p className="text-sm text-slate-300 leading-relaxed">
          Open assessment platform for IEC 62443 — the international standard for Industrial
          Automation and Control Systems (IACS) security. Supports graduate research (thesis
          evidence export) and OT security teams (compliance baseline, SL-T, risk register).
        </p>
      </Card>

      <Card title="How to cite this work">
        <div className="text-sm space-y-4 text-slate-300">
          <p><strong className="text-white">APA 7 (software):</strong></p>
          <blockquote className="border-l-4 border-industrial-600 pl-4 text-slate-400 italic">
            [Your Name]. (2026). IEC 62443 Industrial Cybersecurity Assessment Platform (Version 1.0.0) [Computer software]. GitHub. https://github.com/yashwanth123/CyberSecurity-graduate-research-work-
          </blockquote>
          <p>
            Edit <code className="text-industrial-400">CITATION.cff</code> in the repository root with your name and ORCID.
            Publish a Zenodo release for a DOI.
          </p>
        </div>
      </Card>

      <Card title="Get credit (academic)">
        <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
          <li>Complete thesis using exported JSON/CSV from Reports</li>
          <li>Publish conference paper — see <code className="text-industrial-400">docs/thesis/publication-strategy.md</code></li>
          <li>Register ORCID and link this repository</li>
          <li>Create GitHub Release v1.0.0 + Zenodo DOI</li>
        </ul>
      </Card>

      <Card title="Use in industry">
        <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
          <li>Deploy internally: <code className="text-industrial-400">npm run build</code> → serve <code className="text-industrial-400">dist/</code></li>
          <li>Follow <code className="text-industrial-400">docs/industry/implementation-guide.md</code></li>
          <li>Load sample case study from Reports → demonstrate to plant leadership</li>
          <li>Export print/PDF report for audit evidence</li>
        </ul>
      </Card>

      <Card title="Standards coverage">
        <p className="text-sm text-slate-400">
          107 assessment questions mapped to IEC 62443 parts 1-1 through 4-2 (General, Policies,
          System, Component). SL matrix aligned with 62443-3-2/3-3 threat model. Not a certification
          body — use for self-assessment and research.
        </p>
      </Card>

      <Card title="License">
        <p className="text-sm text-slate-400">
          MIT License — free to use, modify, and deploy. Attribution appreciated via CITATION.cff.
        </p>
      </Card>
    </div>
  )
}
