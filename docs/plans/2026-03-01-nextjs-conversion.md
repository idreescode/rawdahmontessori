# Next.js Fullstack Conversion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the static Rawdah Montessori website (3 HTML pages) to a Next.js fullstack app with MySQL database and IQRA SS LMS integration, preserving the existing design exactly.

**Architecture:** Next.js App Router with server components for all pages, 3 client components for interactivity (mobile menu, scroll header, registration form). Prisma ORM connects to MySQL. Registration form submits to an API route that saves to DB then forwards to IQRA SS.

**Tech Stack:** Next.js 15, React 19, TypeScript, Prisma, MySQL, Bootstrap 5.3.8 (CSS only via npm)

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `.env.example`, `.gitignore`

**Step 1: Initialize Next.js project**

Run from the project root (`D:\Development\rawdahmontessori`). Create a new Next.js app in a subfolder, then move files up:

```bash
npx create-next-app@latest rawdah-next --typescript --app --src-dir --no-tailwind --no-eslint --import-alias "@/*"
```

Then copy the generated files (package.json, tsconfig.json, next.config.ts, src/, etc.) into the project root. Delete the `rawdah-next` folder after.

**Step 2: Install dependencies**

```bash
npm install prisma @prisma/client bootstrap
npm install -D @types/node @types/react @types/react-dom typescript
```

**Step 3: Create `.env.example`**

```env
DATABASE_URL=mysql://user:password@localhost:3306/rawdah_montessori
IQRASS_API_KEY=your-api-key-here
IQRASS_API_URL=https://www.iqrass.com/widget/course/register-interest
```

**Step 4: Create `.env` from example**

Copy `.env.example` to `.env` and fill in real values (or dev placeholders). Ensure `.env` is in `.gitignore`.

**Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: Next.js dev server starts on http://localhost:3000 with default page.

**Step 6: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts src/ .env.example .gitignore
git commit -m "feat: scaffold Next.js project with dependencies"
```

---

### Task 2: Migrate Static Assets

**Files:**
- Move: `assets/images/*` → `public/images/`
- Move: `assets/documents/*` → `public/documents/`
- Move: `assets/fonts/*` → `public/fonts/`
- Move: `assets/css/normalize.css` → `public/css/normalize.css`

**Step 1: Create public directories and copy assets**

```bash
mkdir -p public/images public/documents public/fonts public/css
cp -r assets/images/* public/images/
cp -r assets/documents/* public/documents/
cp -r assets/fonts/* public/fonts/
cp assets/css/normalize.css public/css/normalize.css
```

**Step 2: Update font stylesheet paths**

The font stylesheets (`stylesheet.css` and `stylesheet2.css`) reference font files with relative paths like `url('AvenirNextLTPro-Regular.woff2')`. Since they'll live in `public/fonts/`, these relative paths will still work when served from the same directory. No changes needed.

**Step 3: Verify assets are accessible**

With dev server running, check that `http://localhost:3000/images/logo.png` and `http://localhost:3000/fonts/stylesheet.css` load correctly in browser.

**Step 4: Commit**

```bash
git add public/
git commit -m "feat: migrate static assets to public directory"
```

---

### Task 3: Create Global CSS

**Files:**
- Create: `src/app/globals.css`

**Step 1: Merge style.css + responsive.css into globals.css**

Create `src/app/globals.css` with the following content order:

1. Copy entire contents of `assets/css/style.css` (1382 lines)
2. Append entire contents of `assets/css/responsive.css` (559 lines)

**Step 2: Fix CSS image/asset paths**

In `globals.css`, all `url('../images/...')` references need to become `url('/images/...')` because Next.js serves from `public/`. Also update any `url('../images/register/...')` and `url('../images/archive/...')` paths.

Find and replace these patterns:
- `url('../images/` → `url('/images/`
- `url("../images/` → `url("/images/`

There are approximately 15 background-image references to update:
- `banner-bg2.jpg`
- `admission-left.png`, `admission-right.png`
- `recruitment-bg.png`
- `register/banner.jpg`, `register/angle-down.png`
- `archive/banner.jpg`, `archive/mission-bg.png`, `archive/philosophy-bg.png`
- `archive/well-being-shape1.png`, `archive/well-being-shape2.png`

**Step 3: Verify styles load**

Import `globals.css` in `src/app/layout.tsx` (already done by create-next-app default). Check that the dev server renders with the correct background color (`#F8F2E3`).

**Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: merge style.css and responsive.css into globals.css with fixed asset paths"
```

---

### Task 4: Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Write the root layout**

Replace the default `layout.tsx` with:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rawdah Montessori Primary School",
  description: "Rawdah Montessori Primary School - Opening Soon",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/stylesheet2.css" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        {/* Normalize */}
        <link rel="stylesheet" href="/css/normalize.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Verify layout renders**

