# Research Methodology

## 1. Research approach

Recommended: **Design Science Research (DSR)** combined with a **single or multiple case study**.

| Phase | Activity | Output |
|-------|----------|--------|
| Problem identification | Literature + practitioner interviews | Problem statement |
| Design | Build assessment framework + web tool | Artifact (`webapp/`) |
| Demonstration | Apply to case-study IACS | Assessment dataset |
| Evaluation | Compare gaps, validate with experts | Findings chapter |
| Communication | Thesis + open repo | Contribution |

Alternative: **Systematic Literature Review (SLR)** if empirical plant access is limited — use all PDFs in this repo as primary sources.

---

## 2. Case study design

### 2.1 Unit of analysis
- One manufacturing line, substation, water treatment SCADA, or lab testbed
- Define **System Under Consideration (SuC)** boundary per IEC 62443-3-2

### 2.2 Selection criteria
- Represents typical OT architecture (PLC + HMI + historian + DMZ)
- Willing participant organization OR university lab
- Documented network diagram available

### 2.3 Data sources

| Source | Type | Use |
|--------|------|-----|
| Web app compliance module | Quantitative | 107-question maturity score |
| Web app risk register | Quantitative | Risk ranking |
| Web app SL calculator | Quantitative | SL-T per zone |
| Interviews (3–5) | Qualitative | Barriers, context |
| Network/architecture docs | Qualitative | Zones/conduits model |
| Repo PDFs | Secondary | Theoretical grounding |

---

## 3. Assessment procedure (step-by-step)

1. **Define SuC** — document assets, interfaces, business rationale (62443-2-1)
2. **Initial risk assessment** — identify threats, vulnerabilities, consequences (62443-3-2)
3. **Partition zones & conduits** — use web app Zones module
4. **Determine SL-T** — SL Calculator based on threat profile
5. **Run compliance checklist** — all 107 questions in web app
6. **Build risk register** — link findings to zones and FRs
7. **Gap analysis** — SL-T vs SL-A, compliance % by part
8. **Expert review** — 1–2 practitioners validate results

---

## 4. Scoring model

### Compliance maturity (per part)

```
Maturity = (Yes × 1.0 + Partial × 0.5) / Total Questions × 100
```

### Risk score (5×5 matrix)

```
Risk Score = Likelihood (1–5) × Impact (1–5)
```

| Score | Priority |
|-------|----------|
| 15–25 | Critical |
| 8–14 | High |
| 4–7 | Medium |
| 1–3 | Low |

### SL-T determination

Use IEC 62443 threat characteristics (see web app SL Calculator):
- Accidental misuse ? typically SL 1
- Intentional, simple means, general knowledge ? SL 2
- IACS-specific knowledge, moderate resources ? SL 3
- Extensive resources, high motivation ? SL 4

---

## 5. Interview guide (semi-structured)

1. Describe your role and OT security responsibilities.
2. Are you familiar with IEC 62443? Which parts?
3. How do you currently assess OT cyber risk?
4. What are the biggest obstacles to patching OT devices?
5. How are network segments / zones defined today?
6. Would a structured checklist/tool help? What features matter most?
7. How do you balance safety/availability vs security controls?

---

## 6. Validity & reliability

- **Construct validity:** Map each question to specific IEC 62443 clause
- **Internal validity:** Two assessors independently score subset; compute agreement
- **External validity:** Discuss generalizability to similar sectors
- **Reliability:** Same assessor re-test after 2 weeks on 20-question sample

---

## 7. Ethics

- Obtain organizational approval before any assessment
- Anonymize company name, IP addresses, site identifiers
- Do not scan or test production networks without written authorization
- Store data locally; web app uses browser localStorage by default

---

## 8. Timeline template (technical phases)

| Phase | Activities |
|-------|------------|
| Phase 1 | Literature review, finalize RQs, ethics approval |
| Phase 2 | Tool familiarization, pilot on lab/testbed |
| Phase 3 | Case study data collection |
| Phase 4 | Analysis, write results chapter |
| Phase 5 | Expert validation, revise, submit |

---

## 9. Tools used

- **This repository** — reference documents
- **Web app** (`webapp/`) — compliance, risk, SL, zones
- **Export** — JSON/CSV from web app for thesis appendices
- Optional: draw.io / Lucidchart for zone diagrams
