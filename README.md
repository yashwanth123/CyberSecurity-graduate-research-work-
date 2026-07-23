# IEC 62443 Industrial Cybersecurity Repository

Curated knowledge base and **practical toolkit** for IEC 62443 — the international framework for securing **Industrial Automation and Control Systems (IACS)**.

---

## Get credit & use in industry

See **[docs/ROADMAP.md](docs/ROADMAP.md)** for the full 90-day plan covering:

- Thesis completion and publication strategy
- Zenodo DOI and `CITATION.cff` for academic credit
- Industry deployment and pilot assessment guide
- Resume/portfolio positioning for OT security roles

| Track | Start here |
|-------|------------|
| **Academic** | [`docs/thesis/`](docs/thesis/) + [`publication-strategy.md`](docs/thesis/publication-strategy.md) |
| **Industry** | [`docs/industry/implementation-guide.md`](docs/industry/implementation-guide.md) |
| **Cite this repo** | [`CITATION.cff`](CITATION.cff) — add your name and ORCID |

---

## What's included

| Component | Description |
|-----------|-------------|
| [`docs/thesis/`](docs/thesis/) | Thesis outline, research questions, methodology, literature review |
| [`webapp/`](webapp/) | Web-based compliance, SL calculator, zones, and risk register |
| [`scripts/extract_requirements.py`](scripts/extract_requirements.py) | Excel → JSON data pipeline |

---

## Quick start — Web app

```bash
cd webapp && npm install && npm run dev
```

Open http://localhost:5173 — assess compliance, define zones, export reports for your thesis.

---

## Quick start — Thesis

1. Read [`docs/thesis/README.md`](docs/thesis/README.md)
2. Follow [`docs/thesis/outline.md`](docs/thesis/outline.md) for chapter structure
3. Use the web app to collect empirical data per [`docs/thesis/data-collection-plan.md`](docs/thesis/data-collection-plan.md)

---

## Repository contents

| File | Description |
|------|-------------|
| `62443-3-2.pdf` | IEC 62443-3-2: Risk assessment and system design |
| `IEC 62443 FOR SCADA AND INDUSTRIAL CONTROL SYSTEM SECURITY.pdf` | IEC 62443 applied to SCADA |
| `Risk_identification_ICS.pdf` | Cyber risk identification in industrial systems |
| `SANS-Managing-ICS-Security-IEC-62443.pdf` | SANS implementation guidance |
| `isa99intro-170925135612.pdf` | ISA99 introductory guide |
| `IEC 62443_slides(9_26).pptx` & `Presentation_Slides (1).pptx` | Framework summaries |
| `Questions_reference_document.pdf` | Training Q&A |
| `_IEC 62443__.xlsx` | Compliance matrix (source for web app) |
| Research papers | CIRED 2019, VTT, ResearchGate, IIoT vulnerability study |

---

## About IEC 62443

**IEC 62443** defines guidelines to secure industrial control systems and OT environments:

- Asset and threat identification
- Security risk assessment (62443-3-2)
- Security levels SL0–SL4
- Zones and conduits model
- Secure SDLC, governance, policies

---

## Use cases

- **Thesis / graduate research** — structured methodology + exportable data
- **ICS/OT security engineers** — compliance checklist and gap analysis
- **Trainers** — slides, questions, interactive assessment tool

---

## Acknowledgements

ISA/IEC 62443 working groups, SANS Institute, VTT Research Centre, academic and industrial contributors.