Run `npm run dev` and check that the page loads with correct fonts and background.

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: configure root layout with fonts, Bootstrap, Font Awesome CDN links"
```

---

### Task 5: Header Component (with MobileMenu + ScrollHeader)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/MobileMenu.tsx`
- Create: `src/components/ScrollHeader.tsx`

**Step 1: Create MobileMenu client component**

This replaces the jQuery `.slideToggle()` and hamburger icon animation.

```tsx
// src/components/MobileMenu.tsx
"use client";

import { useState } from "react";

export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="nav-icon4"
        className={`menu_icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu" style={{ display: isOpen ? "block" : undefined }}>
        {children}
      </div>
    </>
  );
}
```

**Step 2: Create ScrollHeader client component**

This replaces the jQuery scroll listener that adds/removes the `fixed` class.

```tsx
// src/components/ScrollHeader.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_main ${isFixed ? "fixed" : ""}`}>
      {children}
    </header>
  );
}
```

**Step 3: Create Header component**

This composes ScrollHeader + MobileMenu. It accepts a `linkPrefix` prop so links work on both home page (`#mission`) and sub-pages (`/#mission`).

```tsx
// src/components/Header.tsx
import ScrollHeader from "./ScrollHeader";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header({ linkPrefix = "" }: { linkPrefix?: string }) {
  return (
    <ScrollHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="Rawdah Montessori" />
                </Link>
                <MobileMenu>
                  <ul>
                    <li><a href={`${linkPrefix}#mission`}>MISSION</a></li>
                    <li><a href={`${linkPrefix}#vision`}>VISION</a></li>
                    <li><a href={`${linkPrefix}#about`}>ABOUT MONTESSORI</a></li>
                    <li><a href={`${linkPrefix}#admission`}>ADMISSION ENQUIRIES</a></li>
                    <li><a href={`${linkPrefix}#recruitment`}>RECRUITMENT</a></li>
                  </ul>
                </MobileMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollHeader>
  );
}
```

**Step 4: Verify header renders**

Import and use `<Header />` in `src/app/page.tsx` temporarily. Check that the hamburger menu toggles on mobile viewport and the header becomes fixed on scroll.

**Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/MobileMenu.tsx src/components/ScrollHeader.tsx
git commit -m "feat: add Header with mobile menu toggle and scroll-fixed behavior"
```

---

### Task 6: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

**Step 1: Create Footer component**

Convert the footer HTML from `index.html` (lines 251-331) to JSX. This is the main footer used on home and registration pages. The archive page has its own footer inline.

