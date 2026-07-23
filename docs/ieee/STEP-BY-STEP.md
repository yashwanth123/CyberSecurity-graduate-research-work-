# IEEE Paper — Step-by-Step Guide

**Goal:** Publish **1 IEEE Xplore paper** from your IEC 62443 project.  
**Your profile:** MSCS, independent researcher, tool + case study ready.  
**Today's date context:** July 23, 2026.

---

## Recommended first target (best fit + deadline open)

| Item | Detail |
|------|--------|
| **Venue** | **ICSCI 2026** — 2nd IEEE MILCOM Workshop on Industrial Control Systems and Critical Infrastructure Security |
| **Why it fits** | ICS/SCADA/OT focus; accepts assessment methods, supply chain, OT integration |
| **Deadline** | **August 16, 2026** (~3 weeks) |
| **Length** | Typically 6 pages IEEE two-column (confirm on workshop site) |
| **Submit at** | https://edas.info/N35547 |
| **Workshop date** | October 15, 2026, Rockville, MD |
| **Proceedings** | IEEE (MILCOM workshop track) |

**Backup target:** IEEE RISC 2026 Round 2 — deadline **August 15, 2026** (critical systems) — https://easychair.org/conferences/?conf=ieeerisc2026

---

## 8-step roadmap

### Step 1 — Claim authorship (Day 1, 2 hours)

- [ ] Edit `CITATION.cff` with your real name and email
- [ ] Decide author list: **you solo** or + co-author (industry colleague?)
- [ ] Create **ORCID** if you don't have one: https://orcid.org
- [ ] Register **EDAS** account: https://edas.info

**Output:** Author name consistent everywhere.

---

### Step 2 — Use the IEEE paper draft (Day 1–2, 4 hours)

We prepared a LaTeX draft:

```
docs/ieee/paper-icsci-2026.tex
docs/ieee/references.bib
```

**Option A — Overleaf (easiest)**

1. Go to https://www.overleaf.com
2. New Project → Upload Project
3. Upload `paper-icsci-2026.tex`, `references.bib`, and download **IEEEtran** template from IEEE
4. Compile → PDF

**Option B — Local LaTeX**

```bash
cd docs/ieee
pdflatex paper-icsci-2026.tex
bibtex paper-icsci-2026
pdflatex paper-icsci-2026.tex
pdflatex paper-icsci-2026.tex
```

**Your job:** Read every paragraph. Rewrite any sentence you can't defend in an interview. Add your email/affiliation.

---

### Step 3 — Add figures (Day 3–4, 4 hours)

Minimum **2 figures** for acceptance odds:

| Figure | Source |
|--------|--------|
| **Fig. 1** Architecture diagram | Export from `docs/thesis/phd/chapter-04-artifact.md` or draw in draw.io |
| **Fig. 2** Maturity by part (bar chart) | Data from `case-study-statistics.json` |
| **Fig. 3** (optional) Risk heat map | Screenshot from web app Risks page |

Save as PDF/PNG in `docs/ieee/figures/`. Uncomment `\includegraphics` lines in `.tex`.

---

### Step 4 — Strengthen Related Work (Day 5–7, 6 hours)

Read and cite **至少 12–15** papers:

**From your repo (read abstracts + key sections):**

- SANS IEC 62443 guide (practitioner)
- 62443-3-2 PDF (methodology)
- VTT-R-01428-18 (empirical OT risk)
- IIoT + 62443 vulnerability paper in repo

**From IEEE Xplore (search terms):**

- `"IEC 62443" AND assessment`
- `"IACS" AND "security level"`
- `"OT security" AND manufacturing`

Replace `[Author]` placeholders in `references.bib` with real BibTeX from IEEE Xplore.

---

### Step 5 — Verify all numbers (Day 8, 2 hours)

All results must match your tool export:

```bash
python scripts/generate_sample_case_study.py
cat docs/thesis/phd/case-study-statistics.json
```

| Claim in paper | Must match |
|----------------|------------|
| Overall maturity 49.1% | ✓ |
| System 43.6% | ✓ |
| 2 SL gaps | ✓ |
| 4 critical risks | ✓ |
| 107 questions | ✓ |

