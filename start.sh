#!/usr/bin/env bash
# Start helper: prefers PM2 if available, falls back to npm start
set -e
if command -v pm2 >/dev/null 2>&1; then
  echo "Starting with pm2..."
  pm2 start ecosystem.config.js --env production --update-env
  pm2 save
else
  echo "pm2 not found; running npm run start"
  npm run start
fi
