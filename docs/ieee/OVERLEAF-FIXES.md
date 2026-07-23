# Overleaf Fixes — Figure + Error + Plagiarism Check

## 1. Fix figure placement (5 minutes)

LaTeX **floats** figures to fit the page — that is why your chart appeared between DMZ and Operations bullets.

### In Overleaf `main.tex`:

**Step A — Find and DELETE this block** (it is probably near Section IV, before Case Study Results):

```latex
\begin{figure}[!t]
\centering
\includegraphics[width=\linewidth]{figures/maturity-by-part.pdf}
...
\end{figure}
```

**Step B — Find this line:**

```latex
\subsection{Compliance Maturity}
```

**Step C — PASTE the figure block RIGHT AFTER the Compliance Maturity paragraph** (after the text ending with "...dedicated OT security staff.") and **BEFORE**:

```latex
\subsection{Security Level Analysis}
```

**Step D — Use this version** (stays closer to the text):

```latex
\begin{figure}[!htbp]
\centering
\includegraphics[width=\linewidth]{figures/maturity-by-part.pdf}
\caption{Compliance maturity by IEC 62443 part (case study, $n=107$ questions).}
\label{fig:maturity}
\end{figure}
```

**Step E — Click Recompile.** Figure should appear at end of Section V.A, not splitting the bullet list.

### If it still jumps around

Add near the top with other `\usepackage` lines:

```latex
\usepackage{float}
```

Then change the figure line to:

```latex
\begin{figure}[H]
```

`[H]` = **force here exactly** (no floating).

---

## 2. Fix author brackets (if still there)

Replace:

```latex
\IEEEauthorblockN{[Yashwanth Sai] [Tirukkovalluru]}
Email: [yashwanthsai.tirukkovalluru058@myci.csuci.edu]
```

With:

```latex
\IEEEauthorblockN{Yashwanth Sai Tirukkovalluru}
\IEEEauthorblockA{\textit{California State University Channel Islands} \\
Email: yashwanthsai.tirukkovalluru058@myci.csuci.edu}
```

Recompile → no square brackets in PDF.

---

## 3. Check for LaTeX errors in Overleaf

After **Recompile**:

| What you see | Meaning |
|--------------|---------|
| **Green "Recompile" — no red bar** | OK |
| **Red error banner** | Click it — read first error line |
| **Warning (yellow)** | Usually OK for submit |

**Common errors:**

| Error | Fix |
|-------|-----|
| `File figures/maturity-by-part.pdf not found` | Upload PDF into `figures/` folder |
| `Citation undefined` | Run Recompile **twice** |
| `IEEEtran not found` | Use Overleaf "IEEE Conference Template" project |
| `Unknown float option H` | Add `\usepackage{float}` |

**Logs:** Menu → **Logs and output files** → see full error text.

---

## 4. Plagiarism check (before EDAS upload)

IEEE may run similarity check. You should run one yourself first.

### Option A — CSUCI (best if available)

1. Log in to **Canvas** / **Myci** student portal  
2. Search **Turnitin** or ask library if students get free access  
3. Upload your **PDF**  
4. Target: **< 20%** similarity (excluding bibliography)

### Option B — Free online (quick)

1. Go to https://www.scribbr.com/plagiarism-checker/ or https://www.duplichecker.com  
2. Upload PDF or paste text from each section  
3. Review highlighted matches — add citations for any copied phrases

### Option C — Grammarly

1. https://www.grammarly.com/plagiarism-checker  
2. Paste abstract + introduction  
3. Fix any flagged sentences in your own words

### What is normal (not cheating)

- IEC 62443 standard terms (SL-T, zones, conduits) — everyone uses these  
- Short overlap with NIST 800-82 — **cite [1]**  
- Your own GitHub/repo text — fine, same author  

### What to fix if flagged

- Long copied paragraphs from PDFs in your repo → rewrite + cite  
- Matches to random websites → rewrite in your words  
- Missing citations in Related Work → add `[5]`, `[6]`, etc.

---

## 5. Final pre-submit checklist

```
[ ] Figure after Section V.A (not splitting bullets)
[ ] No [brackets] on name/email
[ ] Recompile twice — no red errors
[ ] Plagiarism check done (<20% or reviewed flags)
[ ] Download fresh PDF
[ ] Upload to EDAS
```
