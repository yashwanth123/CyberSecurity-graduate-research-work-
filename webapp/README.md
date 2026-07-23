# IEC 62443 Assessment Web App

Practical assessment platform for **industrial automation** environments, aligned with IEC 62443 compliance and risk assessment workflows.

## Features

| Module | IEC 62443 alignment | Purpose |
|--------|---------------------|---------|
| **Dashboard** | — | Project setup, maturity overview |
| **Compliance** | Parts 1–4 | 107-question checklist from repo Excel |
| **SL Calculator** | 62443-3-2 / 3-3 | Security Level Target (SL-T) from threat profile |
| **Zones & Conduits** | 62443-3-2 | Purdue template, SL-T vs SL-A gap tracking |
| **Risk Register** | 62443-3-2 | Likelihood × impact matrix, prioritized risks |
| **Standards Catalog** | All parts | Reference for assessors |
| **Reports** | — | Export JSON/CSV for thesis or audits |

## Quick start

```bash
cd webapp
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (nginx, GitHub Pages, Azure Static Web Apps).

## Data

- Questions extracted from `_IEC 62443__.xlsx`
- Re-extract after Excel updates:

```bash
pip install openpyxl
python scripts/extract_requirements.py
```

## Storage

Assessment data persists in **browser localStorage**. Export JSON from Reports before clearing browser data.

## Thesis integration

See `docs/thesis/data-collection-plan.md` for how to use exports as empirical evidence.
