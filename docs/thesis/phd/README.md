# PhD Research Package — IEC 62443 IACS Security

Doctoral-level materials for thesis, journal submission, and defense.

## Documents

| File | Purpose | Status |
|------|---------|--------|
| [abstract.md](./abstract.md) | Thesis abstract (350 words) | Draft ready |
| [research-questions-phd.md](./research-questions-phd.md) | PhD-level RQs and contributions | Draft ready |
| [chapter-01-introduction.md](./chapter-01-introduction.md) | Chapter 1 — Introduction | Draft ready |
| [chapter-03-methodology.md](./chapter-03-methodology.md) | Chapter 3 — Design Science Methodology | Draft ready |
| [chapter-04-artifact.md](./chapter-04-artifact.md) | Chapter 4 — Artifact Design & Implementation | Draft ready |
| [chapter-05-results.md](./chapter-05-results.md) | Chapter 5 — Case Study Results | Draft ready (data-driven) |
| [case-study-statistics.json](./case-study-statistics.json) | Computed metrics from pilot | Generated |
| [../paper/manuscript.md](../paper/manuscript.md) | Journal/conference paper (full) | Draft ready |
| [../paper/references.bib](../paper/references.bib) | BibTeX references | Draft ready |
| [../defense-outline.md](../defense-outline.md) | 45-min defense structure + demo script | Draft ready |

## Suggested PhD title

**Design and Empirical Validation of an IEC 62443 Assessment Framework for Industrial Automation and Control Systems**

Alternative:
**A Design Science Approach to Operationalizing IEC 62443 in Manufacturing IACS Environments**

## Original contributions (for proposal/defense)

1. **Artifact (C1):** Open, reproducible web-based assessment platform integrating compliance, SL-T, zones/conduits, and risk register aligned with IEC 62443-3-2.
2. **Methodology (C2):** Structured assessment procedure with quantified maturity model and SL-gap analysis validated through manufacturing case study.
3. **Empirical evidence (C3):** Documented baseline compliance (49.1% maturity), SL-T gaps in DMZ and Operations zones, and prioritized risk register (4 critical risks) for automotive supplier IACS.
4. **Knowledge base (C4):** Curated, annotated IEC 62443 resource corpus with automated Excel-to-tool data pipeline.

## Workflow

1. Customize `[Your Name]` placeholders in all documents
2. Replace "Example Automotive Supplier" with anonymized real site if available
3. Run `python scripts/generate_sample_case_study.py` after Excel updates
4. Load sample in web app → verify numbers match Chapter 5
5. Submit paper to target journal (see manuscript header)
6. Use defense outline for viva preparation

## Target venues (paper)

| Tier | Venue | Fit |
|------|-------|-----|
| Journal | *Computers & Security*, *JISA* | Full manuscript |
| Conference | IEEE ETFA, ICS Cyber Security | Condensed version |
| Workshop | ACSAC Industrial Control Systems | Tool + preliminary results |
