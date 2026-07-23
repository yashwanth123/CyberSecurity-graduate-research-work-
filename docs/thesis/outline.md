# Thesis Outline — IEC 62443 in Industrial Automation

## Abstract (150–300 words)

Summarize: (1) the OT/IACS security problem, (2) IEC 62443 as the chosen framework, (3) your research method (case study, tool validation, or comparative analysis), (4) key findings on compliance gaps and SL-T determination, (5) contribution of the web-based assessment tool.

---

## Chapter 1 — Introduction

### 1.1 Background
- Growth of IIoT and interconnected industrial systems
- Unique OT constraints: availability, safety, legacy protocols (Modbus, PROFINET, OPC UA)
- Regulatory and industry pressure (NIS2, NERC CIP, sector-specific mandates)

### 1.2 Problem Statement
- Organizations lack structured, repeatable methods to assess IEC 62443 compliance
- Gap between academic standards and shop-floor implementation

### 1.3 Research Objectives
- Evaluate IEC 62443 applicability in a defined industrial automation context
- Develop/validate a practical assessment methodology
- Identify common compliance gaps and remediation priorities

### 1.4 Research Questions
See [research-questions.md](./research-questions.md)

### 1.5 Scope and Limitations
- Scope: IACS in [manufacturing / energy / water / your sector]
- Limitations: no live penetration testing unless authorized; tool covers subset of 62443 parts

### 1.6 Thesis Structure
Brief roadmap of chapters 2–6

---

## Chapter 2 — Literature Review

### 2.1 Industrial Control Systems and IACS
- SCADA, DCS, PLCs, HMIs, safety systems
- Purdue model and IT/OT convergence

### 2.2 Threat Landscape for OT
- Stuxnet, TRISIS, Colonial Pipeline, ransomware on manufacturing
- Insider threat and supply chain risks

### 2.3 IEC 62443 Standard Family
- Part 1-x: General (terminology, metrics, roles, lifecycle)
- Part 2-x: Policies and procedures (IACS-SMS)
- Part 3-x: System requirements (zones, conduits, SRs, SLs)
- Part 4-x: Component requirements

### 2.4 Related Frameworks
- NIST CSF / SP 800-82
- ISO/IEC 27001 & 27019
- NIS2 Directive mapping

### 2.5 Prior Research
Use papers in this repo: CIRED 2019, VTT-R-01428-18, ResearchGate paper, IIoT vulnerability study

### 2.6 Research Gap
- Need for integrated assessment tooling aligned with 62443-3-2 risk process
- Limited empirical studies in [your target sector]

---

## Chapter 3 — Methodology

See [methodology.md](./methodology.md) for full detail.

### 3.1 Research Philosophy
- Pragmatism / design science (if building and evaluating the web tool)

### 3.2 Research Design
- Case study + artifact evaluation, or mixed methods

### 3.3 Data Collection
- Compliance questionnaire (107 items from Excel/repo)
- Interviews with OT engineers, CISO, plant managers
- Architecture documentation (zones/conduits diagrams)

### 3.4 Analysis Methods
- Maturity scoring per IEC 62443 part
- Gap analysis matrix
- Risk = f(threat, vulnerability, consequence) per 62443-3-2

### 3.5 Validity and Ethics
- Informed consent, anonymization, no disruption to production

---

## Chapter 4 — IEC 62443 Assessment Framework (Your Tool / Method)

### 4.1 Requirements Analysis
- Mapping Excel checklist to standard parts

### 4.2 Tool Architecture
- Reference `webapp/` modules: Compliance, SL Calculator, Risk Register, Zones

### 4.3 Security Level Determination Model
- SL-T based on threat actor profile (Sheet3 matrix)
- Foundational Requirements (FRs) mapping

### 4.4 Zones and Conduits Method
- Step-by-step zone identification for case study

---

## Chapter 5 — Results and Discussion

### 5.1 Case Study Description
- Industry sector, system boundaries, assets

### 5.2 Compliance Assessment Results
- Scores by part (General, Policies, System, Component)
- Top 10 gaps

### 5.3 Security Level Analysis
- Recommended SL-T per zone
- Gap between SL-T and SL-A (achieved)

### 5.4 Risk Register Findings
- Critical risks ranked

### 5.5 Discussion
- Compare findings with literature
- Practical barriers (legacy devices, vendor lock-in, patch windows)

---

## Chapter 6 — Conclusion and Future Work

### 6.1 Summary of Contributions
- Structured assessment method
- Empirical compliance data from case study
- Open-source web tool for practitioners

### 6.2 Recommendations for Industry
- Prioritized controls, governance, training

### 6.3 Future Work
- Integration with asset discovery (e.g., passive OT monitoring)
- Automated SL verification, ISO 27001 cross-mapping

---

## Appendices

- A: Full compliance questionnaire
- B: Interview guide
- C: Zone/conduit diagrams
- D: Web app user guide
- E: Raw assessment export (JSON)

## References

Use IEEE/APA format. Seed list in [literature-review.md](./literature-review.md).
