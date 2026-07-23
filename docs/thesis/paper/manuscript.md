# Journal Manuscript (Draft)

**Target journal:** *Computers & Security* (Elsevier)  
**Article type:** Full length research article  
**Suggested length:** 8,000–10,000 words (this draft ~5,500 — expand literature and evaluation)

---

## Title

**An Open IEC 62443 Assessment Framework for Industrial Automation: Design, Implementation, and Manufacturing Case Study**

## Authors

[Your First Name] [Your Last Name]¹, [Supervisor Name]¹

¹ [University], [Department], [Country]

Corresponding author: [email]

---

## Abstract

**Background:** Industrial Automation and Control Systems (IACS) require security approaches distinct from enterprise IT. IEC 62443 provides comprehensive guidance, yet organizations lack integrated, reproducible assessment methods combining compliance, Security Level (SL) analysis, and risk registration.

**Methods:** We apply Design Science Research to design and implement an open-source web assessment platform. The artifact integrates 107 IEC 62443-mapped questions, SL-T calculation, zones-and-conduits modeling, and a 5×5 risk register. Validation uses an embedded case study at an anonymized automotive manufacturing site.

**Results:** Overall compliance maturity was 49.1%, with System requirements lowest (43.6%). Two of five zones exhibited SL-A < SL-T gaps (DMZ, Operations). Ten risks were identified, including four critical (score ≥15), notably vendor remote access and MES–OT integration.

**Conclusions:** Integrated assessment surfaces remediation priorities not evident from compliance scores alone. The open artifact supports reproducible OT security research and practitioner baseline assessments.

**Keywords:** IEC 62443; IACS; industrial cybersecurity; design science; security level; OT risk assessment

---

## 1. Introduction

Cyber attacks against operational technology have transitioned from theoretical concern to production-impacting incidents. Manufacturing firms deploying Industry 4.0 architectures connect PLCs, historians, and MES systems to enterprise networks, eroding air-gap assumptions while preserving stringent availability requirements (Humphreys & Jacobs, 2023). Regulatory frameworks including EU NIS2 increasingly expect demonstrable OT security programs.

IEC 62443, developed by ISA99 and adopted internationally, defines lifecycle, organizational, system, and component requirements for IACS security. Part 3-2 specifies risk assessment, zone/conduit partitioning, and SL-T determination; Part 2-1 defines the IACS Security Management System (IACS-SMS). Despite adoption in standards references, **operationalization gaps** persist: practitioners rely on spreadsheets, generic GRC tools, or consultant-delivered assessments with limited reproducibility.

**Research gap:** No open, integrated tool maps Excel-derived IEC 62443 checklists to SL-gap and risk workflows with exportable research-grade datasets.

**Contributions:**
1. Open assessment artifact (MIT license, CITATION.cff)
2. DSR methodology for IEC 62443 evaluation
3. Empirical manufacturing baseline (49.1% maturity, 4 critical risks)
4. Automated Excel→JSON requirement pipeline

---

## 2. Related work

### 2.1 IACS security frameworks
NIST SP 800-82 Rev. 3 guides ICS security controls but lacks SL-T semantics native to IEC 62443 (Stouffer et al., 2023). ISO/IEC 27019 addresses process control for IT-dependent systems but does not replace 62443 for OT component requirements.

### 2.2 IEC 62443 application studies
Prior work includes IIoT vulnerability assessment aligned with 62443 (Author et al., 2020), energy sector CIRED analyses, and VTT industrial risk reports. These provide sector insights but rarely ship reusable artifacts.

### 2.3 Security assessment tools
Commercial OT visibility platforms (Claroty, Dragos, Nozomi) focus on asset discovery and anomaly detection, not normative 62443 compliance mapping. Academic tools often address IT risk or generic SCADA testbeds without 62443 traceability.

**Positioning:** Our artifact complements discovery tools by providing **normative assessment** and **audit evidence export**, filling a reproducibility niche for researchers.

---

## 3. Methodology

Design Science Research (Hevner et al., 2004) frames five cycles: problem identification, design, demonstration, evaluation, communication. Evaluation combines:

- **Descriptive metrics:** Maturity %, SL gaps, risk counts
- **Reliability:** Cohen's κ on 20-question dual assessment (planned)
- **Qualitative:** Semi-structured interviews on adoption barriers

Case study: single embedded unit (automotive Assembly Line 2), anonymized, 107 questions, 5 zones, 10 risks.

Maturity formula: $M = (Y + 0.5P)/n × 100$ for Yes ($Y$), Partial ($P$).

---

## 4. Artifact design

Four modules share localStorage-backed project state:

| Module | Function |
|--------|----------|
| Compliance | 107 questions, evidence notes, part filters |
| SL Calculator | Threat profile → SL-T 0–4 |
| Zones | Purdue template, SL-T/SL-A gaps |
| Risk Register | L×I scoring, heat map |

Technology: React, TypeScript, Vite, Tailwind. Deployment: Docker (nginx), GitHub Pages. Data extraction: Python/openpyxl from source Excel.

NIST CSF mapping cross-references IEC parts to Identify/Protect/Detect/Respond/Recover for industry audiences familiar with NIST.

---

## 5. Case study results

**Site:** Anonymized EU automotive tier-1 supplier, Assembly Line 2.

| Metric | Result |
|--------|--------|
| Overall maturity | 49.1% |
| Policies and Procedures | 55.0% |
| System | 43.6% |
| Component | 53.4% |
| SL gaps | 2/5 zones |
| Critical risks | 4/10 |

Critical risks: vendor jump server (score 20), engineering workstation USB exposure (16), unpatched PLCs (15), MES–OT integration (15).

**Key insight:** System part lowest maturity yet critical risks span multiple parts — integrated analysis essential.

---

## 6. Discussion

Results align with brownfield manufacturing profiles: governance initiated, technical verification immature. SL gaps concentrate at integration boundaries (DMZ, Operations), consistent with 62443-3-2 conduit emphasis.

**Implications for practitioners:** Prioritize vendor access controls and OT patch programs before component-level hardening on legacy assets.

**Implications for researchers:** Open JSON exports enable cross-site comparison studies.

**Limitations:** Single site; manual SL-A; assessor-developed tool bias; 107-question subset.

---

## 7. Conclusion and future work

We presented an open IEC 62443 assessment framework validated through manufacturing case study. Future work: multi-site validation, automated SL-A verification, passive asset import, ISO 27019 crosswalk.

**Data availability:** GitHub repository + Zenodo DOI upon release.

---

## References

See [references.bib](./references.bib). Expand with 30–40 references for journal submission.

---

## Supplementary material

- Appendix A: Question traceability matrix (107 items)
- Appendix B: Sample JSON export
- Appendix C: Interview guide
- Appendix D: NIST CSF mapping table

---

*Expand Section 2 with systematic literature review table before submission.*