```tsx
// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer_main">
      <div className="container">
        <div className="row footer_top">
          <div className="col-lg-5">
            <div className="footer_brand">
              <Link href="/">
                <img src="/images/footer-logo.png" alt="Footer Logo" />
              </Link>
              <p>
                We are committed to fostering an inclusive environment where every child is respected, valued and supported to reach their full potential. Through the promotion of democracy, rule of law, individual liberty, and mutual respect and tolerance, alongside Islamic principles of compassion, justice, integrity, and community, we nurture morally responsible, reflective, and socially aware individuals.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="footer_links_wrap">
              <div className="footer_links">
                <h4>QUICK LINKS</h4>
                <ul>
                  <li><a href="/#mission">Mission</a></li>
                  <li><a href="/#vision">Vision</a></li>
                  <li><a href="/#about">About Montessori</a></li>
                  <li><a href="/#admission">Admission Enquiries</a></li>
                  <li><a href="/#recruitment">Recruitment</a></li>
                </ul>
              </div>
              <div className="footer_links">
                <ul>
                  <li><a href="/documents/British Values_IslamicEthos_Montessori.pdf" target="_blank">Montessori &amp; Islam &amp; British Values</a></li>
                  <li><a href="/documents/RM_Curriculum Policy .pdf" target="_blank">Curriculum Policy</a></li>
                  <li><a href="/documents/RM_Safeguarding_Policyv2.pdf" target="_blank">Safeguarding Policy</a></li>
                  <li><a href="/documents/RM_Behaviour Policy.pdf" target="_blank">Behaviour Policy</a></li>
                  <li><a href="/documents/RM_Anti-Bullying Policy.pdf" target="_blank">Anti-Bullying Policy</a></li>
                  <li><a href="/documents/RMS_Attendance_Policy.pdf" target="_blank">Attendance Policy</a></li>
                  <li><a href="/documents/RM_Complaint Policy.pdf" target="_blank">Complaint Policy</a></li>
                  <li><a href="/documents/RM_Health_Safety_Policy.pdf" target="_blank">Health &amp; Safety</a></li>
                  <li><a href="/documents/RM_Pupil_Progress.pdf" target="_blank">Pupil Progress Policy</a></li>
                  <li><a href="/documents/Rawdah EAL Montessori Primary School Draft v01 2025.pdf" target="_blank" title="Rawdah Montessori – EAL Policy">EAL Policy</a></li>
                  <li><a href="/documents/Rawdah EHC_Montessori Primary School Draft v01 2025.pdf" target="_blank" title="Rawdah Montessori – EHC Policy">EHC Policy</a></li>
                  <li><a href="/documents/Rawdah First Aid Policy Montessori Primary School Draft v01.pdf" target="_blank" title="Rawdah Montessori – First Aid Policy">First Aid Policy</a></li>
                  <li><a href="/documents/Rawdah RSE_Montessori Primary School Draft v01.pdf" target="_blank" title="Rawdah Montessori – RSE Policy">RSE Policy</a></li>
                  <li><a href="/documents/Statement of Academic Performance.pdf" target="_blank" title="Rawdah Montessori – Academic Reporting">Academic Reporting</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer_bottom align-items-center">
          <div className="col-md-6">
            <div className="footer_bottom_links">
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer_social">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="footer_copy">
              <p>&copy; 2026 Rawdah | All Rights Reserved.</p>
              <address>
                <p>RAWDAH MONTESSORI | MUSTAFA MOUNT | EMM LANE | BRADFORD | BD9 4JL</p>
                <p>Proprietors: Rawdah Montessori Ltd ; Chair of Governors: Sohaib Tanvir &nbsp;<a href="mailto:chair@rawdahmontessori.co.uk">chair@rawdahmontessori.co.uk</a></p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**Important:** All `assets/documents/` paths become `/documents/` and `assets/images/` become `/images/`.

**Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer component with policy links"
```

---

### Task 7: Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Build the home page**

Convert `index.html` body content (lines 62-247) to JSX. Import Header and Footer. The page is a server component — no `"use client"` needed.

Convert all HTML sections directly to JSX:
- Banner section (lines 62-75)
- Mission section (lines 78-103)
- Vision section (lines 107-135)
- About Montessori section (lines 138-163)
- Admission section (lines 167-186)
- Recruitment section (lines 189-247)

Key JSX conversions:
- `class` → `className`
- `for` → `htmlFor`
- Self-close `<img>` and `<br>` tags
- `href="assets/..."` → `href="/..."` for all asset references
- `<a href="#">` → `<a href="#">` (keep as-is for placeholder links)
- Registration CTA links → `href="/registration"`

