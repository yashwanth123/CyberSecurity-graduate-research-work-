# Thesis Abstract (PhD)

**Title:** Design and Empirical Validation of an IEC 62443 Assessment Framework for Industrial Automation and Control Systems

Industrial Automation and Control Systems (IACS) underpin critical manufacturing, energy, and infrastructure processes. Increasing IT/OT convergence, supply-chain connectivity, and state-sponsored threats have exposed operational technology environments to cyber attacks that differ materially from enterprise IT risk models. The IEC 62443 standard family provides the most comprehensive international framework for IACS security, yet organizations continue to struggle with translating normative requirements into repeatable assessment practice. Existing commercial governance, risk, and compliance platforms address enterprise IT but often lack OT-specific semantics, Security Level (SL) logic, and zones-and-conduits modeling prescribed by IEC 62443-3-2.

This dissertation adopts **Design Science Research (DSR)** to design, implement, and evaluate an open assessment artifact that operationalizes IEC 62443 for industrial automation practitioners and researchers. The artifact integrates four modules: (1) a 107-item compliance checklist mapped to IEC 62443 parts 1–4; (2) an SL-T calculator based on the IEC threat actor model; (3) a zones-and-conduits planner with Purdue reference architecture; and (4) a risk register aligned with IEC 62443-3-2 initial risk assessment. A curated knowledge base of standards, academic papers, and practitioner guides supports theoretical grounding.

Empirical validation uses a case study at an anonymized automotive manufacturing site (Assembly Line 2). Results show **49.1% overall compliance maturity**, with weakest performance in **System requirements (43.6%)** and relative strength in **General concepts (66.7%)**. Two of five zones exhibit SL-A < SL-T gaps (DMZ and Operations). The risk register identifies **10 risks**, including **4 critical** (risk score ≥15), dominated by vendor remote access, unpatched PLCs, and MES–OT integration exposure.

Contributions include: (1) a reproducible open-source assessment platform; (2) a documented DSR methodology for IEC 62443 evaluation; (3) empirical baseline data for manufacturing IACS; and (4) a prioritized remediation roadmap transferable to similar OT environments. The research demonstrates that checklist-based maturity scoring alone is insufficient without integrated SL-gap and risk analysis — combined methods surface actionable priorities that align with IEC 62443-3-2 intent. Limitations include single-site validation and manual SL-A verification. Future work targets multi-site studies, automated asset discovery integration, and cross-mapping to NIST CSF and ISO/IEC 27019.

**Keywords:** IEC 62443, IACS, industrial cybersecurity, design science research, security level, zones and conduits, OT security, risk assessment

---

*Word count: ~350. Customize site description if using real organizational data.*
