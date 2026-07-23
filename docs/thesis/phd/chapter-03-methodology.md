# Chapter 3 — Research Methodology

## 3.1 Research philosophy

This dissertation adopts **pragmatism** as philosophical foundation: the value of the research lies in solving a practical OT security assessment problem while producing generalizable design knowledge (Goldkuhl & Cronholm, 2010). The inquiry follows **Design Science Research (DSR)** as defined by Hevner et al. (2004) and Gregor & Hevner (2013), wherein an artifact (the assessment platform) is created to address identified organizational needs, rigorously evaluated, and communicated to both research and practitioner communities.

## 3.2 Design Science Research cycles

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 1. Problem      │────▶│ 2. Design &     │────▶│ 3. Demonstration│
│ Identification  │     │ Development     │     │ (Case study)    │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
         ▲                                                  │
         │                ┌─────────────────┐               │
         └────────────────│ 5. Communication│◀──────────────┤
                          │ (Thesis, paper) │               │
                          └────────▲────────┘               │
                                   │                          │
                          ┌────────┴────────┐               │
                          │ 4. Evaluation   │◀──────────────┘
                          │ (Metrics, κ)    │
                          └─────────────────┘
```

### Cycle 1 — Problem identification
Literature review of IEC 62443, SANS practitioner guides, and IIoT vulnerability studies revealed absence of integrated open tooling combining 62443-3-2 risk process with compliance checklists.

### Cycle 2 — Design & development
Requirements derived from `_IEC 62443__.xlsx` (107 questions), 62443-3-2 zone/SL workflow, and interview feedback from OT engineers (planned n=5).

### Cycle 3 — Demonstration
Embedded case study at anonymized automotive supplier Assembly Line 2.

### Cycle 4 — Evaluation
Quantitative: maturity %, SL gaps, risk scores. Qualitative: interview themes. Reliability: dual assessor κ on 20-question subset.

### Cycle 5 — Communication
Thesis, journal manuscript, open repository, Zenodo archive.

## 3.3 Case study design

Following Yin (2018), a **single embedded case** with multiple units of analysis (zones, compliance parts, risks) enables depth appropriate for DSR while acknowledging generalizability limits.

**Case selection criteria:**
- Representative Purdue architecture (Levels 2–5 present)
- Brownfield OT with legacy and modern assets
- Organizational access for documentation review
- Ethics approval and anonymization agreement

**System Under Consideration (SuC):** Assembly Line 2 — body welding and assembly cells, MES integration, vendor remote support, safety PLCs.

## 3.4 Assessment protocol

| Step | Activity | IEC 62443 reference | Artifact module |
|------|----------|---------------------|-----------------|
| 1 | Define SuC boundary | 62443-3-2 Cl. 5 | Dashboard |
| 2 | Initial risk identification | 62443-3-2 Cl. 6 | Risk Register |
| 3 | Zone/conduit partitioning | 62443-3-2 Cl. 7 | Zones |
| 4 | SL-T determination | 62443-3-2 Cl. 8 | SL Calculator |
| 5 | Compliance assessment | 62443-2-1, 3-3 | Compliance |
| 6 | SL-A gap analysis | 62443-3-2 | Zones |
| 7 | Report & roadmap | 62443-2-1 | Reports |

**Duration:** 4 weeks (1 FTE assessor + OT SME interviews).

## 3.5 Metrics and scoring

### Compliance maturity

$$M_{part} = \frac{\sum_{i=1}^{n}(y_i + 0.5 \cdot p_i)}{n} \times 100$$

Where $y_i = 1$ if question $i$ answered Yes, $p_i = 1$ if Partial, else 0. N/A excluded from denominator.

### Risk score

$$R = L \times I, \quad L,I \in [1,5]$$

Priority bands: Critical (15–25), High (8–14), Medium (4–7), Low (1–3).

### SL gap

$$\Delta SL = SL\text{-}T - SL\text{-}A$$

Positive gap indicates remediation required per 62443-3-2 verification guidance.

## 3.6 Data collection instruments

1. Web application (localStorage + JSON export)
2. Semi-structured interview guide (5 themes: barriers, tools, zones, patching, governance)
3. Architecture diagrams (provided by site, redrawn anonymized)
4. Document review: policies, patch records, vendor contracts

## 3.7 Validity and reliability

| Criterion | Threat | Mitigation |
|-----------|--------|------------|
| Construct validity | Questions misaligned to standard | Traceability matrix Excel → JSON |
| Internal validity | Assessor bias | Dual coding on 20 questions (κ) |
| External validity | Single site | Analytic generalization to similar manufacturing |
| Reliability | Inconsistent scoring | Written rubric in compliance module tooltips |

## 3.8 Ethics

- Institutional ethics approval obtained *[insert reference number]*
- Site anonymization: no IP addresses, product names, or geolocation
- No active scanning or exploitation of production networks
- Right to withdraw; data stored encrypted, export controlled

## 3.9 Role of the researcher

The researcher acted as primary assessor and artifact developer, declaring reflexivity regarding design choices. Independent OT engineer validation planned for SRQ 4.

---

*Insert ethics approval number and interview schedule when available.*
