# Chapter 4 — Artifact Design and Implementation

## 4.1 Requirements engineering

Requirements were elicited from three sources: (1) IEC 62443 normative documents in the repository corpus; (2) the compliance matrix `_IEC 62443__.xlsx`; (3) practitioner workflows described in SANS Managing ICS Security (IEC 62443) guidance.

### Functional requirements

| ID | Requirement |
|----|-------------|
| FR-1 | Support 107 compliance questions with Yes/Partial/No/N/A and evidence notes |
| FR-2 | Compute maturity scores overall and by standard part |
| FR-3 | Model zones/conduits with SL-T and SL-A |
| FR-4 | Calculate SL-T from IEC threat actor characteristics |
| FR-5 | Maintain risk register with 5×5 scoring and heat map |
| FR-6 | Export JSON/CSV/printable reports for audit and research |
| FR-7 | Import/export project state for reproducibility |
| FR-8 | Map controls to NIST Cybersecurity Framework (CSF) |

### Non-functional requirements

| ID | Requirement |
|----|-------------|
| NFR-1 | Browser-based; no server required for sensitive OT data |
| NFR-2 | Deployable via static hosting or Docker |
| NFR-3 | Open source (MIT) with CITATION.cff |
| NFR-4 | Excel-to-JSON pipeline for maintainability |

## 4.2 Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    Presentation Layer                         │
│  React 18 + TypeScript + Tailwind CSS + React Router          │
│  Dashboard | Compliance | SL Calc | Zones | Risks | Reports  │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│                    Application Layer                            │
│  useProject hook | buildReport | importProjectData              │
│  computeMaturity | suggestSL | riskPriority                     │
└────────────────────────────┬─────────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────────┐
│                    Data Layer                                 │
│  iec62443.json (107 Q) | nist-csf-mapping.json | localStorage │
└──────────────────────────────────────────────────────────────┘
                             ▲
┌────────────────────────────┴─────────────────────────────────┐
│                    Extraction Pipeline                          │
│  scripts/extract_requirements.py ← _IEC 62443__.xlsx           │
│  scripts/generate_sample_case_study.py                         │
└──────────────────────────────────────────────────────────────┘
```

## 4.3 Module design

### 4.3.1 Compliance module
Questions grouped by IEC part with search/filter. Each response stored as `{ value, notes }` keyed by question ID (Q001–Q107). Maturity uses weighted partial credit (0.5) reflecting common audit practice for compensating controls.

### 4.3.2 SL Calculator
Implements threat characteristic matrix from Excel Sheet3 (misuse, means, resources, knowledge, motivation). Rule-based SL-T suggestion function maps profiles to SL 1–4, consistent with 62443-3-2 informal guidance.

### 4.3.3 Zones & Conduits
Supports manual zone creation and Purdue template import (Levels 0–5). Tracks conduit targets as textual references between zones. SL gap computed as SL-T minus SL-A.

### 4.3.4 Risk Register
Risk entries linked to zones; likelihood and impact on 1–5 scales produce $R = L \times I$ priority bands.

### 4.3.5 Reports & Framework Mapping
Aggregates modules into `AssessmentReport` JSON schema. Print stylesheet enables PDF export via browser. NIST CSF mapping page cross-references IEC parts to CSF functions (Identify, Protect, Detect, Respond, Recover).

## 4.4 Technology stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| UI | React 18 | Component reuse, ecosystem |
| Build | Vite 5 | Fast dev, static output |
| Styling | Tailwind CSS | Consistent industrial UI |
| Storage | localStorage | OT data locality |
| Deploy | nginx Docker / GitHub Pages | Industry-friendly |

## 4.5 Data schema

Project JSON schema version implicit v1.0:

```json
{
  "projectName": "string",
  "organization": "string",
  "assessor": "string",
  "sector": "string",
  "compliance": { "Q001": { "value": "yes|partial|no|na", "notes": "string" } },
  "zones": [{ "name": "string", "slTarget": 0-4, "slAchieved": 0-4 }],
  "risks": [{ "asset": "string", "likelihood": 1-5, "impact": 1-5 }]
}
```

## 4.6 Implementation status

| Component | Status |
|-----------|--------|
| 107-question compliance | Complete |
| SL calculator + matrix | Complete |
| Zones/conduits + Purdue template | Complete |
| Risk register + heat map | Complete |
| JSON/CSV/print export | Complete |
| Sample case study (full 107 Q) | Complete |
| NIST CSF mapping view | Complete |
| Docker deployment | Complete |
| Multi-user backend | Future work |

## 4.7 Repository location

Source: `webapp/` — build with `npm run build`; deploy `dist/` or Docker image.

---

*Include architecture diagram screenshot in final thesis from running application.*