The page should look like:

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Banner Section */}
      <section className="banner_main">
        {/* ... exact JSX conversion of banner HTML ... */}
      </section>
      {/* Mission Section */}
      <section className="mission_main" id="mission">
        {/* ... exact JSX conversion ... */}
      </section>
      {/* Vision Section */}
      <section className="vision_main" id="vision">
        {/* ... exact JSX conversion ... */}
      </section>
      {/* About Montessori Section */}
      <section className="mission_main about_main" id="about">
        {/* ... exact JSX conversion ... */}
      </section>
      {/* Admission Section */}
      <section className="admission_main" id="admission">
        {/* ... exact JSX conversion ... */}
      </section>
      {/* Recruitment Section */}
      <section className="recruitment_main" id="recruitment">
        {/* ... exact JSX conversion ... */}
      </section>
      <Footer />
    </>
  );
}
```

**Step 2: Verify the home page**

Run `npm run dev`. Navigate to `http://localhost:3000`. Visually compare against the original `index.html` opened directly in a browser. Check:
- Banner background image loads
- Logo appears in header
- All section backgrounds and colors match
- Recruitment cards display correctly
- Footer links work
- Mobile hamburger menu works at narrow viewport
- Header becomes fixed on scroll

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: convert home page HTML to Next.js page component"
```

---

### Task 8: Registration Page (Static Markup)

**Files:**
- Create: `src/app/registration/page.tsx`

**Step 1: Build registration page with static form**

Convert `registration.html` body content to JSX. Uses Header (with `linkPrefix="/"`) and Footer. The form is initially static markup — we'll make it interactive in Task 12.

The page is a server component that renders the form HTML. The form fields match `registration.html` exactly:
- Year of entry select
- Child Details box (first name, last name, name to be used, DOB selects, gender radios)
- Home Address box (street, address line 2, city, county, postcode, country)
- Parent/Guardian 1 box (title, first name, last name, relationship select, mobile, email, confirm email, occupation, work address)
- Parent/Guardian 2 box (same fields as Parent 1)
- School tour question (select)
- Health conditions (yes/no radios)
- Previous school (yes/no radios)
- Ages of other children (text)
- Names of children already attending (text)
- Nationality (select)
- Ethnic origin (select)
- Language spoken at home (text)
- Social care involvement (yes/no radios)
- Further relevant information (textarea)
- How did you hear about us (radio options + Other text)
- Payment box (application fee display, card details, billing address, agreement checkboxes)
- Submit button

Key: convert `class` → `className`, self-close tags, fix asset paths. Use the same Header with `linkPrefix="/"` so nav links go to `/#mission`, `/#vision`, etc.

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegistrationPage() {
  return (
    <>
      <Header linkPrefix="/" />
      <section className="register_banner_main">
        {/* ... banner JSX ... */}
      </section>
      <section className="register_main">
        {/* ... form JSX — exact conversion of registration.html lines 77-742 ... */}
      </section>
      <Footer />
    </>
  );
}
```

**Note:** The footer on registration.html is slightly different from index.html (has an "About Us" button and different quick links in column 2). Use the registration-specific footer content. Consider making the Footer accept a `variant` prop, or just inline the registration footer in this page. Simplest: make the Footer component match the index.html version (which has the policy links) since that's more complete, and use it on both pages.

**Step 2: Verify registration page**

Navigate to `http://localhost:3000/registration`. Compare against original `registration.html`. Check:
- Banner with "Registration of Interest" heading
- All form sections render correctly
- Form styling (card backgrounds, borders, inputs) matches
- Background decorative image appears on left side

**Step 3: Commit**

```bash
git add src/app/registration/page.tsx
git commit -m "feat: convert registration page HTML to Next.js page component"
```

---

### Task 9: Archive Page

**Files:**
- Create: `src/app/archive/page.tsx`

**Step 1: Build archive page**

Convert `archive.html` body content (lines 62-366) to JSX. Uses Header with `linkPrefix="/"`. The archive page has its own unique footer (`archive_footer_main`), so include that inline rather than using the shared Footer component.

Sections to convert:
- Banner (archive-specific with subtitle)
- Rawdah Montessori section
- Mission Statement section
- Our Schools section (3 school cards + alumni area)
- Our Philosophy section
- Small Group Tuition section
- Eco-School Principles section
- Enterprise section
- Emotional Well-Being section (2 parts)
- Faith, Citizenship & Lifestyles section
- Archive Footer (with navigation, useful info, social, copyright, bottom stripes)

