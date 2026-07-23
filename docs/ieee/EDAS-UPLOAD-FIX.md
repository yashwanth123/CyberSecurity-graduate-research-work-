# EDAS Upload Failed — Fix These 4 Things

Your paper content is fine. EDAS rejected **formatting only**. Fix in Overleaf, re-download PDF, upload again.

---

## Fix 1 — Abstract must match EDAS exactly

In **`main.tex`**, find the abstract sentence:

**Change FROM:**
```latex
We validate the artifact through a case study at an anonymized
```

**Change TO:**
```latex
We validate the artifact through a pilot case study at an anonymized
```

**And change FROM:**
```latex
(risk score $\geq 15$)
```

**Change TO (use words — avoids ≥ symbol mismatch):**
```latex
(risk score at least 15)
```

**OR** edit abstract in **EDAS metadata** to remove the word `pilot` and match PDF — but tex fix is easier.

---

## Fix 2 — Add these lines at top of main.tex (after `\documentclass`)

**Replace line 1:**
```latex
\documentclass[conference]{IEEEtran}
```

**With:**
```latex
\documentclass[10pt,conference]{IEEEtran}
```

**Add right after `\IEEEoverridecommandlockouts`:**
```latex
\usepackage{newtxtext,newtxmath}
\usepackage{courier}
\setlength{\columnsep}{0.25in}
\IEEEsettopmargin{0.75in}
```

This fixes: **font**, **gutter**, **top margin**.

---

## Fix 3 — Use PNG figure (fixes Type 3 DejaVuSans error)

1. Download from GitHub: `docs/ieee/figures/maturity-by-part.png`  
   Or export from repo branch `cursor/thesis-and-webapp-848f`

2. Upload **`maturity-by-part.png`** to Overleaf `figures/` folder

3. **Change figure line FROM:**
```latex
\includegraphics[width=\linewidth]{figures/maturity-by-part.pdf}
```

**TO:**
```latex
\includegraphics[width=\linewidth]{figures/maturity-by-part.png}
```

---

## Fix 4 — Recompile and upload

1. Click **Recompile** twice in Overleaf  
2. **Download PDF**  
3. Upload same file to EDAS again  

---

## If font size still fails (11 pt error)

Add this **before** `\begin{document}`:

```latex
\makeatletter
\renewcommand{\normalsize}{%
   \@setfontsize\normalsize{11}{13.6}%
   \abovedisplayskip 10\p@ \@plus2\p@ \@minus5\p@
   \abovedisplayshortskip \z@ \@plus3\p@
   \belowdisplayshortskip 6\p@ \@plus3\p@ \@minus3\p@
   \belowdisplayskip \abovedisplayskip
   \let\@listi\@listI}
\normalsize
\makeatother
```

---

## Quick checklist

```
[ ] Abstract says "pilot case study"
[ ] Risk score says "at least 15" (not ≥ symbol)
[ ] newtxtext + columnsep 0.25in + IEEEsettopmargin 0.75in
[ ] Figure is PNG not PDF
[ ] Recompile → download → upload to EDAS
```

---

## EDAS abstract field

Make sure EDAS abstract text **exactly matches** PDF abstract (copy-paste from PDF after recompile).

Paste this in EDAS abstract box:

```
Industrial Automation and Control Systems (IACS) in manufacturing environments face escalating cyber threats while operational constraints limit the application of conventional IT security controls. The IEC 62443 standard family provides comprehensive guidance for IACS security, including Security Level (SL) targets, zones and conduits, and security management systems; however, practitioners lack integrated, reproducible tools that combine compliance assessment with risk-based prioritization. This paper presents the design and implementation of an open-source web assessment platform that operationalizes IEC 62443 through four modules: a 107-item compliance checklist mapped to standard parts 1-4, an SL-Target calculator based on the IEC threat actor model, a zones-and-conduits planner aligned with IEC 62443-3-2, and a five-by-five risk register. We validate the artifact through a pilot case study at an anonymized automotive manufacturing assembly line. Results show 49.1% overall compliance maturity, with System requirements lowest (43.6%) and two of five architectural zones exhibiting SL-Achieved below SL-Target (DMZ and Operations). Ten risks were registered, including four critical items (risk score at least 15) related to vendor remote access, unpatched PLCs, and MES-OT integration. The study demonstrates that integrated SL-gap and risk analysis surfaces remediation priorities not evident from compliance percentage alone. The artifact, dataset pipeline, and export formats support reproducible OT security research and practitioner baseline assessments.
```

Also update abstract in `main.tex` to use **"at least 15"** so PDF and EDAS match.
