# Rawdah Montessori Primary School Website

## Project Overview
Fullstack website for Rawdah Montessori Primary School (Bradford, UK), opening 2026/2027. Built with Next.js, React, TypeScript, Prisma, and MySQL.

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Prisma v7 ORM with MySQL (via `@prisma/adapter-mariadb`)
- Bootstrap 5.3.8 (CDN), Font Awesome 6.7.2 (CDN)
- PM2 for production process management

## Project Structure
```
src/
  app/
    layout.tsx              # Root layout (fonts, CDN links, metadata)
    page.tsx                # Home page
    globals.css             # All custom styles (merged from style.css + responsive.css)
    registration/page.tsx   # Registration of Interest page
    archive/page.tsx        # Archive page
    api/registration/route.ts  # POST endpoint for form submissions
  components/
    Header.tsx              # Site header (server component)
    Footer.tsx              # Site footer (server component)
    MobileMenu.tsx          # Hamburger menu toggle (client component)
    ScrollHeader.tsx        # Scroll-fixed header (client component)
    RegistrationForm.tsx    # Interactive registration form (client component)
  lib/
    db.ts                   # Prisma client singleton
    lmsService.ts           # IQRA SS LMS webhook integration
  generated/prisma/         # Auto-generated Prisma client (gitignored)
prisma/
  schema.prisma             # Database schema (Registration model)
  migrations/               # Database migrations
prisma.config.ts            # Prisma v7 config (datasource URL)
public/
  images/                   # Site images and logos
  documents/                # School policy PDFs
  fonts/                    # Avenir Next LT Pro, Berlingske Serif
ecosystem.config.js         # PM2 production config
```

## Design Tokens
- Primary blue: `#003D55`
- Gold accent: `#BE9641`
- Background cream: `#F8F2E3`
- Fonts: Avenir Next LT Pro (body), Berlingske Serif (headings)

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

## Deployment
- GitHub Actions SSH deploy on push to `main` (`.github/workflows/deployment.yaml`)
- Secrets: `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`
- Production managed with PM2 (`ecosystem.config.js`)

## Conventions
- Mobile-first responsive design; test across breakpoints
- Server components by default; use `"use client"` only when needed (state, effects, event handlers)
- Policy documents go in `public/documents/`
- Database schema changes require a Prisma migration