```tsx
import Header from "@/components/Header";

export default function ArchivePage() {
  return (
    <>
      <Header linkPrefix="/" />
      {/* All archive sections... */}
      {/* Archive-specific footer (inline, not shared Footer) */}
      <footer className="archive_footer_main">
        {/* ... archive footer JSX ... */}
      </footer>
    </>
  );
}
```

**Step 2: Verify archive page**

Navigate to `http://localhost:3000/archive`. Compare against original. Check:
- Archive banner with different background
- Our Schools cards (green, blue, gold)
- Philosophy section with green background
- Well-being sections with side images
- Archive footer with stripes at bottom

**Step 3: Commit**

```bash
git add src/app/archive/page.tsx
git commit -m "feat: convert archive page HTML to Next.js page component"
```

---

### Task 10: Prisma Schema + Database Setup

**Files:**
- Create: `prisma/schema.prisma`

**Step 1: Initialize Prisma**

```bash
npx prisma init --datasource-provider mysql
```

This creates `prisma/schema.prisma` and updates `.env` with `DATABASE_URL`.

**Step 2: Write the schema**

Replace the generated schema with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Registration {
  id                       Int      @id @default(autoincrement())
  createdAt                DateTime @default(now())

  // Year of entry
  yearOfEntry              String

  // Child Details
  childFirstName           String
  childLastName            String
  childNameUsed            String?
  childDobDay              String
  childDobMonth            String
  childDobYear             String
  childGender              String

  // Home Address
  homeStreetAddress        String
  homeAddressLine2         String?
  homeCity                 String
  homeCounty               String?
  homePostcode             String
  homeCountry              String

  // Parent/Guardian 1
  parent1Title             String?
  parent1FirstName         String
  parent1LastName          String
  parent1Relationship      String
  parent1Mobile            String
  parent1Email             String
  parent1Occupation        String?
  parent1WorkStreetAddress String?
  parent1WorkAddressLine2  String?
  parent1WorkCity          String?
  parent1WorkCounty        String?
  parent1WorkPostcode      String?
  parent1WorkCountry       String?

  // Parent/Guardian 2
  parent2Title             String?
  parent2FirstName         String?
  parent2LastName          String?
  parent2Relationship      String?
  parent2Mobile            String?
  parent2Email             String?
  parent2Occupation        String?
  parent2WorkStreetAddress String?
  parent2WorkAddressLine2  String?
  parent2WorkCity          String?
  parent2WorkCounty        String?
  parent2WorkPostcode      String?
  parent2WorkCountry       String?

  // Additional questions
  schoolTourAttended       String?
  healthConditions         String?
  previousSchool           String?
  otherChildrenAges        String?
  childrenAlreadyAttending String?
  nationality              String?
  ethnicOrigin             String?
  languageAtHome           String?
  socialCareInvolvement    String?
  furtherInformation       String?  @db.Text
  hearAboutSchool          String?

  // Payment & Consent
  feesAgreement            Boolean  @default(false)
  withdrawalAgreement      Boolean  @default(false)

  // LMS sync status
  lmsSynced                Boolean  @default(false)
  lmsSyncError             String?  @db.Text
}
```

**Step 3: Create Prisma client singleton**

```tsx
// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

**Step 4: Run migration**

Ensure MySQL is running and `DATABASE_URL` in `.env` is correct, then:

```bash
npx prisma migrate dev --name init
```

Expected: Migration creates the `Registration` table in MySQL.

**Step 5: Verify with Prisma Studio**

```bash
npx prisma studio
```

Expected: Opens browser showing the empty `Registration` table with all columns.

**Step 6: Commit**

```bash
git add prisma/ src/lib/db.ts
git commit -m "feat: add Prisma schema with Registration model and DB client"
```

---

### Task 11: LMS Integration Service

**Files:**
- Create: `src/lib/lmsService.ts`

**Step 1: Create the LMS service**

