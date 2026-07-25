# Truth & Scope — What This Project Actually Is

Read this before reviewing the paper, demo, or live web app. Written for advisors, reviewers, and collaborators.

---

## One paragraph (use in emails)

> We built a **real open-source IEC 62443 assessment platform** (107 standard-mapped questions, SL calculator, zones/conduits, risk register, export pipeline). The **IEEE paper evaluates it using a structured pilot manufacturing scenario** — a documented reference architecture and reproducible JSON dataset — **not an on-site audit of live PLCs or a physical lab**. All reported metrics (49.1% maturity, SL gaps, critical risks) are **correctly computed by the tool** from that pilot input. Field validation at an operating facility is listed as future work.

---

## What IS true

| Claim | Evidence |
|-------|----------|
| Open-source web assessment tool | `webapp/` — React app, Docker, GitHub Pages |
| 107 IEC 62443–mapped questions | Extracted from `_IEC 62443__.xlsx` → `iec62443.json` |
| Maturity, SL gaps, risk scores | Formulas in `webapp/src/lib/types.ts`, `report.ts` |
| Reproducible pipeline | Python scripts + JSON export |
| CSUCI research direction | Acknowledged in paper; faculty guidance |
| Pilot case study in paper | Explicit in abstract, methodology, limitations |

---

## What is NOT true (do not claim)

| Do not say | Why |
|------------|-----|
| "We audited a real automotive plant" | No on-site facility assessment was performed |
| "We connected to live Siemens PLCs" | PLCs exist only in the **modeled** Level 2 zone |
| "Network simulation / PLC emulation was used" | No GNS3, Factory I/O, or hardware-in-the-loop |
| "Numbers are from plant telemetry" | Compliance answers in the sample are **structured illustrative inputs** |

---

## What "structured pilot manufacturing scenario" means

1. **Reference architecture (SuC):** Purdue-style zones (Enterprise → MES → DMZ → Operations → Control) with typical assets (4× Siemens S7-1500 PLCs, HMIs, historian, MES, vendor jump server).

2. **Structured assessment dataset:** File `webapp/public/sample-assessment.json` containing:
   - 107 compliance responses (Yes/Partial/No + evidence notes)
   - 5 zones with SL-T and SL-Achieved
   - 10 risks with likelihood, impact, mitigations

3. **How sample compliance answers were created:** Script `scripts/generate_sample_case_study.py` uses `random.seed(42)` and brownfield-like weights (e.g., System part weaker than Policies). Zones and risks were **authored** to reflect common OT weaknesses from literature and practice.

4. **Tool evaluation:** Load sample → app computes dashboard metrics → export JSON/CSV/PDF.

---

## Real vs illustrative (quick table)

| Component | Real | Illustrative |
|-----------|------|--------------|
| Tool & code | ✓ | |
| IEC question mapping | ✓ | |
| Math / formulas | ✓ | |
| Compliance answers in sample | | ✓ |
| Zone SL-Achieved in sample | | ✓ (analytical) |
| Risk entries in sample | | ✓ (scenario-based) |
| Organization name in sample | | ✓ (fictional) |

---

## How to review the live demo (3 minutes)

**URL:** https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/#/

1. Open link → click **Reports** (left sidebar)
2. Click **Load Sample Case Study** (yellow button)
3. Visit **Dashboard**, **Zones & Conduits**, **Risk Register**

Or from Dashboard: use the **Load pilot case study** banner if the project is empty.

---

## How a REAL assessment would work

1. OT assessor + SME walk the facility (or review configs remotely)
2. Answer each of 107 questions from **observed** controls
3. Define zones from **actual** network diagrams
4. Set SL-A from **verified** configurations
5. Register risks from **known** issues
6. Export JSON from Reports → audit evidence / thesis data

That replaces the pilot JSON with **operational** inputs. The tool stays the same.

---

## Paper alignment

The submitted IEEE paper states:
- "pilot case study"
- "structured representative manufacturing scenario"
- "developed at California State University Channel Islands"
- Limitations: not live plant; SL-A analytical; field validation future work

This document matches the paper. If the sample dataset is replaced with real assessor input, update the paper accordingly.

---

## Questions advisors often ask

**Q: Are the 49.1% numbers fake?**  
A: The **math is real**. The **inputs** for the pilot are illustrative, not from a live plant.

**Q: Where are the PLCs?**  
A: In the **Level 2 — Control** zone of the **reference model**, not on a lab bench.

**Q: Can this support a PhD?**  
A: Yes as **artifact + methodology** research. Stronger with a **multi-site or live validation** study next.

**Q: Is the GitHub Pages demo the same as the paper?**  
A: Yes — same tool, same sample file, same computed results.

---

## Related docs

- [System design](./architecture/SYSTEM-DESIGN.md)
- [Web app run guide](../webapp/README.md)
- [Demo script](./industry/demo-script.md)
- [IEEE truth guide](./ieee/TRUTH-GUIDE.md)
