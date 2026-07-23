# Industry Demo Script — 15 Minutes

Use this script for plant leadership briefings, job interviews, or conference demos.

## Before the demo

```bash
# Option A: Local
cd webapp && npm run dev

# Option B: Docker (production-like)
docker compose up -d --build
# Open http://localhost:8080
```

1. Load **Sample Case Study** (Reports page)
2. Close unrelated browser tabs
3. Set project name if presenting thesis work

---

## Script

### Opening (2 min)

> "This platform operationalizes IEC 62443 for industrial automation — the international standard for OT security. It combines compliance assessment, Security Level analysis, zone architecture, and risk registration in one exportable workflow used for our PhD research and plant assessments."

### Dashboard (2 min)

- Point to **49.1% overall maturity**
- "Below 50% is typical for brownfield manufacturing without a dedicated OT security program."
- Note **4 critical risks**, **2 SL gaps**

### Zones & Conduits (3 min)

- Show Purdue levels L5 → L2
- Highlight **DMZ** and **Operations**: SL-T=3, SL-A=2
- "Integration and vendor access zones are where we most often find gaps."

### Compliance (3 min)

- Filter **System** part — lowest at 43.6%
- Open one **Partial** answer with evidence note
- "Every answer supports audit evidence — not just yes/no."

### Risk Register (3 min)

- Show **vendor jump server** — score 20, Critical
- Show heat map
- "Risk view prioritizes what compliance percentage alone doesn't."

### Reports & close (2 min)

- Click **Print / PDF** — "Audit-ready executive report"
- **Export JSON** — "Thesis appendix and reproducible research data"
- Mention **NIST CSF mapping** for IT stakeholders
- Close: "Open source, deployable on-prem via Docker, no OT data leaves the browser."

---

## Q&A cheat sheet

| Question | Answer |
|----------|--------|
| Is this certification? | Self-assessment tool, not a cert body |
| Where is data stored? | Browser localStorage; export for archive |
| Can we customize questions? | Yes — edit Excel, rerun extract script |
| How long for full assessment? | 2–4 weeks with OT SME involvement |
| PhD contribution? | DSR artifact + empirical manufacturing baseline |

---

## After the demo

- Send PDF report + link to repository
- Offer pilot scope document (1 page SuC boundary)
- Log feedback for thesis SRQ 5 interviews
