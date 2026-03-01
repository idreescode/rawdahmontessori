# Dashboard Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a password-protected Dashboard page where school inspectors can access all required PDF documents organised by 10 categories.

**Architecture:** Cookie-based auth with a single shared password stored in `.env`. Next.js middleware protects `/dashboard/documents`. Login page at `/dashboard` validates password via API route and sets HTTP-only cookie. Documents page renders a data-driven grid of PDF links grouped by category.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Node.js `crypto` (built-in), Bootstrap 5.3.8, Font Awesome 6.7.2

---

### Task 1: Add DASHBOARD_PASSWORD to environment config

**Files:**
- Modify: `.env.example`
- Modify: `.env` (local only, not committed)

**Step 1: Add env variable to .env.example**

In `.env.example`, append after the last line:

```
DASHBOARD_PASSWORD=change-me-to-a-secure-password
```

**Step 2: Add actual password to local .env**

In `.env`, append:

```
DASHBOARD_PASSWORD=your-actual-password-here
```

**Step 3: Commit**

```bash
git add .env.example
git commit -m "feat: add DASHBOARD_PASSWORD env variable"
```

---

### Task 2: Create the auth API route

**Files:**
- Create: `src/app/api/dashboard/auth/route.ts`

**Step 1: Create the auth route**

Create `src/app/api/dashboard/auth/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.DASHBOARD_PASSWORD;

    if (!correctPassword) {
      console.error("DASHBOARD_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Dashboard is not configured" },
        { status: 500 }
      );
    }

    if (!password || password !== correctPassword) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 }
      );
    }

    // Create a signed token: timestamp + HMAC signature
    const timestamp = Date.now().toString();
    const signature = crypto
      .createHmac("sha256", correctPassword)
      .update(timestamp)
      .digest("hex");
    const token = `${timestamp}.${signature}`;

    const response = NextResponse.json({ success: true });
    response.cookies.set("dashboard_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
```

**Step 2: Verify the file compiles**

Run: `npx tsc --noEmit src/app/api/dashboard/auth/route.ts` or just `npm run build` later.

**Step 3: Commit**

```bash
git add src/app/api/dashboard/auth/route.ts
git commit -m "feat: add dashboard auth API route"
```

---

### Task 3: Create Next.js middleware for route protection

**Files:**
- Create: `src/middleware.ts`

**Step 1: Create the middleware**

Create `src/middleware.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("dashboard_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Check if token is expired (24 hours)
  const tokenAge = Date.now() - parseInt(timestamp, 10);
  if (tokenAge > 24 * 60 * 60 * 1000) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.delete("dashboard_session");
    return response;
  }

  // Verify HMAC signature
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const expectedSignature = crypto
    .createHmac("sha256", password)
    .update(timestamp)
    .digest("hex");

  if (signature !== expectedSignature) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.delete("dashboard_session");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/documents",
};
```

**Step 2: Commit**

```bash
git add src/middleware.ts
git commit -m "feat: add middleware to protect dashboard/documents route"
```

---

### Task 4: Create the dashboard document data

**Files:**
- Create: `src/app/dashboard/data.ts`

**Step 1: Create the data file**

This file defines all 10 categories and their documents. Using a data file keeps the page component clean and makes it easy to update documents later.

Create `src/app/dashboard/data.ts`:

```typescript
export interface DashboardDocument {
  name: string;
  filename: string; // PDF filename in public/documents/dashboard/<category-slug>/
}

export interface DashboardCategory {
  title: string;
  slug: string;
  documents: DashboardDocument[];
}

export const dashboardCategories: DashboardCategory[] = [
  {
    title: "Curriculum",
    slug: "curriculum",
    documents: [
      { name: "Arabic", filename: "arabic.pdf" },
      { name: "Cultural Studies", filename: "cultural-studies.pdf" },
      { name: "English", filename: "english.pdf" },
      { name: "Geometry", filename: "geometry.pdf" },
      { name: "Maths", filename: "maths.pdf" },
      { name: "PE", filename: "pe.pdf" },
      { name: "Practical Life", filename: "practical-life.pdf" },
      { name: "Science", filename: "science.pdf" },
      { name: "Sensorial", filename: "sensorial.pdf" },
      { name: "Technology", filename: "technology.pdf" },
    ],
  },
  {
    title: "Health & Safety",
    slug: "health-and-safety",
    documents: [
      { name: "Fire Risk Assessment", filename: "fire-risk-assessment.pdf" },
      { name: "Health and Safety Risk Assessment", filename: "health-and-safety-risk-assessment.pdf" },
      { name: "Disability Access Risk Assessment", filename: "disability-access-risk-assessment.pdf" },
      { name: "Legionella Risk Assessment", filename: "legionella-risk-assessment.pdf" },
      { name: "Legionella Sample Test", filename: "legionella-sample-test.pdf" },
      { name: "Electrical Safety Certificate", filename: "electrical-safety-certificate.pdf" },
      { name: "Heating Safety Certificate", filename: "heating-safety-certificate.pdf" },
      { name: "Emergency Light Certificate", filename: "emergency-light-certificate.pdf" },
      { name: "Fire Extinguisher Service Certificate", filename: "fire-extinguisher-service-certificate.pdf" },
      { name: "PAT Testing Certificate", filename: "pat-testing-certificate.pdf" },
    ],
  },
  {
    title: "Health & Safety Policies",
    slug: "health-and-safety-policies",
    documents: [
      { name: "Arson Prevention Policy", filename: "arson-prevention-policy.pdf" },
      { name: "Fire Evacuation Policy", filename: "fire-evacuation-policy.pdf" },
      { name: "Fire Risk Assessment Checklist", filename: "fire-risk-assessment-checklist.pdf" },
      { name: "Fire Safety Inspection Log Sheet", filename: "fire-safety-inspection-log-sheet.pdf" },
      { name: "Fire Safety Policy", filename: "fire-safety-policy.pdf" },
      { name: "Manual Handling Policy", filename: "manual-handling-policy.pdf" },
      { name: "Medical Policy", filename: "medical-policy.pdf" },
      { name: "Legionella Risk Policy", filename: "legionella-risk-policy.pdf" },
      { name: "Health & Safety Policy", filename: "health-and-safety-policy.pdf" },
    ],
  },
  {
    title: "HR Policies",
    slug: "hr-policies",
    documents: [
      { name: "Disciplinary Policies", filename: "disciplinary-policies.pdf" },
      { name: "Capability Appeal Procedure", filename: "capability-appeal-procedure.pdf" },
      { name: "Employment Ex Offenders Policy", filename: "employment-ex-offenders-policy.pdf" },
      { name: "Staff Attendance and Absence Policy", filename: "staff-attendance-and-absence-policy.pdf" },
      { name: "Lockdown Procedure Policy", filename: "lockdown-procedure-policy.pdf" },
      { name: "Staff Code of Conduct Policy", filename: "staff-code-of-conduct-policy.pdf" },
      { name: "Equality, Diversity and Inclusion Policy", filename: "equality-diversity-and-inclusion-policy.pdf" },
      { name: "Staff Grievance Policy", filename: "staff-grievance-policy.pdf" },
      { name: "Staff Harassment Policy", filename: "staff-harassment-policy.pdf" },
      { name: "Staff Performance Policy", filename: "staff-performance-policy.pdf" },
    ],
  },
  {
    title: "School Policies",
    slug: "school-policies",
    documents: [
      { name: "Additional Learning Policy & SEND Policy", filename: "additional-learning-send-policy.pdf" },
      { name: "Debt and Fees Policy", filename: "debt-and-fees-policy.pdf" },
      { name: "Privacy & CCTV & Photography Policy", filename: "privacy-cctv-photography-policy.pdf" },
      { name: "Access & Security Policy", filename: "access-and-security-policy.pdf" },
      { name: "Admission Policy", filename: "admission-policy.pdf" },
      { name: "EAL Policy", filename: "eal-policy.pdf" },
      { name: "RE Policy", filename: "re-policy.pdf" },
      { name: "Academic Performance & Reporting", filename: "academic-performance-and-reporting.pdf" },
      { name: "RSE Policy", filename: "rse-policy.pdf" },
      { name: "EHC Policy", filename: "ehc-policy.pdf" },
      { name: "Safer Recruitment Policy", filename: "safer-recruitment-policy.pdf" },
      { name: "First Aid Policy", filename: "first-aid-policy.pdf" },
      { name: "Off Site PE Policy", filename: "off-site-pe-policy.pdf" },
      { name: "Staff Leadership & Training Policy", filename: "staff-leadership-and-training-policy.pdf" },
      { name: "Attendance Policy", filename: "attendance-policy.pdf" },
      { name: "British Values & Montessori & Islamic Ethos Policy", filename: "british-values-montessori-islamic-ethos-policy.pdf" },
      { name: "Curriculum Policy", filename: "curriculum-policy.pdf" },
      { name: "Pupil Progress Policy", filename: "pupil-progress-policy.pdf" },
      { name: "Complaint Policy", filename: "complaint-policy.pdf" },
      { name: "Safeguarding Policy", filename: "safeguarding-policy.pdf" },
      { name: "Anti Bullying Policy", filename: "anti-bullying-policy.pdf" },
      { name: "Behaviour Policy", filename: "behaviour-policy.pdf" },
    ],
  },
  {
    title: "Governance & Finance",
    slug: "governance-and-finance",
    documents: [
      { name: "Governing Body Structure", filename: "governing-body-structure.pdf" },
      { name: "Governing Body Training & Development Policy", filename: "governing-body-training-and-development-policy.pdf" },
      { name: "Finance & Scheme of Delegation Policy", filename: "finance-and-scheme-of-delegation-policy.pdf" },
      { name: "Insurance Policy & Documentation", filename: "insurance-policy-and-documentation.pdf" },
    ],
  },
  {
    title: "Building",
    slug: "building",
    documents: [
      { name: "Lease", filename: "lease.pdf" },
      { name: "Service Contract", filename: "service-contract.pdf" },
    ],
  },
  {
    title: "Safer Recruitment",
    slug: "safer-recruitment",
    documents: [
      { name: "Safer Recruitment Policy", filename: "safer-recruitment-policy.pdf" },
      { name: "Single Central Record", filename: "single-central-record.pdf" },
    ],
  },
  {
    title: "School Timetable & Calendar",
    slug: "school-timetable-and-calendar",
    documents: [
      { name: "School Timetable", filename: "school-timetable.pdf" },
      { name: "School Year Calendar Draft", filename: "school-year-calendar-draft.pdf" },
    ],
  },
  {
    title: "School Marketing",
    slug: "school-marketing",
    documents: [
      { name: "Marketing Policy", filename: "marketing-policy.pdf" },
      { name: "School Brochure", filename: "school-brochure.pdf" },
    ],
  },
];
```

