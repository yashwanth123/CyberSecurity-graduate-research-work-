# System Design — IEC 62443 Assessment Platform

## Overview

Open-source web application that operationalizes **IEC 62443** for Industrial Automation and Control Systems (IACS) assessments. Built with **Design Science Research (DSR)** for graduate research and practitioner baseline audits.

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Routing | React Router v6 |
| Data | Browser `localStorage` (no server-side OT data) |
| Static deploy | nginx (Docker) or GitHub Pages |
| Source pipeline | Python (`openpyxl`) + Excel compliance matrix |

**Live demo:** https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/

---

## Architecture diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Browser (assessor workstation)               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │  Dashboard   │  │  Compliance  │  │  Zones & Conduits    │ │
│  │  SL Calc     │  │  Risk Reg    │  │  Reports / Export    │ │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘ │
│         │                  │                      │             │
│         └──────────────────┼──────────────────────┘             │
│                            ▼                                    │
│              ┌─────────────────────────┐                        │
│              │   useProject() hook      │                        │
│              │   ProjectData state      │                        │
│              └────────────┬────────────┘                        │
│                           ▼                                     │
│              ┌─────────────────────────┐                        │
│              │  localStorage           │                        │
│              │  key: iec62443-project  │                        │
│              └─────────────────────────┘                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     Build-time / offline pipeline                │
│  _IEC 62443__.xlsx  ──►  extract_requirements.py                 │
│                              │                                   │
│                              ▼                                   │
│                    iec62443.json (107 questions)                 │
│                              │                                   │
│  generate_sample_case_study.py (optional pilot dataset)          │
│                              │                                   │
│                              ▼                                   │
│                    sample-assessment.json                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Modules

| Module | Route | IEC alignment | Responsibility |
|--------|-------|---------------|----------------|
| Dashboard | `/` | — | Project metadata, maturity summary, SL gaps, risk counts |
| Compliance | `/compliance` | Parts 1–4 | 107-item checklist (Yes/Partial/No/N/A + notes) |
| SL Calculator | `/sl-calculator` | 62443-3-2/3-3 | Threat profile → SL-Target recommendation |
| Zones & Conduits | `/zones` | 62443-3-2 | Purdue template, zone assets, SL-T vs SL-A |
| Risk Register | `/risks` | 62443-3-2 | L×I matrix, prioritized OT risks |
| Standards | `/standards` | All parts | Reference catalog for assessors |
| Reports | `/reports` | — | Import/export JSON/CSV, load pilot sample |
| Print Report | `/print-report` | — | Audit-ready printable summary |
| NIST CSF Map | `/framework-mapping` | Cross-walk | IEC ↔ NIST CSF communication |
| About | `/about` | — | Scope, citation, live demo instructions |

---

## Data model

```typescript
ProjectData {
  projectName, organization, assessor, sector
  compliance: { [questionId]: { value, notes } }
  zones: [{ name, assets, slTarget, slAchieved, conduitTo, ... }]
  risks: [{ asset, threat, vulnerability, likelihood, impact, ... }]
}
```

### Computed metrics (not stored — derived on read)

- **Maturity:** `(Yes + 0.5 × Partial) / answered × 100`
- **Risk score:** `Likelihood × Impact` (1–5 each)
- **SL gap:** zone where `slAchieved < slTarget`

---

## Data pipeline

| Step | Script / file | Output |
|------|---------------|--------|
| 1 | `_IEC 62443__.xlsx` | Source compliance matrix |
| 2 | `scripts/extract_requirements.py` | `webapp/src/data/iec62443.json` |
| 3 | `scripts/generate_sample_case_study.py` | `webapp/public/sample-assessment.json` |
| 4 | Assessor uses web UI | Browser `localStorage` + JSON export |

Regenerate pilot sample:

```bash
python scripts/generate_sample_case_study.py
```

---

## Security & privacy

- **No backend database** — assessment data never leaves the browser unless exported
- Suitable for OT engineering VLANs (Docker/nginx offline deploy)
- Public GitHub Pages demo: use pilot sample only; do not enter real plant secrets

---

## Deployment options

| Method | Command | URL |
|--------|---------|-----|
| Local dev | `cd webapp && npm run dev` | http://localhost:5173 |
| Docker | `docker compose up -d --build` | http://localhost:8080 |
| GitHub Pages | Push to `main` or `cursor/thesis-and-webapp-848f` | See workflow output |

See [docs/industry/deployment.md](../industry/deployment.md).

---

## Research context

- **Conference paper:** ICSCI 2026 (IEEE MILCOM WS14), EDAS #1571329192
- **Evaluation type:** Artifact demonstration + structured pilot scenario
- **Honest scope:** See [docs/TRUTH-AND-SCOPE.md](../TRUTH-AND-SCOPE.md)

---

## File map

```
webapp/
├── src/
│   ├── pages/          # UI modules
│   ├── lib/            # types, report builder, sample loader
│   ├── data/           # iec62443.json (questions)
│   └── hooks/          # useProject persistence
├── public/
│   └── sample-assessment.json   # pilot case study
scripts/
├── extract_requirements.py
└── generate_sample_case_study.py
docs/
├── architecture/SYSTEM-DESIGN.md   (this file)
└── TRUTH-AND-SCOPE.md
```
