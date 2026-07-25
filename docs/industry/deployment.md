# Industry Deployment Guide

Deploy the IEC 62443 Assessment Platform on plant networks, cloud demos, or air-gapped environments.

---

## Option 1 — Docker (recommended for industry)

```bash
# From repository root
docker compose up -d --build
```

Open **http://localhost:8080**

- No Node.js required on target machine
- nginx serves static build
- OT assessment data stays in user browser (localStorage)

### Internal plant deployment

1. Build on engineering workstation: `docker compose build`
2. Export image: `docker save iec62443-app | gzip > iec62443-app.tar.gz`
3. Transfer to internal server (USB if air-gapped)
4. Load: `docker load < iec62443-app.tar.gz`
5. Run on OT engineering VLAN (no internet required)

---

## Option 2 — Static build + nginx

```bash
cd webapp
npm install
npm run build
# Copy dist/ to /var/www/iec62443/
```

Use included `webapp/nginx.conf` as site config.

---

## Option 3 — GitHub Pages (public demo — share with advisors)

**Live URL:** https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/

1. Push to `main` or `cursor/thesis-and-webapp-848f`
2. Repository **Settings → Pages → Source: GitHub Actions**
3. Workflow `.github/workflows/deploy-pages.yml` publishes automatically

**Reviewer steps:** Open URL → About → Load Pilot Case Study → review Dashboard / Zones / Risks.

See [docs/TRUTH-AND-SCOPE.md](../TRUTH-AND-SCOPE.md) for honest scope of the pilot data.

**Warning:** Do not enter real plant data on public URLs.

---

## Option 4 — Development mode

```bash
cd webapp && npm install && npm run dev
```

---

## Post-deployment checklist

- [ ] Load sample case study to verify install
- [ ] Complete test assessment with OT team
- [ ] Export JSON backup to secure share
- [ ] Configure HTTPS if exposed beyond localhost (reverse proxy + TLS)
- [ ] Document internal URL in IACS-SMS (62443-2-1)

---

## PhD / research use

- Export JSON → `docs/thesis/data/` (gitignored if sensitive)
- Regenerate statistics: `python scripts/generate_sample_case_study.py`
- Cite via `CITATION.cff` and Zenodo DOI

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page on GitHub Pages | Check `BASE_PATH` in vite.config.ts matches repo name |
| Data lost | Export project JSON before browser cache clear |
| Docker port conflict | Change `8080:80` in docker-compose.yml |
