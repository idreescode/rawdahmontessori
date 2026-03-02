# Dashboard PDF Linking Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move all PDFs from `public/documents/WEBSITE/` into `public/documents/dashboard/<slug>/` with clean kebab-case names, update `data.ts` to match actual files, rename "Health & Safety" to "Health Safety Checks", add "Enrichment & Sport" category, improve the dashboard frontend, and delete the WEBSITE folder.

**Architecture:** Static PDFs served from `public/documents/dashboard/<category-slug>/<filename>.pdf`. The `data.ts` file is the single source of truth for category titles, slugs, and document lists. The documents page at `src/app/dashboard/documents/page.tsx` renders cards by iterating over this data.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Bootstrap 5, Font Awesome 6, custom CSS in `public/css/styles.css`

---

### Task 1: Move CURRICULUM PDFs

**Files:**
- Move: `public/documents/WEBSITE/CURRICULUM/*.pdf` → `public/documents/dashboard/curriculum/`

**Step 1: Copy and rename PDFs**

```bash
cp "public/documents/WEBSITE/CURRICULUM/Arabic.pdf" "public/documents/dashboard/curriculum/arabic.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Cultural Studies .pdf" "public/documents/dashboard/curriculum/cultural-studies.pdf"
cp "public/documents/WEBSITE/CURRICULUM/English.pdf" "public/documents/dashboard/curriculum/english.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Geometry.pdf" "public/documents/dashboard/curriculum/geometry.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Maths.pdf" "public/documents/dashboard/curriculum/maths.pdf"
cp "public/documents/WEBSITE/CURRICULUM/PE.pdf" "public/documents/dashboard/curriculum/pe.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Practical Life & PSHE.pdf" "public/documents/dashboard/curriculum/practical-life-and-pshe.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Science.pdf" "public/documents/dashboard/curriculum/science.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Sensorial.pdf" "public/documents/dashboard/curriculum/sensorial.pdf"
cp "public/documents/WEBSITE/CURRICULUM/Technology.pdf" "public/documents/dashboard/curriculum/technology.pdf"
```

**Step 2: Verify all 10 files landed**

```bash
ls public/documents/dashboard/curriculum/ | wc -l
```
Expected: 10

---

### Task 2: Move HEALTH & SAFETY CHECKS PDFs

**Files:**
- Move: `public/documents/WEBSITE/HEALTH & SAFETY CHECKS/*.pdf` → `public/documents/dashboard/health-and-safety/`

**Step 1: Copy and rename PDFs**

```bash
cp "public/documents/WEBSITE/HEALTH & SAFETY CHECKS/Rawdah School  BD9 4JJ - Disability Access Risk Assessment 2025.pdf" "public/documents/dashboard/health-and-safety/disability-access-risk-assessment.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY CHECKS/Rawdah School  BD9 4JJ - Fire Risk Assessment 2025.pdf" "public/documents/dashboard/health-and-safety/fire-risk-assessment.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY CHECKS/Rawdah School  BD9 4JJ - Health  Safety Risk Assessment 2025.pdf" "public/documents/dashboard/health-and-safety/health-and-safety-risk-assessment.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY CHECKS/Rawdah School  BD9 4JJ - Legionella Risk Assessment 2025.pdf" "public/documents/dashboard/health-and-safety/legionella-risk-assessment.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY CHECKS/Rawdah School  BD9 4JJ - WSL & WSP x 1.pdf" "public/documents/dashboard/health-and-safety/wsl-and-wsp.pdf"
```

**Step 2: Verify all 5 files landed**

```bash
ls public/documents/dashboard/health-and-safety/ | wc -l
```
Expected: 5

---

### Task 3: Move HEALTH & SAFETY POLICIES PDFs

**Files:**
- Move: `public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/*.pdf` → `public/documents/dashboard/health-and-safety-policies/`

**Step 1: Copy and rename PDFs**

```bash
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_Arson_Prevention_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/arson-prevention-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_EmergencyEvacuation_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/emergency-evacuation-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_FireInspectionLog_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/fire-inspection-log-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_FireRiskAssessment_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/fire-risk-assessment-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_FireSafety_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/fire-safety-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_Health&Safety_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/health-and-safety-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_ManualHandling_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/manual-handling-policy.pdf"
cp "public/documents/WEBSITE/HEALTH & SAFETY POLICIES/PDFs/RM_Medication_Policy2026.pdf" "public/documents/dashboard/health-and-safety-policies/medication-policy.pdf"
```

