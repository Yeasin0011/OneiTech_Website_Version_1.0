OneiTech_WV1.0 — Deployment Guide

This document explains how to deploy the app to a host (StackCP) and how to switch a domain from a previous site to this one.

Prerequisites
- Node 18 or 20 installed on the host (recommended)
- NPM available
- Environment variables set (see .env.example)

Quick local checks
```bash
npm ci
npm run build
npm run start
# visit http://localhost:3000
```

Options for deploying on StackCP
A. Build on the server (recommended if server has node/npm)
1. Upload project via Git or file upload to the app directory on StackCP.
2. In the server shell or control panel, run:
```bash
npm ci
npm run build
# set environment variables in StackCP control panel
npm run start
```
3. Configure StackCP app runtime to use Node 18/20 and map HTTP(S) to the app port (default 3000).
4. Enable SSL via StackCP (Let's Encrypt) or upload certs.

B. Upload pre-built artifact (useful if server cannot build)
1. Locally: build the app: `npm ci && npm run build`.
2. Create a ZIP of the build artifact (this repo includes `build-artifact.zip`).
3. Upload the ZIP to the host and extract it in the app directory.
4. Install a minimal Node runtime and optionally `npm ci --production` if node_modules are missing.
5. Start with `npm run start` (ensure `package.json` and `.next` exist on host).

Files included in `build-artifact.zip`
- .next/ (production build)
- public/
- package.json
- next.config.mjs
- .env.example
- README-deploy.md

Environment variables required
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional)
- Optional: PORT, NEXT_PUBLIC_* vars

Domain switch (safe steps)
1. Backup old site: archive current webroot (example):
```bash
tar czf ~/old-site-backup-$(date +%F).tar.gz /var/www/old-site
```
2. Reduce DNS TTL 24–48 hours before change (optional but recommended).
3. Deploy the new app and confirm it serves at the new server IP or StackCP temporary URL.
4. Update DNS A record for the domain to point to the new server IP (or CNAME as instructed by StackCP).
5. Wait for propagation (monitor with `dig` or `nslookup`).
6. Enable SSL (StackCP / Let's Encrypt) and verify HTTPS.
7. Remove or stop the old app (StackCP: stop or unassign domain), then verify the new site serves content.

Post-deployment smoke tests
- Visit homepage, services pages, /graphics, /web.
- Submit contact form to verify SMTP.
- Check server logs and errors: `journalctl -u <pm2|service>` or tail the start logs.

If you want, I can:
- Walk you through the DNS change interactively while you perform updates, or
- Connect a checklist to finish the domain switch and run final smoke tests.
