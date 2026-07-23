# Roadmap — Get Credit & Industry Impact

This guide explains how to turn this repository into **recognized academic work** and a **usable industry tool**.

---

## Part A — Get credit for your work (Academic)

### 1. Complete your thesis (primary credit)

| Step | Action | Output |
|------|--------|--------|
| 1 | Finalize title & RQs in `docs/thesis/` | Approved proposal |
| 2 | Run web app on real case study | Exported JSON in `docs/thesis/data/` |
| 3 | Write Chapters 4–5 from tool results | Empirical evidence |
| 4 | Submit thesis | Degree credit |

Your thesis is the **strongest** form of credit. The web app is your **research artifact** (Design Science Research).

### 2. Make the repo citable

- [ ] Edit `CITATION.cff` — add your **real name** and **ORCID** ([orcid.org](https://orcid.org))
- [ ] Edit `LICENSE` — replace `[Your Name]`
- [ ] Add author line to root `README.md`
- [ ] Create a **GitHub Release** (v1.0.0) with tag — gives a permanent DOI-like version via Zenodo (optional)

### 3. Publish to Zenodo (recommended)

1. Link GitHub repo to [Zenodo](https://zenodo.org)
2. Create release `v1.0.0`
3. Zenodo assigns a **DOI** — cite this in papers and thesis

Example citation after Zenodo:
> Author (2026). *IEC 62443 Assessment Platform* (v1.0.0). Zenodo. https://doi.org/10.5281/zenodo.xxxxx

### 4. Write a conference or journal paper

| Venue type | Examples | Angle |
|------------|----------|-------|
| Conference | CIRED, ICS Cyber Security, IEEE ETFA | Case study + tool demo |
| Journal | Computers & Security, JICS | Full methodology + validation |
| Workshop | ACSAC, RAID industry track | Tool + preliminary results |

Use `docs/thesis/publication-strategy.md` for paper structure.

### 5. Present and defend

- Demo the web app in thesis defense
- Submit poster to university research day
- Present at local ISA/IEC or OT security meetup

### 6. Build your academic profile

- [ ] ORCID profile with thesis + repo linked
- [ ] Google Scholar profile (add thesis when published)
- [ ] LinkedIn: "Built open-source IEC 62443 assessment tool"
- [ ] ResearchGate: upload thesis + link repo

---

## Part B — Use in industry

### 1. Deploy the web app (free options)

| Option | Best for | Command / link |
|--------|----------|----------------|
| **GitHub Pages** | Public demo, portfolio | Enable Actions workflow in `.github/workflows/deploy-pages.yml` |
| **Internal nginx** | Plant/factory network | `npm run build` ? serve `webapp/dist/` |
| **Docker** | IT-managed rollout | (future) containerize static build |

Industry teams need a **URL they can bookmark** — deploy first, then pitch internally.

### 2. Run a pilot assessment

Follow `docs/industry/implementation-guide.md`:

1. Pick one line or site (limited scope)
2. Load sample case study ? customize
3. Complete compliance + zones + risks
4. Export PDF/JSON report for management
5. Present gap analysis with SL-T roadmap

### 3. Position for OT/security roles

| Role | How this project helps |
|------|------------------------|
| OT Security Engineer | Hands-on 62443 compliance experience |
| GRC / Compliance | Documented assessment methodology |
| ICS Consultant | Demo tool in client meetings |
| Graduate hire | Thesis + open source = differentiation |

Add to resume:
> Developed open-source IEC 62443 assessment platform with 107-question compliance module, SL-T calculator, and risk register; applied in [sector] case study achieving [X]% maturity baseline.

### 4. Certifications alignment

This work supports preparation for:
- **GICSP** (Global Industrial Cyber Security Professional)
- **IEC 62443** vendor training (SANS, ISA)
- **CISSP** (Domain 4, 13 overlap)

Document which FRs/SRs you implemented in case study notes.

### 5. Industry partnerships

- Offer **free baseline assessment** to a local utility/manufacturer (thesis case study)
- Contact **ISA/IEC 62443** working group affiliates for feedback
- Share tool with university OT security lab

---

## Part C — Make it better (priority order)

### High impact (do next)

| # | Improvement | Academic benefit | Industry benefit |
|---|-------------|------------------|------------------|
| 1 | **Your name in CITATION.cff + README** | Proper attribution | Professional credibility |
| 2 | **Real case study data** | Thesis Chapter 5 | Proof it works |
| 3 | **GitHub Pages live demo** | Link in paper/thesis | Share with employers |
| 4 | **PDF/print report** | Thesis appendix | Audit evidence |
| 5 | **Zenodo DOI** | Citable forever | Trust in citations |

### Medium impact

| # | Improvement | Notes |
|---|-------------|-------|
| 6 | NIST CSF / ISO 27001 mapping | Cross-framework value |
| 7 | Multi-project support | Several plants/sites |
| 8 | Docker + docker-compose | Easier plant deployment |
| 9 | User authentication (optional backend) | Enterprise multi-user |
| 10 | Video demo (3 min) | LinkedIn + defense |

### Long term

- Passive OT asset discovery integration
- Automated SL-A verification from config exports
- Vendor questionnaire module (62443-2-4)
- Mobile-friendly field assessment mode

---

## 90-day action plan

### Days 1–30 — Foundation
- [ ] Personalize CITATION.cff, LICENSE, README author
- [ ] Deploy to GitHub Pages
- [ ] Complete 1 pilot assessment (even lab/testbed)
- [ ] Export report ? thesis data folder

### Days 31–60 — Academic
- [ ] Draft thesis Chapters 1–3
- [ ] Submit abstract to conference or university symposium
- [ ] Create Zenodo release + DOI

### Days 61–90 — Industry
- [ ] Share live demo link on LinkedIn
- [ ] Run assessment with 1 external stakeholder (anonymized)
- [ ] Write 4-page case study summary for industry audience
- [ ] Apply to relevant internships/jobs citing the project

---

## Quick links

- Thesis docs: [`docs/thesis/`](thesis/)
- Industry guide: [`docs/industry/implementation-guide.md`](industry/implementation-guide.md)
- Publication strategy: [`docs/thesis/publication-strategy.md`](thesis/publication-strategy.md)
- Web app: [`webapp/`](../webapp/)
