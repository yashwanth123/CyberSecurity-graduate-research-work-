# Chapter 1 — Introduction

## 1.1 Background and motivation

Industrial Automation and Control Systems (IACS) — encompassing programmable logic controllers (PLCs), distributed control systems (DCS), supervisory control and data acquisition (SCADA), human-machine interfaces (HMIs), and safety instrumented systems — form the operational backbone of modern manufacturing, energy generation, water treatment, and transport infrastructure. Unlike enterprise information technology (IT), IACS environments prioritize **availability**, **real-time determinism**, and **safety integrity** over confidentiality-centric security models (Stouffer et al., 2023). The Purdue Enterprise Reference Architecture (PERA) models hierarchical layers from field devices (Level 0) through enterprise resource planning (Level 5), illustrating how OT assets interconnect with IT systems at increasing risk exposure (Williams, 1994).

Three converging forces amplify IACS cyber risk. First, **IT/OT convergence** enables data-driven manufacturing (Industry 4.0) but extends attack surfaces previously isolated by air gaps. Second, **commoditized attack tooling** (e.g., ransomware, living-off-the-land techniques) now targets OT with documented incidents including production stoppages and safety near-misses. Third, **regulatory and supply-chain pressure** — including EU NIS2, sector-specific mandates, and customer security questionnaires — requires demonstrable OT security programs.

The IEC 62443 standard family, originating from ISA99 working groups, constitutes the authoritative international framework for IACS security. It defines terminology (62443-1-1), security management systems (62443-2-1), zones and conduits with Security Levels SL0–SL4 (62443-3-2, 62443-3-3), and component requirements (62443-4-1/4-2). Despite widespread reference in policy documents, practitioners report difficulty operationalizing 62443 in brownfield plants with legacy devices, limited patch windows, and ambiguous accountability between OT engineers, IT security, and system integrators.

## 1.2 Problem statement

Organizations face a **practice gap** between normative IEC 62443 documentation and repeatable on-site assessment capability. Spreadsheet-based checklists, ad hoc risk workshops, and IT-centric GRC platforms fail to integrate:

1. **Security Level Target (SL-T) determination** per zone/conduit;
2. **Initial risk assessment** linking threats, vulnerabilities, and consequences (62443-3-2);
3. **Traceable evidence** suitable for audit, thesis research, or regulatory inquiry.

Consequently, security investments may not align with highest OT consequences, and researchers lack reproducible datasets for comparative IACS security studies.

## 1.3 Research aim and objectives

**Aim:** To design, implement, and empirically validate an integrated IEC 62443 assessment framework for industrial automation environments using design science research.

**Objectives:**

| ID | Objective |
|----|-----------|
| O1 | Synthesize IEC 62443 literature and practitioner guidance into a structured knowledge base |
| O2 | Develop an open assessment artifact combining compliance, SL-T, zones, and risk modules |
| O3 | Define and apply a quantified maturity and SL-gap methodology |
| O4 | Validate the framework through a manufacturing IACS case study |
| O5 | Derive a prioritized remediation roadmap and adoption recommendations |

## 1.4 Research questions

See [research-questions-phd.md](./research-questions-phd.md). The primary research question asks how design science can produce and validate an integrated assessment artifact for systematic IACS improvement aligned with IEC 62443.

## 1.5 Significance of the study

**Academic significance:** Contributes a reproducible DSR artifact, empirical baseline for manufacturing IACS, and explicit mapping between compliance metrics and risk outcomes — addressing calls for OT-specific security metrics in literature (Hahn & Kuhn, 2023).

**Industrial significance:** Provides deployable tooling (web application, exportable reports) enabling OT teams to conduct baseline assessments without proprietary GRC licenses, supporting IEC 62443-2-1 IACS Security Management System establishment.

## 1.6 Scope and limitations

- **Domain:** Manufacturing IACS (automotive supplier assembly line)
- **Standards:** IEC 62443 parts 1-x through 4-x (subset mapped via 107 questions)
- **Method:** Design Science Research + single embedded case study
- **Exclusions:** Active penetration testing, product certification, safety SIL analysis (IEC 61511)

## 1.7 Dissertation structure

| Chapter | Content |
|---------|---------|
| 2 | Literature review — IACS threats, IEC 62443, related frameworks |
| 3 | Research methodology — DSR cycles, case study protocol |
| 4 | Artifact design and implementation |
| 5 | Case study results and discussion |
| 6 | Conclusions, contributions, future work |

## 1.8 Publications and artifacts

- Open-source repository with curated PDF corpus and assessment web application
- Intended journal submission: *Computers & Security* (manuscript in `docs/thesis/paper/`)
- Zenodo DOI release for permanent citation

---

*Customize author affiliation, supervisor acknowledgements, and real site name after ethics approval.*
