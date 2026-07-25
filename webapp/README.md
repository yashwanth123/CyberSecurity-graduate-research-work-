# IEC 62443 Assessment Web App

Practical assessment platform for **industrial automation** environments, aligned with IEC 62443 compliance and risk assessment workflows.

**Live demo:** https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/#/

**Truth & scope (read first):** [docs/TRUTH-AND-SCOPE.md](../docs/TRUTH-AND-SCOPE.md)  
**System design:** [docs/architecture/SYSTEM-DESIGN.md](../docs/architecture/SYSTEM-DESIGN.md)

---

## Quick start (local)

```bash
cd webapp
npm install
npm run dev
```

Open **http://localhost:5173**

Then: **Reports ? Load Sample Case Study** (or **Dashboard ? Load Pilot Case Study** banner)

---

## Quick start (Docker)

From repository root:

```bash
docker compose up -d --build
```

Open **http://localhost:8080**

---

## For advisors / reviewers (3 steps)

1. Open the [live demo](https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/)
2. Go to **About & Credit** ? click **Load Pilot Case Study**
3. Review **Dashboard**, **Zones & Conduits**, **Risk Register**

No screenshots needed — same tool as the IEEE paper artifact.

---

## Modules

| Module | Route | Purpose |
|--------|-------|---------|
| Dashboard | `/` | Maturity overview, project settings |
| Compliance | `/compliance` | 107-question IEC 62443 checklist |
| SL Calculator | `/sl-calculator` | SL-Target from threat profile |
| Zones & Conduits | `/zones` | Purdue architecture, SL gaps |
| Risk Register | `/risks` | L×I matrix, OT risks |
| Reports | `/reports` | Import/export JSON/CSV |
| About | `/about` | Live link, truth & scope, run guide |

---

## Where data comes from

| Data | Source | Real? |
|------|--------|-------|
| 107 questions | `_IEC 62443__.xlsx` ? `src/data/iec62443.json` | Yes — standard mapping |
| Pilot case study | `public/sample-assessment.json` | Illustrative scenario (see TRUTH doc) |
| Your assessment | Browser localStorage after you answer | Yes — if you enter real answers |

Regenerate pilot sample:

```bash
python scripts/generate_sample_case_study.py
```

Re-extract questions from Excel:

```bash
pip install openpyxl
python scripts/extract_requirements.py
```

---

## Build for production

```bash
npm run build
npm run preview
```

Deploy `dist/` to nginx, GitHub Pages, or Azure Static Web Apps.

GitHub Pages uses `BASE_PATH=/CyberSecurity-graduate-research-work-/` in CI (see `.github/workflows/deploy-pages.yml`).

---

## Storage & privacy

- Data persists in **browser localStorage** only
- Export JSON from Reports before clearing browser data
- Do not enter real plant secrets on the public GitHub Pages URL

---

## Paper & research

- IEEE ICSCI 2026 submission (MILCOM WS14), EDAS #1571329192
- Evaluation: Design Science Research artifact + structured pilot scenario
- Thesis integration: `docs/thesis/data-collection-plan.md`

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page on GitHub Pages | Wait 2–5 min after deploy; hard refresh |
| 0% maturity | Load Sample Case Study first |
| Port in use | `npm run dev -- --port 5174` |
| Data lost | Export project JSON from Reports |

---

## License

MIT — see repository root `LICENSE`