**Step 2: Verify all 8 files landed**

```bash
ls public/documents/dashboard/health-and-safety-policies/ | wc -l
```
Expected: 8

---

### Task 4: Move HR POLICIES PDFs

**Files:**
- Move: `public/documents/WEBSITE/HR POLICIES/PDF/*.pdf` → `public/documents/dashboard/hr-policies/`

**Step 1: Copy and rename PDFs**

```bash
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ EqualityDiversityPolicy _2026.pdf" "public/documents/dashboard/hr-policies/equality-diversity-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ GrievancePolicy _2026.pdf" "public/documents/dashboard/hr-policies/grievance-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ LockdownProcedurePolicy _2026.pdf" "public/documents/dashboard/hr-policies/lockdown-procedure-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ SocialMedia_ICT_2026.pdf" "public/documents/dashboard/hr-policies/social-media-ict-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ Staff Anti-Bullying and Harassment _2026.pdf" "public/documents/dashboard/hr-policies/staff-anti-bullying-and-harassment-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ StaffCodeConductPolicy _2026.pdf" "public/documents/dashboard/hr-policies/staff-code-of-conduct-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ WhistleblowingPolicy _2026.pdf" "public/documents/dashboard/hr-policies/whistleblowing-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_DataProtection_2026.pdf" "public/documents/dashboard/hr-policies/data-protection-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_Disciplinary_Policy2026.pdf" "public/documents/dashboard/hr-policies/disciplinary-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_ProbationPolicy_2026.pdf" "public/documents/dashboard/hr-policies/probation-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_Staff Attendance and Absence Management _2026.pdf" "public/documents/dashboard/hr-policies/staff-attendance-and-absence-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_StaffInduction_2026.pdf" "public/documents/dashboard/hr-policies/staff-induction-policy.pdf"
cp "public/documents/WEBSITE/HR POLICIES/PDF/RM_StaffPerformance_2026.pdf" "public/documents/dashboard/hr-policies/staff-performance-policy.pdf"
```

**Step 2: Verify all 13 files landed**

```bash
ls public/documents/dashboard/hr-policies/ | wc -l
```
Expected: 13

---

### Task 5: Move SCHOOL POLICIES PDFs

**Files:**
- Move: `public/documents/WEBSITE/SCHOOL POLICIES/PDF/*.pdf` → `public/documents/dashboard/school-policies/`

**Step 1: Copy and rename PDFs**

```bash
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/Academic Performance_Reporting.pdf" "public/documents/dashboard/school-policies/academic-performance-and-reporting.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_ALN_SEND_Policy.pdf" "public/documents/dashboard/school-policies/additional-learning-send-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Access&Security Policy.pdf" "public/documents/dashboard/school-policies/access-and-security-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Admission_Policy.pdf" "public/documents/dashboard/school-policies/admission-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Attendance_Policy.pdf" "public/documents/dashboard/school-policies/attendance-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_BehaviorPolicy.pdf" "public/documents/dashboard/school-policies/behaviour-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_ComplaintsPolicy.pdf" "public/documents/dashboard/school-policies/complaints-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_CurriculumPolicy.pdf" "public/documents/dashboard/school-policies/curriculum-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_EAL_Policy.pdf" "public/documents/dashboard/school-policies/eal-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_EHC_Policy.pdf" "public/documents/dashboard/school-policies/ehc-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_EYFS_Montessori_Policy.pdf" "public/documents/dashboard/school-policies/eyfs-montessori-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_FirstAid_Policy.pdf" "public/documents/dashboard/school-policies/first-aid-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_LoneWorking Policy.pdf" "public/documents/dashboard/school-policies/lone-working-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Montessori_BritishValues_Montessori.pdf" "public/documents/dashboard/school-policies/british-values-montessori-islamic-ethos-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Privacy, CCTV and Photography Policy.pdf" "public/documents/dashboard/school-policies/privacy-cctv-photography-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Pupil_Assessment_Policy.pdf" "public/documents/dashboard/school-policies/pupil-assessment-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_RSE_Policy.pdf" "public/documents/dashboard/school-policies/rse-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/RM_Staff_Training_Policy.pdf" "public/documents/dashboard/school-policies/staff-training-policy.pdf"
cp "public/documents/WEBSITE/SCHOOL POLICIES/PDF/Rawdah EAL Montessori Primary School Draft v01 2025.pdf" "public/documents/dashboard/school-policies/rawdah-eal-montessori-draft.pdf"
```

