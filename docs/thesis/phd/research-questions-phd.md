# PhD Research Questions & Contributions

## Primary Research Question (PRQ)

**How can a design-science approach produce and validate an integrated assessment artifact that enables industrial organizations to systematically evaluate, prioritize, and improve IACS cybersecurity posture in conformance with IEC 62443?**

---

## Secondary Research Questions

### SRQ 1 — Theoretical grounding
What IEC 62443 requirements are most critical for manufacturing IACS, and how do compliance gaps distribute across standard parts (General, Policies, System, Component)?

**Hypothesis H1:** Organizations without a mature IACS Security Management System (62443-2-1) exhibit lower maturity in Policies and Procedures than in General terminology/concept areas.

**Validation:** Compare maturity scores across parts; case study result — Policies 55.0% vs General 66.7% (H1 partially supported).

### SRQ 2 — Security Level engineering
How should SL-T be assigned and verified across Purdue-model zones in a representative industrial architecture, and where do SL-A gaps concentrate?

**Hypothesis H2:** DMZ and Operations zones (Levels 3–3.5) will show the largest SL-T vs SL-A gaps due to remote access and IT/OT integration exposure.

**Validation:** Zone table analysis — 2/5 zones with gaps at DMZ and Operations (H2 supported).

### SRQ 3 — Integrated assessment value
Does combining compliance maturity, SL-gap analysis, and risk registration identify different remediation priorities than compliance checklists alone?

**Hypothesis H3:** Risk register critical items (vendor access, patching) will not correlate 1:1 with lowest-scoring compliance parts, demonstrating complementary value.

**Validation:** System part lowest maturity (43.6%) but critical risks span DMZ, Control, and MES integration — integrated view required (H3 supported).

### SRQ 4 — Artifact utility (Design Science)
Does the web-based artifact improve assessment completeness and consistency versus manual spreadsheet methods?

**Hypothesis H4:** Assessors using the artifact achieve ≥90% question completion and inter-rater κ ≥ 0.6 on a 20-question subset.

**Validation:** Pilot protocol in methodology; *to be completed with second assessor at real site*.

### SRQ 5 — Adoption barriers
What technical and organizational barriers impede IEC 62443 adoption in manufacturing IACS?

**Expected themes:** Legacy PLCs, production downtime, OT/IT silos, vendor responsibility (62443-2-4), skills gap.

**Validation:** Semi-structured interviews (n≥5) — *schedule during field work*.

---

## PhD-level contributions

| # | Type | Contribution |
|---|------|--------------|
| C1 | **Artifact** | IEC 62443 Assessment Platform (open source) |
| C2 | **Methodology** | DSR-based integrated assessment procedure |
| C3 | **Empirical** | Manufacturing case study baseline (49.1% maturity) |
| C4 | **Knowledge** | Annotated corpus + automated requirement extraction |

---

## Propositions for viva examination

1. IEC 62443 compliance cannot be reduced to checkbox auditing without SL-T and risk context.
2. Open artifacts accelerate OT security research reproducibility.
3. Manufacturing IACS at mid-maturity exhibit System-part gaps before Component-part gaps.
4. Vendor remote access is a dominant critical risk independent of compliance percentage.

---

## Scope boundaries (PhD)

**In scope:** Manufacturing IACS, IEC 62443 parts 1–4 mapping, design + single case study, qualitative barriers.

**Out of scope:** Penetration testing, product certification, formal SL-A penetration verification, multi-country regulatory comparison.
