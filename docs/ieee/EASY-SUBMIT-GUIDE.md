# Easy IEEE Submit Guide (After EDAS Account)

You completed Step 1. Follow this exactly — no shortcuts on reading the final PDF.

---

## Part A — Today (2–3 hours): Get your PDF

### Option 1: Overleaf (recommended — easiest)

1. Open https://www.overleaf.com → Sign up (free)
2. Click **New Project** → **Example Project** → search **IEEE Conference Template**
3. Open the new project
4. Delete the sample `conference_101719.tex` content
5. Copy-paste entire content from your repo file:
   - `docs/ieee/paper-icsci-2026.tex` → main `.tex` file
6. Upload these files to the same Overleaf project (Upload icon):
   - `docs/ieee/references.bib`
   - `docs/ieee/figures/maturity-by-part.pdf`
7. In the `.tex` file, change lines 17–21:

```latex
\author{
\IEEEauthorblockN{Your Real Name}
\IEEEauthorblockA{\textit{Independent Researcher} \\
Email: your.real.email@gmail.com}
}
```

(Remove ORCID line if you don't have one yet — optional.)

8. Uncomment the figure block — add after `\section{Artifact Design}`:

```latex
\begin{figure}[!t]
\centering
\includegraphics[width=\linewidth]{maturity-by-part.pdf}
\caption{Compliance maturity by IEC 62443 part (case study, n=107 questions).}
\label{fig:maturity}
\end{figure}
```

9. Click **Recompile** → **Download PDF**

**Done.** You have an IEEE-format PDF.

---

### Option 2: No LaTeX — Word + IEEE template

1. Download Word template: https://www.ieee.org/conferences/publishing/templates.html
2. Copy section text from `docs/ieee/paper-icsci-2026.tex` (ignore `\begin`, `\cite` — write references manually)
3. Insert image `docs/ieee/figures/maturity-by-part.png`
4. Save as PDF

---

## Part B — Tomorrow (1 hour): Make it YOUR paper (this is the safe part)

Read the PDF once. Change **at least 5 sentences** in your own words in:
- Introduction (why YOU care about OT security)
- Discussion (what YOU observed in industry)

Add **one sentence** only you can say, for example:
> *"Based on [X] years in [manufacturing/IT/security], the dominant gap observed was vendor remote access to DMZ jump hosts."*

That personal line is what makes the paper defensible — not hiding tools.

---

## Part C — Aug 10–15: Submit on EDAS (click path)

1. Go to https://edas.info/N35547  
   (Or: edas.info → login → find **ICSCI 2026** / MILCOM 2026 workshop)

2. Click **Submit paper** / **New submission**

3. Fill in:

| Field | Copy this |
|-------|-----------|
| **Title** | An Open IEC 62443 Assessment Framework for Manufacturing IACS: Design and Empirical Case Study |
| **Abstract** | Copy from your PDF abstract (same words) |
| **Keywords** | IEC 62443, IACS, ICS security, OT security, risk assessment, security level |
| **Topic** | ICS/OT security / assessment (pick closest option) |

4. **Upload PDF** (must be PDF, not Word)

5. Confirm author name + email match EDAS profile

6. Click **Submit** before **August 16, 2026**

7. Screenshot the confirmation page (submission ID)

---

## Part D — "Sure shot" tips (real acceptance factors)

These actually help — not tricks:

| Do this | Why reviewers accept |
|---------|---------------------|
| Submit to **ICSCI** (ICS workshop) | Perfect topic fit |
| Include **Table I + Figure 1** (maturity chart) | Shows real evaluation |
| Keep **49.1%, 43.6%, 4 critical risks** — your real numbers | Credible results |
| State **limitations** (single site) | Shows honesty |
| Cite **12+ real papers** (expand references.bib) | Shows literature knowledge |
| **Read entire PDF** before submit | You can answer reviewer questions |

IEEE does **not** check whether you used Overleaf, Cursor, or spell-check. They check if the **work is valid and yours to defend**.

---

## Part E — What NOT to do

| Avoid | Why |
|-------|-----|
| Submit without reading | Cannot answer reviewers |
| Fake references | Automatic reject / ethics issue |
| Change numbers randomly | Conflicts with your GitHub tool |
| Submit same paper to 2 IEEE venues at once | Double submission violation |
| Claim IEC certification | Inaccurate — you offer self-assessment |

---

## Your checklist (print this)

```
[ ] Overleaf PDF downloaded
[ ] Name + email updated in paper
[ ] Figure maturity-by-part included
[ ] Read full PDF once
[ ] Changed 5+ sentences to my voice
[ ] Added 1 personal industry sentence
[ ] Plagiarism check (Grammarly/similarity — optional but good)
[ ] EDAS upload before Aug 16, 2026
[ ] Screenshot submission confirmation
```

---

## If stuck

| Problem | Fix |
|---------|-----|
| Overleaf won't compile | Use IEEE example project template, paste our tex content |
| Missing IEEEtran | Overleaf includes it automatically |
| EDAS can't find workshop | Search "ICSCI" or "MILCOM 2026" on edas.info |
| PDF too long | Paper is ~5 pages — OK for workshop |

---

## After submit

- **Sep 13, 2026** — check EDAS email for decision  
- If **accept** → camera-ready Sep 20 + prepare 15-min talk  
- If **reject** → read reviews, fix, submit to IEEE ICIT/ICPS 2027  

You only need **one accept** for your goal.