**Step 2: Commit**

```bash
git add src/app/dashboard/data.ts
git commit -m "feat: add dashboard document category data"
```

---

### Task 5: Create the DashboardLogin client component

**Files:**
- Create: `src/app/dashboard/components/DashboardLogin.tsx`

**Step 1: Create the login form component**

Create `src/app/dashboard/components/DashboardLogin.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/dashboard/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/dashboard/documents");
      } else {
        setError(data.error || "Incorrect password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="dashboard_login_form">
      <div className="dashboard_login_logo">
        <img src="/images/logo.png" alt="Rawdah Montessori" />
      </div>
      <h2>Dashboard</h2>
      <div className="dashboard_login_field">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
        />
      </div>
      {error && <p className="dashboard_login_error">{error}</p>}
      <button type="submit" className="btn_style" disabled={loading}>
        {loading ? "Verifying..." : "Access Dashboard"}
      </button>
    </form>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/dashboard/components/DashboardLogin.tsx
git commit -m "feat: add DashboardLogin client component"
```

---

### Task 6: Create the dashboard login page

**Files:**
- Create: `src/app/dashboard/page.tsx`

**Step 1: Create the login page**

Create `src/app/dashboard/page.tsx`:

```tsx
import DashboardLogin from "./components/DashboardLogin";

export const metadata = {
  title: "Dashboard — Rawdah Montessori Primary School",
};

export default function DashboardPage() {
  return (
    <section className="dashboard_login_main">
      <div className="dashboard_login_overlay"></div>
      <div className="dashboard_login_card">
        <DashboardLogin />
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/dashboard/page.tsx
git commit -m "feat: add dashboard login page"
```

---

### Task 7: Create the dashboard documents page

**Files:**
- Create: `src/app/dashboard/documents/page.tsx`

**Step 1: Create the documents page**

Create `src/app/dashboard/documents/page.tsx`:

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dashboardCategories } from "../data";

export const metadata = {
  title: "Dashboard — Rawdah Montessori Primary School",
};