**Step 2: Verify all 19 files landed**

```bash
ls public/documents/dashboard/school-policies/ | wc -l
```
Expected: 19

---

### Task 6: Move FINANCE&GOVERNANCE, BUILDING, SAFEGUARDING, TIMETABLE, and ENRICHMENT PDFs

**Files:**
- Move: remaining WEBSITE categories → respective `dashboard/` folders
- Create: `public/documents/dashboard/enrichment-and-sport/`

**Step 1: Create new enrichment folder**

```bash
mkdir -p public/documents/dashboard/enrichment-and-sport
```

**Step 2: Copy governance PDFs**

```bash
cp "public/documents/WEBSITE/FINANCE&GOVERNANCE/PDF/Finance Policy and Scheme of Delegation.pdf" "public/documents/dashboard/governance-and-finance/finance-and-scheme-of-delegation-policy.pdf"
cp "public/documents/WEBSITE/FINANCE&GOVERNANCE/PDF/RM_Gov_Training.pdf" "public/documents/dashboard/governance-and-finance/governing-body-training-and-development-policy.pdf"
cp "public/documents/WEBSITE/FINANCE&GOVERNANCE/PDF/RM_Governance Board & Framework .pdf" "public/documents/dashboard/governance-and-finance/governing-body-structure.pdf"
```

**Step 3: Copy building PDFs**

```bash
cp "public/documents/WEBSITE/BUILDING/LEASE/GVT_RMS_LEASE.pdf" "public/documents/dashboard/building/lease.pdf"
cp "public/documents/WEBSITE/BUILDING/SERVICE CONTRACT/GVT_RMS_SERVICECONTRACT.pdf" "public/documents/dashboard/building/service-contract.pdf"
```

**Step 4: Copy safer recruitment PDFs**

```bash
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_AntiBullyingPolicy.pdf" "public/documents/dashboard/safer-recruitment/anti-bullying-policy.pdf"
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_Safeguarding&ChildProtection_PartBGuidance.pdf" "public/documents/dashboard/safer-recruitment/safeguarding-child-protection-part-b-guidance.pdf"
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_Safeguarding&ChildProtection_Policy.pdf" "public/documents/dashboard/safer-recruitment/safeguarding-child-protection-policy.pdf"
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_Safer Recruitment and Criminal Record Disclosure_2026.pdf" "public/documents/dashboard/safer-recruitment/safer-recruitment-criminal-record-disclosure.pdf"
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_SaferRecruitmentChecklist.pdf" "public/documents/dashboard/safer-recruitment/safer-recruitment-checklist.pdf"
cp "public/documents/WEBSITE/SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/RM_SaferRecruitment_2026.pdf" "public/documents/dashboard/safer-recruitment/safer-recruitment-policy.pdf"
```

**Step 5: Copy timetable PDF**

```bash
cp "public/documents/WEBSITE/SCHOOL TIMETABLE & CALENDAR/SRMS_SCHOOL TIMETABLE.pdf" "public/documents/dashboard/school-timetable-and-calendar/school-timetable.pdf"
```

**Step 6: Copy enrichment PDF**

```bash
cp "public/documents/WEBSITE/ENRICHMENT&SPORT/WORD/PDF/RM_Off_Site_PE.pdf" "public/documents/dashboard/enrichment-and-sport/off-site-pe.pdf"
```

**Step 7: Verify counts**

```bash
echo "governance: $(ls public/documents/dashboard/governance-and-finance/ | wc -l)"
echo "building: $(ls public/documents/dashboard/building/ | wc -l)"
echo "safer-recruitment: $(ls public/documents/dashboard/safer-recruitment/ | wc -l)"
echo "timetable: $(ls public/documents/dashboard/school-timetable-and-calendar/ | wc -l)"
echo "enrichment: $(ls public/documents/dashboard/enrichment-and-sport/ | wc -l)"
```
Expected: governance: 3, building: 2, safer-recruitment: 6, timetable: 1, enrichment: 1

