# Industry Implementation Guide

Step-by-step guide for deploying and using the IEC 62443 Assessment Platform in an industrial automation environment.

---

## Who should use this

- OT / ICS security engineers
- Plant IT–OT convergence teams
- Compliance and GRC staff supporting manufacturing, energy, water, oil & gas
- System integrators delivering 62443-aligned projects

---

## Phase 1 — Prepare (1–2 weeks)

### 1.1 Define scope (IEC 62443-3-2 SuC)

Document your **System Under Consideration**:

| Item | Example |
|------|---------|
| Site | Plant A — Assembly Line 2 |
| Boundary | PLC network through MES, excluding corporate ERP |
| Business rationale | Production loss, safety, environmental impact |
| Stakeholders | OT manager, CISO, production lead |

### 1.2 Gather documents

- Network architecture diagram (latest)
- Asset inventory (PLCs, HMIs, historians, firewalls)
- Existing policies (patch, remote access, backup)
- Previous audit reports (if any)

### 1.3 Deploy the tool

**Option A — Internal server**
```bash
cd webapp && npm install && npm run build
# Copy dist/ to internal web server (nginx/IIS)
```

**Option B — Engineer laptop (air-gapped OK after build)**
```bash
npm run build && npm run preview
# Runs locally; data stays in browser
```

**Option C — GitHub Pages** (demo/training only — not for classified OT data)

---

## Phase 2 — Assess (2–4 weeks)

### Week 1: Architecture

1. Open **Zones & Conduits** ? Load **Purdue Template**
2. Rename zones to match your site
3. List key assets per zone
4. Use **SL Calculator** to set SL-T per zone
5. Record conduit paths between zones

### Week 2: Compliance

1. Open **Compliance** module
2. Filter by part (start with *Policies and Procedures*)
3. Answer Yes / Partial / No / N/A with **evidence notes**
4. Involve OT engineer + IT security for joint answers

### Week 3: Risk register

1. Add risks from:
   - Unpatched PLCs
   - Flat networks
   - Default credentials
   - Remote access without MFA
   - Missing monitoring
2. Link each risk to a zone
3. Propose mitigations mapped to IEC 62443 controls

### Week 4: Report

1. Open **Reports** ? Review executive summary
2. Export **JSON** (archive) + **CSV** (management spreadsheet)
3. Print/PDF report for leadership briefing

---

## Phase 3 — Remediate (ongoing)

### Prioritization matrix

| Priority | Action |
|----------|--------|
| **Critical risks** | Fix within 30 days |
| **SL gaps (SL-A < SL-T)** | Remediation project within quarter |
| **Compliance < 50%** | Program initiative (62443-2-1 IACS-SMS) |
| **Partial answers** | Document compensating controls |

### Typical quick wins

1. Segment Level 3 from Level 4 (firewall + conduit rules)
2. Disable unused remote access paths
3. Inventory default passwords on HMIs/PLCs
4. Enable logging on OT boundary firewall
5. Document patch exception process (62443-2-3)

---

## Phase 4 — Maintain

| Cadence | Activity |
|---------|----------|
| Quarterly | Re-run compliance on changed systems |
| Annually | Full assessment + SL-T review |
| On change | New line, MES upgrade, cloud connector ? update zones |

Re-import previous JSON export to preserve history (Reports ? Import).

---

## Sample case study

Load the built-in **Manufacturing Pilot** sample in Reports to see a completed assessment structure before customizing for your site.

File: `webapp/public/sample-assessment.json`

---

## Mapping to business language

When presenting to plant management, translate:

| Technical | Business |
|-----------|----------|
| SL-T gap | "Protection level below target for this production zone" |
| Compliance 45% | "Just under half of security program requirements met" |
| Critical risk #3 | "Remote vendor access could stop Line 2" |
| Zone segmentation | "Separating office network from machine controls" |

---

## Security & data handling

- Tool stores data in **browser localStorage** by default — no cloud upload
- For sensitive sites: run air-gapped after build
- Export JSON for your CMDB/GRC archive
- Do **not** put classified IP addresses in demo deployments

---

## Support & customization

- Update questions: edit `_IEC 62443__.xlsx` ? run `python scripts/extract_requirements.py`
- Add company logo: customize `webapp/src/components/Layout.tsx`
- Multi-site: export one JSON per site; name projects clearly

---

## Resume / portfolio line

> Led IEC 62443 baseline assessment for [site type] using structured compliance, SL-T, and risk methodology; identified [N] critical gaps and delivered remediation roadmap to plant leadership.
