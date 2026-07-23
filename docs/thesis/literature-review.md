# Literature Review — Annotated Bibliography

Map each repository resource to thesis sections. Expand with external citations as you write.

---

## Core standards & guides

### ISA99 / IEC 62443 introduction
- **File:** `isa99intro-170925135612.pdf`
- **Use in:** Ch. 2.3 — history of ISA99, evolution to IEC 62443
- **Key points:** Terminology, SL concept origin, zones/conduits model

### IEC 62443 for SCADA
- **File:** `IEC 62443 FOR SCADA AND INDUSTRIAL CONTROL SYSTEM SECURITY.pdf`
- **Use in:** Ch. 2.1, 4.4 — SCADA-specific architecture
- **Key points:** Remote access risks, RTU/MTU security, telecontrol

### SANS — Managing ICS Security with IEC 62443
- **File:** `SANS-Managing-ICS-Security-IEC-62443.pdf`
- **Use in:** Ch. 2.3, 5.5, 6.2 — practitioner implementation
- **Key points:** Program structure, quick wins, maturity path

### Using ISA/IEC 62443 to improve control system security
- **File:** `using-isa-iec-62443-to-improve-control-system-security.pdf`
- **Use in:** Ch. 5 — real-world application narrative
- **Key points:** Before/after compliance, organizational change

---

## Risk assessment & system design

### IEC 62443-3-2 (Risk assessment and system design)
- **File:** `62443-3-2.pdf`
- **Use in:** Ch. 3, 4.3, 4.4 — **primary methodology reference**
- **Key points:** SuC definition, initial risk assessment, SL-T, verification

### Risk identification in ICS
- **File:** `Risk_identification_ICS.pdf`
- **Use in:** Ch. 2.2, 3.4 — threat/vulnerability taxonomy
- **Key points:** ICS-specific threat agents, consequence categories

### Vulnerability & risk assessment in IIoT (62443 compliance)
- **File:** `Vulnerability and security risk assessment in a IIoT environment in compliance with standard IEC 62443_CI.pdf`
- **Use in:** Ch. 2.5, 5 — academic methodology comparison
- **Key points:** IIoT attack surface, compliance mapping approach

---

## Research papers

### CIRED 2019
- **File:** `CIRED 2019 - 117.pdf`, `Conference paper 2019.pdf`
- **Use in:** Ch. 2.5 — energy sector / smart grid context
- **Key points:** Sector-specific SL considerations

### ResearchGate paper
- **File:** `paper_researchGate.pdf`
- **Use in:** Ch. 2.5 — compare findings with your case study

### VTT Technical Research Centre report
- **File:** `VTT-R-01428-18.pdf`
- **Use in:** Ch. 2.2, 2.5 — Nordic/European industrial cyber risk perspective
- **Key points:** National critical infrastructure, risk metrics

---

## Training & assessment materials

### Questions reference document
- **File:** `Questions_reference_document.pdf`
- **Use in:** Appendix A, Ch. 4.1 — validate questionnaire design

### Excel compliance matrix
- **File:** `_IEC 62443__.xlsx` ? `webapp/src/data/iec62443.json`
- **Use in:** Ch. 4.1 — 107 assessment questions across standard parts

### Presentation slides
- **Files:** `IEC 62443_slides(9_26).pptx`, `Presentation_Slides (1).pptx`
- **Use in:** Introduction presentations, thesis defense slides

---

## Suggested external citations to add

| Author / Body | Topic |
|---------------|-------|
| Stouffer et al. (NIST SP 800-82r3) | Guide to ICS security |
| ISO/IEC 27001:2022 | ISMS cross-mapping |
| EU NIS2 Directive | Regulatory context |
| Hahn et al. | Security metrics for ICS |
| Garrick & Kaplan | Risk assessment foundations |

---

## Thematic synthesis matrix

| Theme | Primary sources | Gap your thesis fills |
|-------|-----------------|----------------------|
| Standard overview | ISA intro, SANS, slides | — |
| Risk methodology | 62443-3-2, Risk_identification_ICS | Integrated tool + case data |
| IIoT / modern OT | Vulnerability IIoT paper | Sector-specific validation |
| Empirical evidence | CIRED, VTT, ResearchGate | Your case study results |
| Practitioner tools | Excel ? web app | Open, repeatable assessment |

---

## Writing tips

1. Start Ch. 2 with OT fundamentals before diving into 62443 parts.
2. Use a **comparison table** of 62443 vs NIST 800-82 vs ISO 27019.
3. End literature review with explicit **research gap** paragraph linking to your RQs.
4. Every claim about SL-T or zones should cite 62443-3-2 or 3-3.
