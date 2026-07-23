#!/usr/bin/env python3
"""Generate full manufacturing pilot case study for thesis and industry demo."""

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "webapp" / "src" / "data" / "iec62443.json"
OUT = ROOT / "webapp" / "public" / "sample-assessment.json"
STATS = ROOT / "docs" / "thesis" / "phd" / "case-study-statistics.json"

PART_WEIGHTS = {
    "General": {"yes": 0.33, "partial": 0.50, "no": 0.17},
    "Policies and Procedures": {"yes": 0.25, "partial": 0.45, "no": 0.30},
    "System": {"yes": 0.35, "partial": 0.40, "no": 0.25},
    "Component": {"yes": 0.30, "partial": 0.35, "no": 0.35},
}

NOTES = {
    "yes": [
        "Documented and verified during assessment.",
        "Control implemented; evidence in OT security folder.",
        "Meets requirement per site policy.",
    ],
    "partial": [
        "Policy draft exists; not fully operationalized.",
        "Implemented for new line; legacy gap remains.",
        "Compensating control in place; formal SL-A not verified.",
    ],
    "no": [
        "Not implemented.",
        "Gap identified; remediation planned Q3.",
        "Legacy constraint — firmware unsupported.",
    ],
}


def maturity(responses, questions):
    score = total = 0
    for q in questions:
        v = responses[q["id"]]["value"]
        total += 1
        if v == "yes":
            score += 1
        elif v == "partial":
            score += 0.5
    return round(score / total * 100, 1) if total else 0


