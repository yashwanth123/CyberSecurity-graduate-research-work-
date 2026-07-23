# Data Collection Plan

## Objective

Collect structured, reproducible data for the empirical thesis chapter using the **IEC 62443 Assessment Web App** and supporting qualitative methods.

---

## Dataset 1 — Compliance assessment

| Field | Description |
|-------|-------------|
| `projectName` | Case study identifier (anonymized) |
| `assessor` | Role (e.g., OT engineer, researcher) |
| `date` | Assessment date |
| `responses` | Map of question ID ? Yes / Partial / No / N/A |
| `maturityByPart` | Computed % per part |

**Collection steps:**
1. Launch web app ? Compliance module
2. Filter by part if doing phased assessment
3. Answer all 107 questions with evidence notes
4. Export JSON from Reports page
5. Store in `docs/thesis/data/compliance-<site>-<date>.json`

---

## Dataset 2 — Security Level targets

| Field | Description |
|-------|-------------|
| `zoneName` | e.g., "Level 1 - Control", "DMZ", "Enterprise" |
| `assets` | List of key assets in zone |
| `threatProfile` | Misuse, means, resources, knowledge, motivation |
| `slTarget` | Computed SL 0–4 |
| `consequence` | Safety / production / financial rating |

**Collection steps:**
1. Draw zone diagram (Purdue levels helpful)
2. For each zone, run SL Calculator in web app
3. Record SL-T in Zones module
4. Export with compliance data

---

## Dataset 3 — Risk register

| Field | Description |
|-------|-------------|
| `id` | Risk identifier |
| `asset` | Affected asset |
| `threat` | Threat description |
| `vulnerability` | Weakness exploited |
| `likelihood` | 1–5 |
| `impact` | 1–5 |
| `riskScore` | L × I |
| `zone` | Linked zone |
| `mitigation` | Proposed control (map to FR/SR if possible) |
| `status` | Open / Mitigated / Accepted |

**Minimum sample:** 10 risks covering safety, network, access control, patching, monitoring

---

## Dataset 4 — Qualitative interviews

| Field | Description |
|-------|-------------|
| `participantId` | P1, P2, … (anonymous) |
| `role` | Job title category |
| `duration` | Minutes |
| `transcript` | Anonymized notes |
| `themes` | Coded themes (barriers, tools, priorities) |

**Sample size:** 3–5 participants (saturation for barriers theme)

---

## Pilot vs full study

| Stage | Purpose | N |
|-------|---------|---|
| Pilot | Test questionnaire clarity, tool UX | 1 lab/testbed |
| Full case study | Thesis primary data | 1–2 sites |

---

## Data storage & privacy

```
docs/thesis/data/           # gitignored if contains sensitive info
??? compliance-*.json       # exported from web app
??? interviews/             # anonymized transcripts
??? diagrams/             # zone architecture (PNG/SVG)
```

Add `docs/thesis/data/` to `.gitignore` if storing real organizational data.

---

## Analysis checklist

- [ ] Maturity score calculated per part (General, Policies, System, Component)
- [ ] Top 10 failed/partial requirements identified
- [ ] SL-T table complete for all zones
- [ ] Risk heat map (5×5) generated
- [ ] Interview themes coded (barriers, enablers)
- [ ] Cross-tab: compliance gaps ? risk register entries

---

## Connection to web app

| Thesis need | Web app module |
|-------------|----------------|
| 107 compliance questions | **Compliance** |
| SL-T determination | **SL Calculator** |
| Zone documentation | **Zones & Conduits** |
| Risk evidence | **Risk Register** |
| Export for appendix | **Reports** |

Run locally: see `webapp/README.md`
