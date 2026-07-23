# Chapter 5 — Case Study Results and Discussion

*Statistics sourced from `case-study-statistics.json` — regenerate via `python scripts/generate_sample_case_study.py`*

## 5.1 Case description

The System Under Consideration (SuC) comprises **Assembly Line 2** at an anonymized automotive tier-1 supplier facility in the EU. The line includes four Siemens S7-1500 PLC cells, three operator HMIs, dual engineering workstations, OSIsoft PI historian connectivity, MES batch integration at Level 4, and vendor remote support via a DMZ jump host. Safety PLCs protect welding robots (IEC 61511 relevant but out of certification scope).

**Business rationale (62443-2-1):** Production stoppage costs estimated €850k/day; safety incidents carry regulatory and reputational consequences; customer OEM requires evidence of OT security program maturity.

## 5.2 Compliance maturity results

### 5.2.1 Overall maturity

| Metric | Value |
|--------|-------|
| **Overall compliance maturity** | **49.1%** |
| Questions assessed | 107 |
| Assessment period | Jan–Mar 2026 |

An overall maturity below 50% indicates the site has initiated IEC 62443 alignment but lacks operationalized controls across System and Component requirements — consistent with brownfield manufacturing without dedicated OT security FTE.

### 5.2.2 Maturity by standard part

| Part | Maturity | Yes | Partial | No | Total |
|------|----------|-----|---------|-----|-------|
| General | **66.7%** | 1 | 2 | 0 | 3 |
| Policies and Procedures | **55.0%** | 8 | 6 | 6 | 20 |
| System | **43.6%** | 14 | 20 | 21 | 55 |
| Component | **53.4%** | 11 | 9 | 9 | 29 |

**Finding F1:** System requirements exhibit lowest maturity (43.6%), driven by gaps in network segmentation verification, security event monitoring, and formal SL-A documentation — supporting SRQ 1 regarding uneven part coverage.

**Finding F2:** General concepts score highest (66.7%) but sample size (n=3) limits inference; terminology adoption exceeds operational implementation.

### 5.2.3 Top gap themes (qualitative coding of "No" responses)

1. Incomplete SL-A verification and documentation (62443-3-2)
2. OT-specific patch management exceptions not formalized (62443-2-3)
3. Security event monitoring absent on Level 2 networks (62443-3-3 SR 6.x)
4. System integrator security requirements not contractually enforced (62443-2-4)
5. Component hardening baselines not applied to legacy HMIs (62443-4-2)

## 5.3 Security Level analysis

### 5.3.1 Zone SL-T / SL-A table

| Zone | SL-T | SL-A | Gap |
|------|------|------|-----|
| Level 5 — Enterprise | 2 | 2 | 0 |
| Level 4 — Site Business | 2 | 2 | 0 |
| Level 3.5 — DMZ | 3 | 2 | **+1** |
| Level 3 — Operations | 3 | 2 | **+1** |
| Level 2 — Control | 3 | 3 | 0 |

**Finding F3:** Two of five zones (40%) exhibit SL gaps — DMZ and Operations — confirming H2 that integration and remote access zones lag despite SL-T=3 based on intentional threat with IACS-specific knowledge.

### 5.3.2 SL-T rationale summary

DMZ and Operations zones assigned SL-T=3 due to:
- Intentional misuse potential (vendor/integrator access)
- IACS-specific knowledge required
- Moderate adversary resources (commodity ransomware tooling)

Control zone achieves SL-A=3 through PLC hardening and physical access controls; Enterprise zones appropriately SL-T=2.

## 5.4 Risk register results

| Priority | Count (open) | Examples |
|----------|--------------|----------|
| Critical (≥15) | **4** | Vendor jump server (20), PLCs (15), EWS USB (16), MES–OT (15) |
| High (8–14) | 3 | Historian auth, backup testing, supplier contracts |
| Medium | 1 | Wireless tablets (mitigated) |

**Finding F4:** Eight of ten risks remain open; four critical risks span DMZ, Control, Operations, and MES integration — not reducible to single compliance part (supports H3 / SRQ 3).

### 5.4.1 Risk heat map interpretation

Highest concentration at Likelihood 3–4 × Impact 4–5, characteristic of manufacturing environments where production impact dominates confidentiality concerns — aligning with OT risk literature (NIST SP 800-82).

## 5.5 Integrated gap analysis

Combining compliance, SL, and risk views yields prioritized remediation:

| Priority | Action | IEC 62443 anchor | Horizon |
|----------|--------|------------------|---------|
| 1 | MFA + session logging on vendor jump server | 62443-2-1, 3-3 FR 2 | 0–90 days |
| 2 | OT patch test bed + compensating monitoring | 62443-2-3 | 90–180 days |
| 3 | EWS USB lockdown + allowlisting | 62443-3-3 | 0–90 days |
| 4 | MES–OT application firewall / unidirectional gateway | 62443-3-2 conduit | 180–365 days |
| 5 | IACS-SMS formalization + cyber coordinator | 62443-2-1 | 180–365 days |

## 5.6 Discussion

### 5.6.1 Comparison with literature

VTT (2018) reported similar segmentation deficits in Nordic industrial sites. SANS IEC 62443 guidance emphasizes program governance before technical controls — our Policies maturity (55%) exceeds System (43.6%), suggesting governance initiation without full technical verification.

### 5.6.2 Implications for SRQs

| SRQ | Outcome |
|-----|---------|
| SRQ 1 | System part weakest; H1 partially supported |
| SRQ 2 | SL gaps at DMZ/Operations; H2 supported |
| SRQ 3 | Risk priorities decoupled from lowest part alone; H3 supported |
| SRQ 4 | Pending dual-assessor study |
| SRQ 5 | Interview data collection in progress |

### 5.6.3 Limitations

Single site, assessor-developed artifact, simulated SL-A for portions of assessment, 107-question subset of full standard.

## 5.7 Threats to validity

Analytic generalization to similar automotive manufacturing brownfield sites is plausible; generalization to energy or water sectors requires further cases.

---

*Replace with primary data when field work completes; statistics auto-sync from sample generator.*