def main():
    random.seed(42)
    questions = json.loads(DATA.read_text())["questions"]
    compliance = {}
    for q in questions:
        part = q["part"] or "System"
        w = PART_WEIGHTS.get(part, PART_WEIGHTS["System"])
        r = random.random()
        if r < w["yes"]:
            val = "yes"
        elif r < w["yes"] + w["partial"]:
            val = "partial"
        else:
            val = "no"
        compliance[q["id"]] = {
            "value": val,
            "notes": f'{random.choice(NOTES[val])} [{q["standard"]}]',
        }

    project = {
        "projectName": "Manufacturing Pilot — Assembly Line 2",
        "organization": "Example Automotive Supplier (Anonymized)",
        "assessor": "PhD Researcher / OT Security Assessment Team",
        "sector": "Manufacturing",
        "createdAt": "2026-01-15T09:00:00.000Z",
        "updatedAt": "2026-03-20T14:30:00.000Z",
        "compliance": compliance,
        "zones": [
            {
                "id": "zone-l5",
                "name": "Level 5 — Enterprise",
                "description": "Corporate IT, ERP, email",
                "assets": "SAP ERP, Active Directory, email gateway",
                "slTarget": 2,
                "slAchieved": 2,
                "conduitTo": "Level 4 — Site Business",
            },
            {
                "id": "zone-l4",
                "name": "Level 4 — Site Business",
                "description": "Plant MES, scheduling, site servers",
                "assets": "MES server, batch historian, site file server",
                "slTarget": 2,
                "slAchieved": 2,
                "conduitTo": "Level 3.5 — DMZ",
            },
            {
                "id": "zone-dmz",
                "name": "Level 3.5 — DMZ",
                "description": "Jump servers, antivirus updates, data diode",
                "assets": "Jump host, patch relay, OT AV server",
                "slTarget": 3,
                "slAchieved": 2,
                "conduitTo": "Level 3 — Operations",
            },
            {
                "id": "zone-l3",
                "name": "Level 3 — Operations",
                "description": "HMIs, engineering workstations, historians",
                "assets": "3x HMI, 2x EWS, OSIsoft PI connector",
                "slTarget": 3,
                "slAchieved": 2,
                "conduitTo": "Level 2 — Control",
            },
            {
                "id": "zone-l2",
                "name": "Level 2 — Control",
                "description": "PLCs and DCS controllers",
                "assets": "Siemens S7-1500 x4, safety PLC",
                "slTarget": 3,
                "slAchieved": 3,
                "conduitTo": "Level 1 — Basic Control",
            },
        ],
        "risks": [
            {
                "id": "risk-1",
                "asset": "Vendor remote access jump server",
                "threat": "Unauthorized external access to OT network",
                "vulnerability": "Shared credentials, no MFA on legacy jump box",
                "likelihood": 4,
                "impact": 5,
                "zone": "Level 3.5 — DMZ",
                "mitigation": "Deploy MFA, session recording, time-limited vendor accounts (62443-2-1)",
                "status": "open",
            },
            {
                "id": "risk-2",
                "asset": "Siemens S7-1500 PLCs",
                "threat": "Exploitation of unpatched firmware",
                "vulnerability": "Firmware 2 years behind; no OT patch test bed",
                "likelihood": 3,
                "impact": 5,
                "zone": "Level 2 — Control",
                "mitigation": "Establish OT patch program per 62443-2-3; compensating monitoring",
                "status": "open",
            },
            {
                "id": "risk-3",
                "asset": "Engineering workstations",
                "threat": "Malware introduction via removable media",
                "vulnerability": "USB ports enabled; no application allowlisting",
                "likelihood": 4,
                "impact": 4,
                "zone": "Level 3 — Operations",
                "mitigation": "USB control, application allowlisting, EWS hardening baseline",
                "status": "open",
            },
            {
                "id": "risk-4",
                "asset": "Legacy flat network segment",
                "threat": "Lateral movement from compromised IT asset",
                "vulnerability": "Line 1 flat network pending retrofit",
                "likelihood": 3,
                "impact": 4,
                "zone": "Level 3 — Operations",
                "mitigation": "Micro-segmentation Q3; interim ACLs deployed",
                "status": "mitigated",
            },
            {
                "id": "risk-5",
                "asset": "Historian database",
                "threat": "Data integrity compromise",
                "vulnerability": "Weak authentication on PI connector",
                "likelihood": 3,
                "impact": 4,
                "zone": "Level 3 — Operations",
                "mitigation": "Service account hardening, TLS, network ACL",
                "status": "open",
            },
            {
                "id": "risk-6",
                "asset": "Safety PLC network",
                "threat": "Safety function interference",
                "vulnerability": "Shared VLAN with non-safety traffic (legacy)",
                "likelihood": 2,
                "impact": 5,
                "zone": "Level 2 — Control",
                "mitigation": "Physical segmentation; IEC 61511 security review",
                "status": "open",
            },
            {
                "id": "risk-7",
                "asset": "MES–OT integration",
                "threat": "Ransomware propagation",
                "vulnerability": "Bidirectional OPC without application firewall",
                "likelihood": 3,
                "impact": 5,
                "zone": "Level 4 — Site Business",
                "mitigation": "Unidirectional gateway evaluation; recovery testing",
                "status": "open",
            },
            {
                "id": "risk-8",
                "asset": "OT configuration backup",
                "threat": "Extended downtime after cyber incident",
                "vulnerability": "PLC backups not tested quarterly",
                "likelihood": 3,
                "impact": 4,
                "zone": "Level 3 — Operations",
                "mitigation": "Backup verification procedure per 62443-2-1",
                "status": "open",
            },
            {
                "id": "risk-9",
                "asset": "Wireless maintenance tablets",
                "threat": "Unauthorized wireless access",
                "vulnerability": "Legacy WPA2-PSK credentials",
                "likelihood": 3,
                "impact": 3,
                "zone": "Level 3 — Operations",
                "mitigation": "802.1X; isolated maintenance SSID",
                "status": "mitigated",
            },
            {
                "id": "risk-10",
                "asset": "System integrator remote support",
                "threat": "Supply chain compromise",
                "vulnerability": "No 62443-2-4 clauses in vendor contracts",
                "likelihood": 2,
                "impact": 4,
                "zone": "Level 3.5 — DMZ",
                "mitigation": "Update procurement security schedule; supplier assessment",
                "status": "open",
            },
        ],
    }

    OUT.write_text(json.dumps(project, indent=2))

    by_part = {}
    for q in questions:
        p = q["part"] or "System"
        by_part.setdefault(p, {"yes": 0, "partial": 0, "no": 0})
        by_part[p][compliance[q["id"]]["value"]] += 1

    stats = {
        "overallMaturity": maturity(compliance, questions),
        "byPart": {
            p: {
                "maturity": round(
                    (c["yes"] + 0.5 * c["partial"]) / sum(c.values()) * 100, 1
                ),
                "counts": c,
                "total": sum(c.values()),
            }
            for p, c in by_part.items()
        },
        "zones": len(project["zones"]),
        "slGaps": sum(1 for z in project["zones"] if z["slAchieved"] < z["slTarget"]),
        "openRisks": sum(1 for r in project["risks"] if r["status"] == "open"),
        "criticalRisks": sum(
            1 for r in project["risks"]
            if r["status"] == "open" and r["likelihood"] * r["impact"] >= 15
        ),
    }
    STATS.parent.mkdir(parents=True, exist_ok=True)
    STATS.write_text(json.dumps(stats, indent=2))
    print(f"Wrote {OUT} — maturity {stats['overallMaturity']}%")


if __name__ == "__main__":
    main()
