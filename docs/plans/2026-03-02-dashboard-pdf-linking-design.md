# Dashboard PDF Linking Design

## Problem

The `public/documents/WEBSITE/` folder contains all school PDFs organised by category, but the dashboard currently has empty placeholder folders in `public/documents/dashboard/` and `data.ts` references filenames that don't exist on disk.

## Solution

Move PDFs from `WEBSITE/` to `dashboard/<slug>/` with clean kebab-case filenames, update `data.ts` to match actual files, add missing categories, rename "Health & Safety" to "Health Safety Checks", and delete the WEBSITE folder.

## File Mapping

### CURRICULUM → `curriculum/`
| Source | Target |
|---|---|
| Arabic.pdf | arabic.pdf |
| Cultural Studies .pdf | cultural-studies.pdf |
| English.pdf | english.pdf |
| Geometry.pdf | geometry.pdf |
| Maths.pdf | maths.pdf |
| PE.pdf | pe.pdf |
| Practical Life & PSHE.pdf | practical-life-and-pshe.pdf |
| Science.pdf | science.pdf |
| Sensorial.pdf | sensorial.pdf |
| Technology.pdf | technology.pdf |

### HEALTH & SAFETY CHECKS → `health-and-safety/`
| Source | Target |
|---|---|
| Rawdah School BD9 4JJ - Disability Access Risk Assessment 2025.pdf | disability-access-risk-assessment.pdf |
| Rawdah School BD9 4JJ - Fire Risk Assessment 2025.pdf | fire-risk-assessment.pdf |
| Rawdah School BD9 4JJ - Health Safety Risk Assessment 2025.pdf | health-and-safety-risk-assessment.pdf |
| Rawdah School BD9 4JJ - Legionella Risk Assessment 2025.pdf | legionella-risk-assessment.pdf |
| Rawdah School BD9 4JJ - WSL & WSP x 1.pdf | wsl-and-wsp.pdf |

### HEALTH & SAFETY POLICIES → `health-and-safety-policies/`
| Source | Target |
|---|---|
| RM_Arson_Prevention_Policy2026.pdf | arson-prevention-policy.pdf |
| RM_EmergencyEvacuation_Policy2026.pdf | emergency-evacuation-policy.pdf |
| RM_FireInspectionLog_Policy2026.pdf | fire-inspection-log-policy.pdf |
| RM_FireRiskAssessment_Policy2026.pdf | fire-risk-assessment-policy.pdf |
| RM_FireSafety_Policy2026.pdf | fire-safety-policy.pdf |
| RM_Health&Safety_Policy2026.pdf | health-and-safety-policy.pdf |
| RM_ManualHandling_Policy2026.pdf | manual-handling-policy.pdf |
| RM_Medication_Policy2026.pdf | medication-policy.pdf |

### HR POLICIES → `hr-policies/`
| Source | Target |
|---|---|
| RM_ EqualityDiversityPolicy _2026.pdf | equality-diversity-policy.pdf |
| RM_ GrievancePolicy _2026.pdf | grievance-policy.pdf |
| RM_ LockdownProcedurePolicy _2026.pdf | lockdown-procedure-policy.pdf |
| RM_ SocialMedia_ICT_2026.pdf | social-media-ict-policy.pdf |
| RM_ Staff Anti-Bullying and Harassment _2026.pdf | staff-anti-bullying-and-harassment-policy.pdf |
| RM_ StaffCodeConductPolicy _2026.pdf | staff-code-of-conduct-policy.pdf |
| RM_ WhistleblowingPolicy _2026.pdf | whistleblowing-policy.pdf |
| RM_DataProtection_2026.pdf | data-protection-policy.pdf |
| RM_Disciplinary_Policy2026.pdf | disciplinary-policy.pdf |
| RM_ProbationPolicy_2026.pdf | probation-policy.pdf |
| RM_Staff Attendance and Absence Management _2026.pdf | staff-attendance-and-absence-policy.pdf |
| RM_StaffInduction_2026.pdf | staff-induction-policy.pdf |
| RM_StaffPerformance_2026.pdf | staff-performance-policy.pdf |