Load sample in web app → spot-check before submission.

---

### Step 6 — IEEE compliance check (Day 9, 2 hours)

- [ ] **IEEE two-column template** used
- [ ] Page limit (6 pages + refs, confirm ICSCI CFP)
- [ ] Abstract ≤ 250 words
- [ ] Keywords included
- [ ] No plagiarism — run through **iThenticate** or university tool if available
- [ ] All acronyms defined (IACS, SL-T, OT, etc.)
- [ ] **Self-citation** to your GitHub/Zenodo is OK — use footnote or repository URL

Use checklist: [SUBMISSION-CHECKLIST.md](./SUBMISSION-CHECKLIST.md)

---

### Step 7 — Submit on EDAS (Day 10, 1 hour)

1. Open https://edas.info/N35547
2. Login / register
3. Select **ICSCI 2026** workshop
4. Upload PDF
5. Enter title, abstract, keywords, authors
6. Submit before **August 16, 2026 AoE** (Anywhere on Earth)

**Suggested title:**

> *An Open IEC 62443 Assessment Framework for Manufacturing IACS: Design and Empirical Case Study*

**Keywords:** IEC 62443, ICS security, OT security, IACS, security level, risk assessment

---

### Step 8 — After acceptance (Sep–Oct 2026)

- [ ] Camera-ready by **September 20, 2026**
- [ ] Sign **IEEE copyright form**
- [ ] Register for MILCOM 2026 / workshop attendance (in-person or virtual — check site)
- [ ] Prepare **15-min presentation** — use `docs/industry/demo-script.md`
- [ ] Upload code + DOI to Zenodo — cite in camera-ready footnote

---

## Timeline (starting July 23, 2026)

| Date | Task |
|------|------|
| Jul 23–25 | Steps 1–2: Author setup + edit LaTeX draft |
| Jul 26–29 | Steps 3–4: Figures + related work |
| Jul 30–Aug 2 | Step 5–6: Verify data + compliance |
| Aug 3–10 | Full read-through + colleague review |
| **Aug 11–15** | Final PDF polish |
| **Aug 16** | **SUBMIT ICSCI** |
| Aug 15 | (Optional backup) Submit IEEE RISC Round 2 |
| Sep 13 | Acceptance notification |
| Sep 20 | Camera-ready due |
| Oct 15 | Present at workshop |

---

## If ICSCI rejects — Plan B (still IEEE)

| Venue | When to target |
|-------|----------------|
| IEEE ICIT 2027 (T8 Cybersecurity track) | CFP ~Oct 2026 |
| IEEE ICPS 2027 (Security & Trust) | CFP ~Feb 2027 |
| IEEE CSR 2027 workshop (IOSEC) | CFP ~Mar 2027 |
| MILCOM 2027 ICSCI again | ~Aug 2027 |

One rejection is normal. Revise reviewer comments → resubmit next CFP.

---

## What makes YOUR paper IEEE-quality

Reviewers want:

1. **Clear problem** — IEC 62443 hard to operationalize ✓  
2. **Novel artifact** — open integrated tool ✓  
3. **Evaluation** — case study with numbers ✓  
4. **Reproducibility** — GitHub + JSON export ✓  
5. **Honest limitations** — single site, manual SL-A ✓  

You already have 1–4. The LaTeX draft adds 5.

---

## Files in this folder

| File | Purpose |
|------|---------|
| [paper-icsci-2026.tex](./paper-icsci-2026.tex) | Main IEEE LaTeX paper |
| [references.bib](./references.bib) | Bibliography |
| [SUBMISSION-CHECKLIST.md](./SUBMISSION-CHECKLIST.md) | Pre-flight checks |
| [target-venues.md](./target-venues.md) | Venue comparison table |
| [cover-letter-template.txt](./cover-letter-template.txt) | Optional note to chairs |

---

## Need help?

Ask for review of **your edited** abstract or §Evaluation before Aug 10 — paste your version, not the raw draft.

**Do not submit unedited AI/LaTeX draft without reading.** IEEE reviewers are OT/security experts.
