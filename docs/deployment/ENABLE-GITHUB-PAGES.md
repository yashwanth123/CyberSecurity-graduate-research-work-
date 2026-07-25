# Enable Live Demo (GitHub Pages) — One-Time Setup

The web app deploy workflow is ready. GitHub Pages must be turned on **once** in repository settings.

---

## Step 1 — Enable Pages (2 minutes)

1. Open: https://github.com/yashwanth123/CyberSecurity-graduate-research-work-/settings/pages  
2. Under **Build and deployment** → **Source**, select **GitHub Actions** (not "Deploy from branch")  
3. Save (no branch needed when using Actions)

---

## Step 2 — Trigger deploy

Push any change to `cursor/thesis-and-webapp-848f` or `main`, or:

1. Go to **Actions** tab  
2. Select **Deploy Web App to GitHub Pages**  
3. Click **Run workflow**

Wait ~1–2 minutes for green checkmark.

---

## Step 3 — Live URL

```
https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/
```

Share with Professor Abdolee. Review steps:

1. Open URL  
2. **About & Review Guide** → **Load Pilot Case Study**  
3. Check Dashboard, Zones & Conduits, Risk Register  

---

## If Pages cannot be enabled

### Option A — Local + screen share (Zoom)

```bash
cd webapp && npm install && npm run dev
```

Open http://localhost:5173 → Load Pilot Case Study

### Option B — Docker on any server

```bash
docker compose up -d --build
```

Share `http://YOUR-SERVER-IP:8080` (use HTTPS reverse proxy for production)

### Option C — Temporary public tunnel (ngrok)

```bash
cd webapp && npm run dev
# In another terminal:
npx ngrok http 5173
```

Share the `https://*.ngrok.io` URL (expires when tunnel stops)

---

## Verify deploy worked

```bash
curl -I https://yashwanth123.github.io/CyberSecurity-graduate-research-work-/
```

Expect `HTTP/2 200`

---

## Docs to share with advisor

| Doc | Purpose |
|-----|---------|
| [TRUTH-AND-SCOPE.md](../TRUTH-AND-SCOPE.md) | What is real vs pilot scenario |
| [SYSTEM-DESIGN.md](../architecture/SYSTEM-DESIGN.md) | Architecture & data pipeline |
| [webapp/README.md](../../webapp/README.md) | How to run locally |
