# ANCAPA Global Partners — Next.js Website

Production-oriented corporate and investment-origination website for ANCAPA Global Partners.

## Stack
- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Native Next.js Route Handlers for backend APIs
- Server-rendered content model in `lib/data.ts`

## Run
```bash
npm install
npm run dev
```

## Backend routes
- `GET /api/opportunities` — opportunity feed; supports `?region=` and `?sector=`
- `GET /api/insights` — insight feed
- `POST /api/contact` — validated inquiry endpoint with honeypot spam protection

### CRM / email integration
Set `CONTACT_WEBHOOK_URL` in production to a HubSpot/Zapier/Make/custom CRM intake endpoint. If unset, submissions are logged server-side for development.

### Site URL
Set `NEXT_PUBLIC_SITE_URL=https://ancapaglobal.com` (production domain, hosted on Hostinger) for sitemap, robots, canonical and Open Graph generation.

## Deploy (Hostinger Node.js hosting)
1. `npm install && npm run build`
2. Start command: `npm run start` (Next.js respects the `PORT` env var Hostinger provides)
3. Set environment variables in the Hostinger Node app panel: `NEXT_PUBLIC_SITE_URL=https://ancapaglobal.com` and, if used, `CONTACT_WEBHOOK_URL`.
4. Point the `ancapaglobal.com` domain/DNS at the Hostinger Node app.

## Architecture
The landing page includes summaries of every principal public page: About, Platforms, Operating Model, Markets, Opportunities, Insights, Partner types, and Contact. Dedicated pages remain available for SEO, deep links and investor use.
