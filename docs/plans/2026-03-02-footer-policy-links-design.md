# Footer Policy Links Update

**Date:** 2026-03-02
**Status:** Approved

## Summary

Replace 15 old/draft policy PDFs in `public/documents/` with 20 updated PDFs from the WEBSITE source folder. Update footer links in `Footer.tsx` to match. Use clean kebab-case filenames.

## Source

PDFs sourced from `C:\Users\Idrees\Downloads\WEBSITE 2\WEBSITE`:
- 18 from `SCHOOL POLICIES/PDF/`
- 1 from `SAFEGUARDING & SAFER RECRUITMENT POLICIES/PDF/`
- 1 from `HEALTH & SAFETY POLICIES/PDFs/`

## File Mapping

| Source File | New Name | Footer Label |
|---|---|---|
| Academic Performance_Reporting.pdf | academic-performance-reporting.pdf | Academic Performance & Reporting |
| RM_Access&Security Policy.pdf | access-security-policy.pdf | Access & Security Policy |
| RM_Admission_Policy.pdf | admission-policy.pdf | Admission Policy |
| RM_ALN_SEND_Policy.pdf | aln-send-policy.pdf | ALN & SEND Policy |
| RM_Attendance_Policy.pdf | attendance-policy.pdf | Attendance Policy |
| RM_BehaviorPolicy.pdf | behaviour-policy.pdf | Behaviour Policy |
| RM_ComplaintsPolicy.pdf | complaints-policy.pdf | Complaints Policy |
| RM_CurriculumPolicy.pdf | curriculum-policy.pdf | Curriculum Policy |
| RM_EAL_Policy.pdf | eal-policy.pdf | EAL Policy |
| RM_EHC_Policy.pdf | ehc-policy.pdf | EHC Policy |
| RM_EYFS_Montessori_Policy.pdf | eyfs-montessori-policy.pdf | EYFS Montessori Policy |
| RM_FirstAid_Policy.pdf | first-aid-policy.pdf | First Aid Policy |
| RM_LoneWorking Policy.pdf | lone-working-policy.pdf | Lone Working Policy |
| RM_Montessori_BritishValues_Montessori.pdf | montessori-british-values.pdf | Montessori & British Values |
| RM_Privacy, CCTV and Photography Policy.pdf | privacy-cctv-photography-policy.pdf | Privacy, CCTV & Photography |
| RM_Pupil_Assessment_Policy.pdf | pupil-assessment-policy.pdf | Pupil Assessment Policy |
| RM_RSE_Policy.pdf | rse-policy.pdf | RSE Policy |
| RM_Staff_Training_Policy.pdf | staff-training-policy.pdf | Staff Training Policy |
| RM_Safeguarding&ChildProtection_Policy.pdf | safeguarding-child-protection-policy.pdf | Safeguarding & Child Protection |
| RM_Health&Safety_Policy2026.pdf | health-safety-policy.pdf | Health & Safety Policy |

## Old Files to Remove

15 PDFs from `public/documents/` that are replaced by updated versions above.

Keep: `Guides_RMS.pdf`, `Headteacher_RMS.pdf`, `Transition_RMS.pdf` (not in footer).

## Files Touched

- `public/documents/` — remove 15 old PDFs, add 20 new PDFs
- `src/components/Footer.tsx` — update policy links and use frontend-design skill for layout
- `public/css/styles.css` — potential styling updates for footer policy section