export default function DashboardDocumentsPage() {
  return (
    <>
      <Header linkPrefix="/" />

      {/* Banner */}
      <section className="dashboard_banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dashboard_banner">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="dashboard_docs_main">
        <div className="container">
          {dashboardCategories.map((category) => (
            <div key={category.slug} className="dashboard_category">
              <h2>{category.title}</h2>
              <div className="dashboard_category_underline"></div>
              <div className="row">
                {category.documents.map((doc) => (
                  <div key={doc.filename} className="col-lg-4 col-md-6 col-12">
                    <a
                      href={`/documents/dashboard/${category.slug}/${doc.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dashboard_doc_card"
                    >
                      <i className="fa-solid fa-file-pdf"></i>
                      <span>{doc.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/dashboard/documents/page.tsx
git commit -m "feat: add dashboard documents page"
```

---

### Task 8: Add DASHBOARD nav link to Header

**Files:**
- Modify: `src/components/Header.tsx:24`

**Step 1: Add the nav link**

In `src/components/Header.tsx`, after line 24 (the RECRUITMENT `<li>`), add:

```tsx
                  <li><Link href="/dashboard">DASHBOARD</Link></li>
```

The `Link` import already exists on line 3.

**Step 2: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add Dashboard link to navigation"
```

---

### Task 9: Add dashboard CSS styles

**Files:**
- Modify: `public/css/styles.css` (append before the first `@media` query at line 1382)

**Step 1: Add dashboard login page styles**

Insert the following CSS before line 1382 (`@media all and (max-width: 1550px)`) in `public/css/styles.css`:

```css
/*=================  Start Dashboard Login Section  =================*/
.dashboard_login_main{
	background: url('/images/banner-bg2.jpg') no-repeat scroll center center / cover;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.dashboard_login_overlay{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(179.82deg, rgba(0, 0, 0, 0.66) 30.72%, rgba(0, 0, 0, 0) 120.91%),
	linear-gradient(180deg, rgba(0, 61, 85, 0.29) 1.85%, rgba(0, 61, 85, 0.058) 38.42%, rgba(0, 61, 85, 0) 73.88%);
}
.dashboard_login_card{
	background: #FFFFFF;
	border-radius: 12px;
	padding: 50px 45px;
	max-width: 460px;
	width: 100%;
	position: relative;
	z-index: 2;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
.dashboard_login_logo{
	text-align: center;
	margin-bottom: 30px;
}
.dashboard_login_logo img{
	width: 220px;
	height: auto;
}
.dashboard_login_form h2{
	text-align: center;
	margin-bottom: 30px;
	font-size: 32px;
}
.dashboard_login_field{
	margin-bottom: 20px;
}
.dashboard_login_field input{
	width: 100%;
	padding: 14px 18px;
	font-size: 16px;
	border: 1px solid #ddd;
	border-radius: 6px;
	font-family: 'Avenir Next LT Pro';
	outline: none;
	transition: border-color 0.3s;
}
.dashboard_login_field input:focus{
	border-color: #003D55;
}
.dashboard_login_error{
	color: #dc3545;
	font-size: 14px;
	margin-bottom: 15px;
	text-align: center;
}
.dashboard_login_form .btn_style{
	width: 100%;
	text-align: center;
	cursor: pointer;
	font-family: 'Avenir Next LT Pro';
}
.dashboard_login_form .btn_style:disabled{
	opacity: 0.7;
	cursor: not-allowed;
}

/*=================  Start Dashboard Banner Section  =================*/
.dashboard_banner_main{
	background: url('/images/banner-bg2.jpg') no-repeat scroll center center / cover;
	position: relative;
	z-index: 2;
}
.dashboard_banner_main::before{
	position: absolute;
	content: "";
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(179.82deg, rgba(0, 0, 0, 0.66) 30.72%, rgba(0, 0, 0, 0) 120.91%),
	linear-gradient(180deg, rgba(0, 61, 85, 0.29) 1.85%, rgba(0, 61, 85, 0.058) 38.42%, rgba(0, 61, 85, 0) 73.88%);
	z-index: -1;
}
.dashboard_banner{
	padding: 290px 0px 205px 0px;
}
.dashboard_banner h1{
	text-align: center;
	color: #FFFFFF;
	font-weight: 400;
}

/*=================  Start Dashboard Documents Section  =================*/
.dashboard_docs_main{
	padding: 80px 0px 100px 0px;
	background: #F8F2E3;
}
.dashboard_category{
	margin-bottom: 60px;
}
.dashboard_category:last-child{
	margin-bottom: 0;
}
.dashboard_category h2{
	text-transform: uppercase;
	font-size: 28px;
	margin-bottom: 8px;
}
.dashboard_category_underline{
	width: 80px;
	height: 3px;
	background: #BE9641;
	margin-bottom: 30px;
}
.dashboard_doc_card{
	display: flex;
	align-items: center;
	gap: 14px;
	background: #FFFFFF;
	border-radius: 8px;
	padding: 18px 22px;
	margin-bottom: 16px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	transition: all 0.3s;
	color: #003D55;
	text-decoration: none;
}
.dashboard_doc_card:hover{
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
	color: #BE9641;
	transform: translateY(-2px);
}
.dashboard_doc_card i{
	font-size: 28px;
	color: #BE9641;
	flex-shrink: 0;
}
.dashboard_doc_card span{
	font-size: 15px;
	font-weight: 500;
	line-height: 1.3;
}
```

**Step 2: Add responsive styles for dashboard**

In each media query section, add dashboard-specific overrides.

Inside `@media all and (max-width: 767px)` (line 1650), add:

```css
.dashboard_banner{ padding: 200px 0px 120px 0px; }
.dashboard_login_card{ margin: 0 15px; padding: 35px 25px; }
.dashboard_login_logo img{ width: 180px; }
.dashboard_docs_main{ padding: 50px 0px 70px 0px; }
.dashboard_category h2{ font-size: 22px; }
```

Inside `@media all and (max-width: 575px)` (line 1723), add:

```css
.dashboard_banner h1{ font-size: 36px; }
.dashboard_category{ margin-bottom: 40px; }
```

**Step 3: Commit**

```bash
git add public/css/styles.css
git commit -m "feat: add dashboard CSS styles with responsive breakpoints"
```

---

### Task 10: Create placeholder PDF directories

**Files:**
- Create: `public/documents/dashboard/` directory structure with `.gitkeep` files

**Step 1: Create the directory structure**

```bash
mkdir -p public/documents/dashboard/curriculum
mkdir -p public/documents/dashboard/health-and-safety
mkdir -p public/documents/dashboard/health-and-safety-policies
mkdir -p public/documents/dashboard/hr-policies
mkdir -p public/documents/dashboard/school-policies
mkdir -p public/documents/dashboard/governance-and-finance
mkdir -p public/documents/dashboard/building
mkdir -p public/documents/dashboard/safer-recruitment
mkdir -p public/documents/dashboard/school-timetable-and-calendar
mkdir -p public/documents/dashboard/school-marketing
```

**Step 2: Add .gitkeep to each directory**

```bash
for dir in public/documents/dashboard/*/; do
  touch "$dir/.gitkeep"
done
```

**Step 3: Commit**

```bash
git add public/documents/dashboard/
git commit -m "feat: add placeholder directories for dashboard PDFs"
```

---

### Task 11: Build and smoke test

**Step 1: Run the build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 2: Start dev server and test login flow**

```bash
npm run dev
```

Test manually:
1. Visit `http://localhost:3000` — verify DASHBOARD appears in nav
2. Click DASHBOARD — goes to `/dashboard` login page with banner background and centered card
3. Enter wrong password — shows "Incorrect password" error
4. Enter correct password — redirects to `/dashboard/documents`
5. Visit `/dashboard/documents` directly without cookie — redirects to `/dashboard`
6. After login, verify all 10 categories display with document cards
7. Test responsive layout at mobile widths

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete dashboard inspector document portal"
```

---

## File Summary

| Action | File |
|--------|------|
| Modify | `.env.example` — add `DASHBOARD_PASSWORD` |
| Create | `src/app/api/dashboard/auth/route.ts` — auth endpoint |
| Create | `src/middleware.ts` — route protection |
| Create | `src/app/dashboard/data.ts` — document category data |
| Create | `src/app/dashboard/components/DashboardLogin.tsx` — login form |
| Create | `src/app/dashboard/page.tsx` — login page |
| Create | `src/app/dashboard/documents/page.tsx` — documents page |
| Modify | `src/components/Header.tsx` — add DASHBOARD nav link |
| Modify | `public/css/styles.css` — dashboard styles |
| Create | `public/documents/dashboard/*/` — PDF placeholder directories |