---

### Task 7: Commit all moved PDFs

**Step 1: Stage and commit**

```bash
git add public/documents/dashboard/
git commit -m "feat: add all dashboard PDFs with clean kebab-case names"
```

---

### Task 8: Update `data.ts` — category titles, slugs, and document lists

**Files:**
- Modify: `src/app/dashboard/data.ts`

**Step 1: Rewrite `data.ts`**

Replace the entire `dashboardCategories` array with updated data matching the actual PDFs on disk:

- **Curriculum**: Update "Practical Life" → "Practical Life & PSHE", filename `practical-life.pdf` → `practical-life-and-pshe.pdf`
- **Health & Safety** → rename title to **"Health Safety Checks"**, replace all 10 documents with the 5 actual PDFs from WEBSITE
- **Health & Safety Policies**: Update document names/filenames to match the 8 actual PDFs (e.g. "Fire Evacuation Policy" → "Emergency Evacuation Policy", remove "Legionella Risk Policy" which has no source PDF)
- **HR Policies**: Replace all 10 entries with 13 actual PDFs from WEBSITE (add data-protection, probation, social-media-ict, staff-induction, whistleblowing; fix filenames)
- **School Policies**: Replace 22 entries with 19 actual PDFs. Remove entries with no source PDF: "Debt and Fees Policy", "RE Policy", "Safer Recruitment Policy", "Off Site PE Policy", "Pupil Progress Policy", "Safeguarding Policy". Add: "EYFS Montessori Policy", "Lone Working Policy", "Pupil Assessment Policy", "Staff Training Policy", "Rawdah EAL Montessori Draft"
- **Governance & Finance**: Remove "Insurance Policy & Documentation" (no source PDF), keep 3 actual docs
- **Building**: No changes needed (already correct)
- **Safer Recruitment**: Replace 2 entries with 6 actual PDFs
- **School Timetable & Calendar**: Remove "School Year Calendar Draft" (no source PDF), keep 1 actual doc
- **School Marketing**: Remove document entries (no source PDFs), keep empty category as placeholder
- **Add new "Enrichment & Sport"** category with slug `enrichment-and-sport`, 1 doc: "Off Site PE"

**Step 2: Verify build**

```bash
npm run build
```
Expected: Build succeeds with no TypeScript errors.

**Step 3: Commit**

```bash
git add src/app/dashboard/data.ts
git commit -m "feat: update dashboard data to match actual PDF files"
```

---

### Task 9: Frontend improvements to dashboard documents page

**Files:**
- Modify: `src/app/dashboard/documents/page.tsx`
- Modify: `public/css/styles.css`

Use the `/frontend-design` skill to improve the dashboard documents page. Current page is functional but basic. Consider:

- Better visual hierarchy for categories
- Document count badge per category
- Hover/interaction polish on PDF cards
- Skip rendering categories with 0 documents (School Marketing)
- Responsive improvements

**Step 1: Invoke `/frontend-design` skill for improvements**

**Step 2: Verify build**

```bash
npm run build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/dashboard/documents/page.tsx public/css/styles.css
git commit -m "feat: improve dashboard documents page design"
```

---

### Task 10: Delete WEBSITE folder and final cleanup

**Files:**
- Delete: `public/documents/WEBSITE/` (entire directory)
- Delete: any `.gitkeep` files in dashboard folders that now have PDFs

**Step 1: Verify all PDFs accounted for**

Count total PDFs in dashboard vs WEBSITE:

```bash
echo "Dashboard PDFs: $(find public/documents/dashboard -name '*.pdf' | wc -l)"
echo "Website PDFs: $(find public/documents/WEBSITE -name '*.pdf' | wc -l)"
```
Expected: Dashboard PDFs: 68, Website PDFs: 68

**Step 2: Delete WEBSITE folder**

```bash
rm -rf public/documents/WEBSITE/
```

**Step 3: Remove .gitkeep files from folders that now have content**

```bash
find public/documents/dashboard -name '.gitkeep' -delete
```

**Step 4: Verify build still passes**

```bash
npm run build
```

**Step 5: Commit**

```bash
git add -A public/documents/
git commit -m "chore: remove WEBSITE source folder after PDF migration"
```

---