```tsx
// src/lib/lmsService.ts

interface RegistrationData {
  [key: string]: unknown;
}

interface LmsResult {
  success: boolean;
  error?: string;
}

export async function syncToLms(data: RegistrationData): Promise<LmsResult> {
  const apiUrl = process.env.IQRASS_API_URL;
  const apiKey = process.env.IQRASS_API_KEY;

  if (!apiUrl || !apiKey) {
    return { success: false, error: "LMS API URL or API key not configured" };
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { success: false, error: `LMS API returned ${response.status}: ${errorText}` };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: `LMS API call failed: ${message}` };
  }
}
```

**Step 2: Commit**

```bash
git add src/lib/lmsService.ts
git commit -m "feat: add IQRA SS LMS integration service"
```

---

### Task 12: Registration API Route

**Files:**
- Create: `src/app/api/registration/route.ts`

**Step 1: Create the API route**

```tsx
// src/app/api/registration/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { syncToLms } from "@/lib/lmsService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation — check required fields
    const required = [
      "childFirstName", "childLastName", "childDobDay", "childDobMonth",
      "childDobYear", "childGender", "homeStreetAddress", "homeCity",
      "homePostcode", "homeCountry", "parent1FirstName", "parent1LastName",
      "parent1Relationship", "parent1Mobile", "parent1Email",
      "feesAgreement", "withdrawalAgreement",
    ];

    const missing = required.filter((field) => !body[field]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Save to MySQL
    const registration = await prisma.registration.create({
      data: {
        yearOfEntry: body.yearOfEntry || "",
        childFirstName: body.childFirstName,
        childLastName: body.childLastName,
        childNameUsed: body.childNameUsed || null,
        childDobDay: body.childDobDay,
        childDobMonth: body.childDobMonth,
        childDobYear: body.childDobYear,
        childGender: body.childGender,
        homeStreetAddress: body.homeStreetAddress,
        homeAddressLine2: body.homeAddressLine2 || null,
        homeCity: body.homeCity,
        homeCounty: body.homeCounty || null,
        homePostcode: body.homePostcode,
        homeCountry: body.homeCountry,
        parent1Title: body.parent1Title || null,
        parent1FirstName: body.parent1FirstName,
        parent1LastName: body.parent1LastName,
        parent1Relationship: body.parent1Relationship,
        parent1Mobile: body.parent1Mobile,
        parent1Email: body.parent1Email,
        parent1Occupation: body.parent1Occupation || null,
        parent1WorkStreetAddress: body.parent1WorkStreetAddress || null,
        parent1WorkAddressLine2: body.parent1WorkAddressLine2 || null,
        parent1WorkCity: body.parent1WorkCity || null,
        parent1WorkCounty: body.parent1WorkCounty || null,
        parent1WorkPostcode: body.parent1WorkPostcode || null,
        parent1WorkCountry: body.parent1WorkCountry || null,
        parent2Title: body.parent2Title || null,
        parent2FirstName: body.parent2FirstName || null,
        parent2LastName: body.parent2LastName || null,
        parent2Relationship: body.parent2Relationship || null,
        parent2Mobile: body.parent2Mobile || null,
        parent2Email: body.parent2Email || null,
        parent2Occupation: body.parent2Occupation || null,
        parent2WorkStreetAddress: body.parent2WorkStreetAddress || null,
        parent2WorkAddressLine2: body.parent2WorkAddressLine2 || null,
        parent2WorkCity: body.parent2WorkCity || null,
        parent2WorkCounty: body.parent2WorkCounty || null,
        parent2WorkPostcode: body.parent2WorkPostcode || null,
        parent2WorkCountry: body.parent2WorkCountry || null,
        schoolTourAttended: body.schoolTourAttended || null,
        healthConditions: body.healthConditions || null,
        previousSchool: body.previousSchool || null,
        otherChildrenAges: body.otherChildrenAges || null,
        childrenAlreadyAttending: body.childrenAlreadyAttending || null,
        nationality: body.nationality || null,
        ethnicOrigin: body.ethnicOrigin || null,
        languageAtHome: body.languageAtHome || null,
        socialCareInvolvement: body.socialCareInvolvement || null,
        furtherInformation: body.furtherInformation || null,
        hearAboutSchool: body.hearAboutSchool || null,
        feesAgreement: body.feesAgreement === true,
        withdrawalAgreement: body.withdrawalAgreement === true,
      },
    });

    // Sync to LMS (non-blocking — don't fail the registration if LMS is down)
    const lmsResult = await syncToLms(body);

    if (!lmsResult.success) {
      // Update registration with sync error for later retry
      await prisma.registration.update({
        where: { id: registration.id },
        data: { lmsSynced: false, lmsSyncError: lmsResult.error },
      });
      console.error(`LMS sync failed for registration ${registration.id}:`, lmsResult.error);
    } else {
      await prisma.registration.update({
        where: { id: registration.id },
        data: { lmsSynced: true },
      });
    }

    return NextResponse.json(
      { success: true, id: registration.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your registration" },
      { status: 500 }
    );
  }
}
```

