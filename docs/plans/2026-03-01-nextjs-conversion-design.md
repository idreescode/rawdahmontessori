# Next.js Fullstack Conversion Design

## Goal
Convert the static Rawdah Montessori website (HTML/CSS/jQuery) to a Next.js fullstack application with MySQL database, preserving the existing design exactly.

## Scope
- Convert 3 HTML pages to Next.js React components
- Store registration form submissions in MySQL
- Forward registration data to IQRA SS LMS via webhook
- Deploy on VPS with Nginx + PM2

## Out of Scope
- No redesign or UI changes
- No admin panel or authentication
- No CMS / content editing
- No payment processing integration
- No new pages or features

## Framework Choice: Next.js (App Router)

**Why Next.js over React + Express:**
- Single codebase — no separate frontend/backend servers
- SSR preserves SEO (current static pages are SEO-friendly)
- Built-in API routes — no Express boilerplate
- Straightforward VPS deployment

## Project Structure

```
rawdah-montessori/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, meta, Header/Footer)
│   │   ├── page.tsx                # Home page (index.html)
│   │   ├── registration/
│   │   │   └── page.tsx            # Registration form page
│   │   ├── archive/
│   │   │   └── page.tsx            # Archive page
│   │   ├── api/
│   │   │   └── registration/
│   │   │       └── route.ts        # POST — save to MySQL + call LMS
│   │   └── globals.css             # Existing style.css + responsive.css merged
│   ├── components/
│   │   ├── Header.tsx              # Shared nav (server component)
│   │   ├── Footer.tsx              # Shared footer (server component)
│   │   ├── Banner.tsx
│   │   ├── Mission.tsx
│   │   ├── Vision.tsx
│   │   ├── AboutMontessori.tsx
│   │   ├── AdmissionEnquiries.tsx
│   │   ├── Recruitment.tsx
│   │   ├── RegistrationForm.tsx    # Client component — form state & submission
│   │   ├── MobileMenu.tsx          # Client component — hamburger toggle
│   │   └── ScrollHeader.tsx        # Client component — fixed header on scroll
│   └── lib/
│       ├── db.ts                   # Prisma client singleton
│       └── lmsService.ts           # IQRA SS API integration
├── prisma/
│   └── schema.prisma               # MySQL schema
├── public/
│   ├── images/                     # Existing images
│   ├── documents/                  # Existing PDFs
│   └── fonts/                      # Existing font files
├── .env
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Database Schema (Prisma)

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Registration {
  id                       Int      @id @default(autoincrement())
  createdAt                DateTime @default(now())

  // Child Details
  childFirstName           String
  childLastName            String
  childDob                 DateTime
  childGender              String
  yearGroupApplied         String
  preferredStartDate       String

  // Home Address
  addressLine1             String
  addressLine2             String?
  city                     String
  county                   String?
  postcode                 String
  country                  String

  // Parent/Guardian 1
  parent1Title             String
  parent1FirstName         String
  parent1LastName          String
  parent1Relationship      String
  parent1Email             String
  parent1Phone             String
  parent1Mobile            String?
  parent1Occupation        String?

  // Parent/Guardian 2
  parent2Title             String?
  parent2FirstName         String?
  parent2LastName          String?
  parent2Relationship      String?
  parent2Email             String?
  parent2Phone             String?
  parent2Mobile            String?
  parent2Occupation        String?

  // Health & Additional Info
  healthConditions         String?  @db.Text
  allergies                String?  @db.Text
  specialNeeds             String?  @db.Text

  // Previous Schooling
  previousSchoolName       String?
  previousSchoolAddress    String?  @db.Text

  // Demographics
  ethnicity                String?
  religion                 String?
  firstLanguage            String?

  // Payment & Consent
  applicationFeePaid       Boolean  @default(false)
  termsAccepted            Boolean
  withdrawalNoticeAccepted Boolean
}
```

## Registration API Flow

```
User submits form
       │
       ▼
POST /api/registration
       │
       ├──▶ 1. Validate form data
       │
       ├──▶ 2. Save to MySQL (Prisma)
       │
       ├──▶ 3. POST to IQRA SS API
       │       URL: https://www.iqrass.com/widget/course/register-interest
       │       Headers: X-API-Key: <from .env>
       │       Body: registration data (mapped to LMS format)
       │
       └──▶ 4. Return success/error to client
```

- LMS call happens after MySQL save — data is safe even if LMS is down
- LMS failures are logged but don't block the registration response
- Field mapping handled in `lib/lmsService.ts`

## Component Architecture

**Server Components** (SEO-friendly, no interactivity):
- `layout.tsx`, `page.tsx`, `archive/page.tsx`
- `Header.tsx`, `Footer.tsx`
- `Banner.tsx`, `Mission.tsx`, `Vision.tsx`, `AboutMontessori.tsx`, `AdmissionEnquiries.tsx`, `Recruitment.tsx`

**Client Components** (`"use client"`):
- `RegistrationForm.tsx` — form state, validation, API submission
- `MobileMenu.tsx` — hamburger toggle (replaces jQuery)
- `ScrollHeader.tsx` — fixed header on scroll (replaces jQuery)

## jQuery Removal

| jQuery behavior | React replacement |
|---|---|
| Menu slideToggle | `useState` boolean + CSS transition |
| Scroll header fix | `useEffect` + `window.scrollY` |
| Active nav on scroll | `useEffect` + `IntersectionObserver` |

## What Stays Identical

- All CSS (class names, colors, layout, responsive breakpoints)
- All images, fonts, PDFs
- HTML structure of every section (JSX outputs identical markup)
- Bootstrap grid and utilities
- Font Awesome icons
- All links and navigation

## Deployment

```
Nginx (port 80/443, SSL via Let's Encrypt)
  └──▶ Next.js (port 3000, managed by PM2)
         └──▶ MySQL (localhost:3306)
```

**Environment variables (.env):**
```
DATABASE_URL=mysql://user:password@localhost:3306/rawdah_montessori
IQRASS_API_KEY=your-api-key-here
IQRASS_API_URL=https://www.iqrass.com/widget/course/register-interest
```

**Dependencies:**
- next, react, react-dom
- prisma, @prisma/client
- typescript, @types/react, @types/node
- bootstrap

**Deploy process:**
- GitHub Actions: build Next.js, deploy via SSH/rsync
- Run `npx prisma migrate deploy` on each deploy
- PM2 restarts the Next.js process
