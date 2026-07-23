# Thesis Preparation — IEC 62443 & Industrial Automation Security

This folder supports graduate research on **IEC 62443 compliance**, **IACS risk assessment**, and **practical implementation** in industrial automation environments.

## Documents

| File | Purpose |
|------|---------|
| [outline.md](./outline.md) | Full thesis structure (chapters 1–6) |
| [research-questions.md](./research-questions.md) | Primary and secondary research questions |
| [methodology.md](./methodology.md) | Research design, methods, and evaluation criteria |
| [literature-review.md](./literature-review.md) | Annotated bibliography mapped to repo resources |
| [data-collection-plan.md](./data-collection-plan.md) | How to use the web app and repo for empirical data |

## Suggested thesis title options

1. *A Practical Framework for IEC 62443 Compliance in Industrial Automation Systems*
2. *Risk-Based Security Level Determination for IACS Using IEC 62443-3-2*
3. *Bridging OT Security Gaps: An IEC 62443 Implementation Study in [Your Industry Sector]*

## Workflow

1. Read `literature-review.md` and the PDFs listed there.
2. Use the **web app** (`webapp/`) to run compliance assessments on a case-study plant or lab environment.
3. Export assessment results as evidence for your empirical chapter.
4. Follow `methodology.md` for case study / survey / tool validation design.

## Repository cross-links

- Compliance questions ? extracted from `_IEC 62443__.xlsx` ? `webapp/src/data/iec62443.json`
- Risk assessment theory ? `62443-3-2.pdf`, `Risk_identification_ICS.pdf`
- Implementation guidance ? `SANS-Managing-ICS-Security-IEC-62443.pdf`
