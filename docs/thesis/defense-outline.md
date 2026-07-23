# PhD Defense Outline (45 minutes)

## Structure

| Time | Section | Content |
|------|---------|---------|
| 0–3 min | Opening | Title, name, supervisors, agenda |
| 3–10 min | Motivation & problem | OT threats, 62443 practice gap, RQ |
| 10–18 min | Methodology | DSR cycles, case study, metrics |
| 18–28 min | Artifact demo | **Live web app demo** (see script below) |
| 28–38 min | Results | 49.1% maturity, SL gaps, 4 critical risks |
| 38–43 min | Contributions & future work | C1–C4, limitations |
| 43–45 min | Closing | Thank you; Q&A begins |

**Q&A:** 30–45 minutes (typical PhD viva)

---

## Slide outline (18–22 slides)

1. Title slide
2. Outline
3. IACS in manufacturing — why OT ≠ IT
4. Incident landscape (Stuxnet → ransomware)
5. IEC 62443 overview (parts map diagram)
6. Problem: practice gap
7. Research questions
8. DSR framework diagram
9. Artifact architecture
10. Compliance module screenshot
11. SL calculator + zones screenshot
12. Case study site (anonymized diagram)
13. Results — maturity by part (bar chart)
14. Results — SL gap table
15. Results — risk heat map
16. Integrated remediation roadmap
17. Contributions C1–C4
18. Limitations & future work
19. Publications & repository
20. Thank you / Questions

---

## Live demo script (8 minutes)

**Setup:** Browser on `Reports` → **Load Sample Case Study**

1. **Dashboard (1 min)** — Show project metadata, 49.1% maturity, 4 critical risks
2. **Zones (2 min)** — Purdue levels; highlight DMZ and Operations SL gaps
3. **Compliance (2 min)** — Filter "System" part; show partial/no with evidence notes
4. **Risks (2 min)** — Top critical: vendor jump server score 20; heat map
5. **Reports (1 min)** — Export JSON; Print/PDF preview; mention Zenodo DOI

**Backup:** Screenshots in `docs/industry/demo-screenshots/` if network fails

---

## Anticipated examiner questions

| Question | Response anchor |
|----------|-----------------|
| Why single case study? | DSR depth; analytic generalization; multi-site future work |
| How is SL-A verified? | Manual assessment; automation is future work; documented in limitations |
| Novelty vs commercial GRC? | Open, 62443-native SL/zones/risk integration, research reproducibility |
| Ethics? | Anonymization, no active testing, ethics approval [number] |
| Why 107 questions not full standard? | Excel corpus scope; pipeline extensible |
| Statistical significance? | Descriptive baseline; κ study planned for SRQ4 |

---

## Materials to bring

- [ ] Printed executive summary (Reports → Print)
- [ ] USB with JSON export + repository clone
- [ ] Laptop with offline build (`npm run preview`)
- [ ] Chapter 5 results tables

See also: [demo-script.md](../../industry/demo-script.md)