**Step 2: Test the API route with curl**

With the dev server running:

```bash
curl -X POST http://localhost:3000/api/registration \
  -H "Content-Type: application/json" \
  -d '{
    "yearOfEntry": "2026",
    "childFirstName": "Test",
    "childLastName": "Child",
    "childDobDay": "15",
    "childDobMonth": "March",
    "childDobYear": "2020",
    "childGender": "Boy",
    "homeStreetAddress": "123 Test St",
    "homeCity": "Bradford",
    "homePostcode": "BD9 4JL",
    "homeCountry": "United Kingdom",
    "parent1FirstName": "Test",
    "parent1LastName": "Parent",
    "parent1Relationship": "Mother",
    "parent1Mobile": "07700900000",
    "parent1Email": "test@example.com",
    "feesAgreement": true,
    "withdrawalAgreement": true
  }'
```

Expected: `{"success":true,"id":1}` with status 201.

**Step 3: Verify data in database**

```bash
npx prisma studio
```

Check that the test record appears in the Registration table.

**Step 4: Test validation with missing fields**

```bash
curl -X POST http://localhost:3000/api/registration \
  -H "Content-Type: application/json" \
  -d '{"childFirstName": "Test"}'
```

Expected: `{"error":"Missing required fields: childLastName, childDobDay, ..."}` with status 400.

**Step 5: Commit**

```bash
git add src/app/api/registration/route.ts
git commit -m "feat: add registration API route with MySQL save and LMS sync"
```

---

### Task 13: Interactive Registration Form (Client Component)

**Files:**
- Create: `src/components/RegistrationForm.tsx`
- Modify: `src/app/registration/page.tsx`

**Step 1: Create RegistrationForm client component**

This wraps the form HTML from Task 8 with `"use client"`, React state, and form submission logic. The form markup stays identical — we just add:
- `name` attributes to all inputs/selects
- `onChange` handlers to collect form data into state
- `onSubmit` handler that POSTs to `/api/registration`
- Loading/success/error states for the submit button

```tsx
// src/components/RegistrationForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Registration failed");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  if (status === "success") {
    return (
      <div className="register" style={{ textAlign: "center", padding: "60px 0" }}>
        <h2>Thank You!</h2>
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#003D55" }}>
          Your registration of interest has been submitted successfully. We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        {/*
          IMPORTANT: Copy the exact form HTML from Task 8's registration page,
          but add these attributes to every input/select/textarea:
          - name="fieldName" (matching the Prisma schema field names)
          - onChange={handleChange}
          - For radios: value="Boy"/"Girl" etc.
          - For checkboxes: name="feesAgreement" etc.
        */}

        {/* ... all form sections with name + onChange attributes ... */}

        <div className="form_submit">
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit form and pay application fee"}
          </button>
        </div>

        {status === "error" && (
          <p style={{ color: "#C93B3B", marginTop: "15px", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
```

**Step 2: Update registration page to use the client component**

