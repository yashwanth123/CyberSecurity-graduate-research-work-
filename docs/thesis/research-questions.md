# Research Questions

## Primary Research Question (PRQ)

**How can organizations in industrial automation environments systematically assess and improve their cybersecurity posture in alignment with IEC 62443?**

---

## Secondary Research Questions (SRQs)

### SRQ 1 — Standard applicability
What are the most critical IEC 62443 requirements for [target sector] IACS, and which standard parts (2-1, 3-2, 3-3) yield the highest compliance gaps?

*Hypothesis:* Policy and governance parts (62443-2-1) will show lower maturity than technical system requirements (62443-3-3) in organizations without a dedicated OT security program.

### SRQ 2 — Security Level determination
How should Security Level Targets (SL-T) be determined for zones in a representative industrial automation architecture using the IEC 62443 threat model?

*Variables:*
- Threat actor: misuse type, means, resources, knowledge, motivation
- Consequence: safety, production, environmental, financial

### SRQ 3 — Risk assessment integration
How does a risk-based approach (IEC 62443-3-2) compare to checklist-only compliance assessment in identifying actionable remediation priorities?

*Metrics:*
- Number of critical risks identified
- Practitioner-rated usefulness (Likert 1–5)
- Time to complete assessment

### SRQ 4 — Tool effectiveness (if validating the web app)
Does a structured web-based assessment tool improve consistency and completeness of IEC 62443 evaluations compared to manual spreadsheet methods?

*Evaluation criteria:*
- Completeness (% questions answered)
- Inter-rater reliability (Cohen's kappa between two assessors)
- User satisfaction (SUS score optional)

### SRQ 5 — Implementation barriers
What organizational and technical barriers prevent full IEC 62443 adoption in industrial automation settings?

*Expected themes (from literature):*
- Legacy PLCs without patching path
- Production downtime constraints
- Skills gap (OT vs IT security)
- Vendor responsibility ambiguity (62443-2-4)

---

## Operational definitions

| Term | Definition |
|------|------------|
| **IACS** | Industrial Automation and Control Systems (IEC 62443 scope) |
| **SL-T** | Security Level Target — required protection for a zone/conduit |
| **SL-A** | Security Level Achieved — demonstrated capability |
| **Zone** | Grouping of assets with common security requirements |
| **Conduit** | Communication path between zones |
| **Compliance gap** | Requirement not met or only partially met |
| **Maturity score** | % of requirements marked "Yes" or "Partial" weighted |

---

## Measurable outcomes for thesis

1. Compliance maturity score per IEC 62443 part (%)
2. SL-T assignment table for ?3 zones
3. Prioritized risk register (?10 entries)
4. Gap remediation roadmap (short / medium / long term)
5. Tool validation metrics (if applicable)
