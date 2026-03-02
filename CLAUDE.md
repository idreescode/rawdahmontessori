# Rawdah Montessori Primary School Website

## Project Overview
Fullstack website for Rawdah Montessori Primary School (Bradford, UK), opening 2026/2027. Built with Next.js, React, TypeScript, Prisma, and MySQL.

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Prisma v7 ORM with MySQL (via `@prisma/adapter-mariadb` + `mariadb` driver)
- Bootstrap 5.3.8 (CDN), Font Awesome 6.7.2 (CDN)
- PM2 for production process management
- fnm (Fast Node Manager) on production VPS

## Project Structure
```
src/
  middleware.ts                # Route guard for /dashboard/documents (HMAC cookie auth)
  app/
    layout.tsx                 # Root layout (fonts, CDN links, metadata)
    page.tsx                   # Home page
    registration/page.tsx      # Registration of Interest page
    archive/page.tsx           # Archive page (old website content)
    dashboard/
      page.tsx                 # Dashboard login page
      data.ts                  # Dashboard document categories (10 categories, 70+ docs)
      components/
        DashboardLogin.tsx     # Login form (client component)
      documents/
        page.tsx               # Protected documents grid page
    api/
      registration/route.ts    # POST: save registration to DB + sync to LMS
      dashboard/auth/route.ts  # POST: password verify, set session cookie
  components/
    Header.tsx                 # Site header (server component, accepts linkPrefix prop)
    Footer.tsx                 # Site footer (server component)
    MobileMenu.tsx             # Hamburger menu toggle (client component)
    ScrollHeader.tsx           # Scroll-fixed header (client component)
    RegistrationForm.tsx       # Interactive registration form (client component)
  lib/
    db.ts                      # Prisma client singleton (MariaDB adapter)
    lmsService.ts              # IQRA SS LMS webhook integration
  generated/prisma/            # Auto-generated Prisma client (gitignored)
prisma/
  schema.prisma                # Database schema (Registration model, 50+ fields)
  migrations/                  # Database migrations
prisma.config.ts               # Prisma v7 config (datasource URL)
public/
  css/
    normalize.css              # CSS reset
    styles.css                 # All custom styles (loaded via <link> in layout.tsx)
  images/                      # Site images and logos
  documents/                   # Public policy PDFs (linked from Footer)
    dashboard/                 # Dashboard PDFs organised by category slug
  fonts/                       # Avenir Next LT Pro, Berlingske Serif (@font-face in stylesheet.css/stylesheet2.css)
docs/plans/                    # Architecture and design planning documents
ecosystem.config.js            # PM2 production config
.github/workflows/
  deployment.yaml              # GitHub Actions SSH deploy on push to main
```

## Design Tokens
- Primary blue: `#003D55`
- Gold accent: `#BE9641`
- Background cream: `#F8F2E3`
- Fonts: Avenir Next LT Pro (body), Berlingske Serif (headings)

## Key Features

### Registration of Interest
Multi-section form (child details, address, parents/guardians, additional questions). Submissions are saved to MySQL via Prisma and synced to IQRA SS LMS via webhook.

### Dashboard (Password-Protected)
Login page at `/dashboard` with password auth. Protected `/dashboard/documents` page serves PDF documents across 10 categories (curriculum, policies, governance, etc.). Auth uses HMAC-SHA256 signed cookies with 24-hour expiry. Middleware at `src/middleware.ts` guards the route.

## Development Commands
- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npx prisma migrate dev` — Run database migrations
- `npx prisma studio` — Open database GUI
- `npx prisma generate` — Regenerate Prisma client

## Environment Variables
Copy `.env.example` to `.env` and configure:
- `DATABASE_URL` — MySQL connection string
- `IQRASS_API_URL` — LMS webhook endpoint
- `IQRASS_API_KEY` — LMS API key
- `DASHBOARD_PASSWORD` — Password for dashboard access

## Deployment
- GitHub Actions SSH deploy on push to `main` (`.github/workflows/deployment.yaml`)
- Secrets: `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`
- Production managed with PM2 (`ecosystem.config.js`)
- Server uses fnm for Node.js version management

## Conventions
- Mobile-first responsive design; test across breakpoints
- Server components by default; use `"use client"` only when needed (state, effects, event handlers)
- All custom CSS lives in `public/css/styles.css` (loaded statically, not via CSS modules)
- Policy documents go in `public/documents/`
- Dashboard PDFs go in `public/documents/dashboard/<category-slug>/`
- Database schema changes require a Prisma migration