### SCHOOL POLICIES → `school-policies/`
| Source | Target |
|---|---|
| Academic Performance_Reporting.pdf | academic-performance-and-reporting.pdf |
| RM_ALN_SEND_Policy.pdf | additional-learning-send-policy.pdf |
| RM_Access&Security Policy.pdf | access-and-security-policy.pdf |
| RM_Admission_Policy.pdf | admission-policy.pdf |
| RM_Attendance_Policy.pdf | attendance-policy.pdf |
| RM_BehaviorPolicy.pdf | behaviour-policy.pdf |
| RM_ComplaintsPolicy.pdf | complaints-policy.pdf |
| RM_CurriculumPolicy.pdf | curriculum-policy.pdf |
| RM_EAL_Policy.pdf | eal-policy.pdf |
| RM_EHC_Policy.pdf | ehc-policy.pdf |
| RM_EYFS_Montessori_Policy.pdf | eyfs-montessori-policy.pdf |
| RM_FirstAid_Policy.pdf | first-aid-policy.pdf |
| RM_LoneWorking Policy.pdf | lone-working-policy.pdf |
| RM_Montessori_BritishValues_Montessori.pdf | british-values-montessori-islamic-ethos-policy.pdf |
| RM_Privacy, CCTV and Photography Policy.pdf | privacy-cctv-photography-policy.pdf |
| RM_Pupil_Assessment_Policy.pdf | pupil-assessment-policy.pdf |
| RM_RSE_Policy.pdf | rse-policy.pdf |
| RM_Staff_Training_Policy.pdf | staff-training-policy.pdf |
| Rawdah EAL Montessori Primary School Draft v01 2025.pdf | rawdah-eal-montessori-draft.pdf |

### FINANCE&GOVERNANCE → `governance-and-finance/`
| Source | Target |
|---|---|
| Finance Policy and Scheme of Delegation.pdf | finance-and-scheme-of-delegation-policy.pdf |
| RM_Gov_Training.pdf | governing-body-training-and-development-policy.pdf |
| RM_Governance Board & Framework .pdf | governing-body-structure.pdf |

### BUILDING → `building/`
| Source | Target |
|---|---|
| GVT_RMS_LEASE.pdf | lease.pdf |
| GVT_RMS_SERVICECONTRACT.pdf | service-contract.pdf |

### SAFEGUARDING & SAFER RECRUITMENT → `safer-recruitment/`
| Source | Target |
|---|---|
| RM_AntiBullyingPolicy.pdf | anti-bullying-policy.pdf |
| RM_Safeguarding&ChildProtection_PartBGuidance.pdf | safeguarding-child-protection-part-b-guidance.pdf |
| RM_Safeguarding&ChildProtection_Policy.pdf | safeguarding-child-protection-policy.pdf |
| RM_Safer Recruitment and Criminal Record Disclosure_2026.pdf | safer-recruitment-criminal-record-disclosure.pdf |
| RM_SaferRecruitmentChecklist.pdf | safer-recruitment-checklist.pdf |
| RM_SaferRecruitment_2026.pdf | safer-recruitment-policy.pdf |

### SCHOOL TIMETABLE & CALENDAR → `school-timetable-and-calendar/`
| Source | Target |
|---|---|
| SRMS_SCHOOL TIMETABLE.pdf | school-timetable.pdf |

### ENRICHMENT&SPORT → `enrichment-and-sport/` (new folder)
| Source | Target |
|---|---|
| RM_Off_Site_PE.pdf | off-site-pe.pdf |

## Data Changes (`data.ts`)

1. Rename "Health & Safety" title to "Health Safety Checks"
2. Update all document lists to match the actual PDFs moved above
3. Add "Enrichment & Sport" category with slug `enrichment-and-sport`
4. Keep "School Marketing" as empty placeholder
5. Create new dashboard folder `enrichment-and-sport/`

## Frontend Changes

Use frontend-design skill for any visual improvements to the dashboard documents page.

## Cleanup

Delete `public/documents/WEBSITE/` folder after all PDFs are confirmed moved.
