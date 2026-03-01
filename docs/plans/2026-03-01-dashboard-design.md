# Dashboard Design — Inspector Document Portal

## Overview

A password-protected Dashboard page for Rawdah Montessori Primary School where school inspectors can access all required policy documents, certificates, and operational files organised by category.

## Architecture

### Routes

- **`/dashboard`** — Login page (public). Banner background + centered login card with logo, "Dashboard" title, password field, submit button.
- **`/dashboard/documents`** — Protected documents page. Displays all 10 categories with their PDF links.

### API

- **`POST /api/dashboard/auth`** — Validates password against `DASHBOARD_PASSWORD` env var. On success, sets an HTTP-only `dashboard_session` cookie with a signed token (24-hour expiry).

### Middleware

- **`src/middleware.ts`** — Intercepts `/dashboard/documents` requests, validates the `dashboard_session` cookie, redirects to `/dashboard` if missing or invalid.

### Environment

- **`DASHBOARD_PASSWORD`** — New env variable storing the shared access password.

### Navigation

- Add "DASHBOARD" as the last item in the main nav bar (after RECRUITMENT), linking to `/dashboard`.

## Authentication Flow

1. User clicks DASHBOARD in nav → goes to `/dashboard`
2. User enters password → POST to `/api/dashboard/auth`
3. Server compares password to `DASHBOARD_PASSWORD` env var
4. On match: set HTTP-only cookie `dashboard_session` (signed, 24h expiry), redirect to `/dashboard/documents`
5. On mismatch: return error, display "Incorrect password" message
6. Middleware on `/dashboard/documents` checks cookie validity → redirect to `/dashboard` if invalid

## Document Categories

| # | Category | Documents |
|---|----------|-----------|
| 1 | CURRICULUM | Arabic, Cultural Studies, English, Geometry, Maths, PE, Practical Life, Science, Sensorial, Technology |
| 2 | HEALTH & SAFETY | Fire Risk Assessment, Health and Safety Risk Assessment, Disability Access Risk Assessment, Legionella Risk Assessment, Legionella Sample Test, Electrical Safety Certificate, Heating Safety Certificate, Emergency Light Certificate, Fire Extinguisher Service Certificate, PAT Testing Certificate |
| 3 | HEALTH & SAFETY POLICIES | Arson Prevention Policy, Fire Evacuation Policy, Fire Risk Assessment Checklist, Fire Safety Inspection Log Sheet, Fire Safety Policy, Manual Handling Policy, Medical Policy, Legionella Risk Policy, Health & Safety Policy |
| 4 | HR POLICIES | Disciplinary Policies, Capability Appeal Procedure, Employment Ex Offenders Policy, Staff Attendance and Absence Policy, Lockdown Procedure Policy, Staff Code of Conduct Policy, Equality Diversity and Inclusion Policy, Staff Grievance Policy, Staff Harassment Policy, Staff Performance Policy |
| 5 | SCHOOL POLICIES | Additional Learning Policy & SEND Policy, Debt and Fees Policy, Privacy & CCTV & Photography Policy, Access & Security Policy, Admission Policy, EAL Policy, RE Policy, Academic Performance & Reporting, RSE Policy, EHC Policy, Safer Recruitment Policy, First Aid Policy, Off Site PE Policy, Staff Leadership & Training Policy, Attendance Policy, British Values & Montessori & Islamic Ethos Policy, Curriculum Policy, Pupil Progress Policy, Complaint Policy, Safeguarding Policy, Anti Bullying Policy, Behaviour Policy |
| 6 | GOVERNANCE & FINANCE | Governing Body Structure, Governing Body Training & Development Policy, Finance & Scheme of Delegation Policy, Insurance Policy & Documentation |
| 7 | BUILDING | Lease, Service Contract |
| 8 | SAFER RECRUITMENT | Safer Recruitment Policy, Single Central Record |
| 9 | SCHOOL TIMETABLE & CALENDAR | School Timetable, School Year Calendar Draft |
| 10 | SCHOOL MARKETING | Marketing Policy, School Brochure |

## File Storage

PDFs stored at `public/documents/dashboard/<category-slug>/<filename>.pdf`:

```
public/documents/dashboard/
  curriculum/
  health-and-safety/
  health-and-safety-policies/
  hr-policies/
  school-policies/
  governance-and-finance/
  building/
  safer-recruitment/
  school-timetable-and-calendar/
  school-marketing/
```

Until actual PDFs are provided, links will use placeholder `#` hrefs.

## Visual Design

### Login Page (`/dashboard`)

- Full-width banner background image (`banner-bg.jpg`)
- Centered white card with:
  - School logo at top
  - "Dashboard" heading (Berlingske Serif, `#003D55`)
  - Password input field
  - "Access Dashboard" button (gold `#BE9641`, white text)
  - Error message area (red text for wrong password)

### Documents Page (`/dashboard/documents`)

- Standard site header with DASHBOARD nav item active
- Short banner section with "Dashboard" title
- Content on cream background (`#F8F2E3`)
- Each category section:
  - Category heading: uppercase, Berlingske Serif, `#003D55`, gold underline accent
  - Responsive grid of document cards (3 per row desktop, 2 tablet, 1 mobile)
  - Each card: white background, subtle shadow, Font Awesome `fa-file-pdf` icon, document name, gold hover accent
- Standard site footer

## New Files

- `src/app/dashboard/page.tsx` — Login page
- `src/app/dashboard/documents/page.tsx` — Documents page
- `src/app/dashboard/components/DashboardLogin.tsx` — Client component for login form
- `src/app/api/dashboard/auth/route.ts` — Password validation endpoint
- `src/middleware.ts` — Route protection middleware

## Modified Files

- `src/components/Header.tsx` — Add DASHBOARD nav link
- `.env.example` — Add `DASHBOARD_PASSWORD`
- `public/css/styles.css` — Add dashboard-specific styles