Modify `src/app/registration/page.tsx` to replace the static form with `<RegistrationForm />`:

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegistrationPage() {
  return (
    <>
      <Header linkPrefix="/" />
      <section className="register_banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="register_banner">
                <h1>Registration of Interest</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="register_main">
        <div className="register_bg">
          <img src="/images/register/register-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

**Step 3: Test form submission end-to-end**

1. Navigate to `http://localhost:3000/registration`
2. Fill in all required fields
3. Click submit
4. Verify success message appears
5. Check Prisma Studio — new record should appear in Registration table

**Step 4: Commit**

```bash
git add src/components/RegistrationForm.tsx src/app/registration/page.tsx
git commit -m "feat: add interactive registration form with API submission"
```

---

### Task 14: Update Deployment Configuration

**Files:**
- Modify: `.github/workflows/deployment.yaml`
- Create: `ecosystem.config.js` (PM2 config)

**Step 1: Create PM2 config**

```js
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "rawdah-montessori",
      script: "node_modules/.bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
```

**Step 2: Update GitHub Actions workflow**

Replace the SFTP deploy with an SSH-based deploy that:
1. Builds the Next.js app
2. Deploys via rsync/SSH
3. Runs Prisma migrations
4. Restarts PM2

```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma client
        run: npx prisma generate

      - name: Build
        run: npm run build

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/rawdah-montessori
            git pull origin main
            npm ci --production
            npx prisma generate
            npx prisma migrate deploy
            npm run build
            pm2 restart rawdah-montessori || pm2 start ecosystem.config.js
```

**Note:** This requires new GitHub secrets: `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`. The old FTP secrets can be removed once deployment is verified working.

**Step 3: Commit**

```bash
git add .github/workflows/deployment.yaml ecosystem.config.js
git commit -m "feat: update deployment for Next.js with SSH deploy and PM2"
```

---

### Task 15: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update project documentation**

Update CLAUDE.md to reflect the new tech stack:

- Tech stack: Next.js 15, React 19, TypeScript, Prisma, MySQL
- Project structure: `src/app/`, `src/components/`, `src/lib/`, `prisma/`
- Development commands: `npm run dev`, `npx prisma studio`, `npx prisma migrate dev`
- Remove references to jQuery, vendored libraries, static HTML files
- Keep design tokens (unchanged)
- Update deployment section

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for Next.js stack"
```

---

### Task 16: Clean Up Old Static Files

**Files:**
- Delete: `index.html`, `registration.html`, `archive.html`
- Delete: `assets/` directory (all contents now in `public/` or `src/`)

**Step 1: Remove old files**

Only do this after verifying all 3 pages work correctly in the Next.js app.

```bash
git rm index.html registration.html archive.html
git rm -r assets/
```

**Step 2: Final verification**

Run `npm run dev` and verify:
- Home page: http://localhost:3000
- Registration: http://localhost:3000/registration
- Archive: http://localhost:3000/archive
- All images load, fonts render, layouts match originals
- Registration form submits and saves to database

**Step 3: Commit**

```bash
git commit -m "chore: remove old static HTML files and assets directory"
```

---

## Summary

| Task | Description | Depends on |
|------|-------------|------------|
| 1 | Scaffold Next.js project | — |
| 2 | Migrate static assets to public/ | 1 |
| 3 | Create globals.css from style.css + responsive.css | 2 |
| 4 | Root layout with fonts + CDN links | 3 |
| 5 | Header + MobileMenu + ScrollHeader components | 4 |
| 6 | Footer component | 4 |
| 7 | Home page | 5, 6 |
| 8 | Registration page (static markup) | 5, 6 |
| 9 | Archive page | 5 |
| 10 | Prisma schema + database setup | 1 |
| 11 | LMS integration service | 1 |
| 12 | Registration API route | 10, 11 |
| 13 | Interactive registration form | 8, 12 |
| 14 | Update deployment config | 1 |
| 15 | Update CLAUDE.md | 13, 14 |
| 16 | Clean up old static files | 7, 8, 9, 13 |

**Parallel tracks:**
- Tasks 5-9 (frontend components) can be parallelized with Tasks 10-12 (backend)
- Task 14 (deployment) is independent and can run anytime after Task 1
