export interface DashboardDocument {
  name: string;
  filename: string;
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
      { name: "Practical Life & PSHE", filename: "practical-life-and-pshe.pdf" },
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
      { name: "Emergency Evacuation Policy", filename: "emergency-evacuation-policy.pdf" },
      { name: "Fire Inspection Log Policy", filename: "fire-inspection-log-policy.pdf" },
      { name: "Fire Risk Assessment Policy", filename: "fire-risk-assessment-policy.pdf" },
      { name: "Fire Safety Policy", filename: "fire-safety-policy.pdf" },
      { name: "Health & Safety Policy", filename: "health-and-safety-policy.pdf" },
      { name: "Manual Handling Policy", filename: "manual-handling-policy.pdf" },
      { name: "Medication Policy", filename: "medication-policy.pdf" },
    ],
  },
  {
    title: "HR Policies",
    slug: "hr-policies",
    documents: [
      { name: "Data Protection Policy", filename: "data-protection-policy.pdf" },
      { name: "Disciplinary Policy", filename: "disciplinary-policy.pdf" },
      { name: "Equality & Diversity Policy", filename: "equality-diversity-policy.pdf" },
      { name: "Grievance Policy", filename: "grievance-policy.pdf" },
      { name: "Lockdown Procedure Policy", filename: "lockdown-procedure-policy.pdf" },
      { name: "Probation Policy", filename: "probation-policy.pdf" },
      { name: "Social Media & ICT Policy", filename: "social-media-ict-policy.pdf" },
      { name: "Staff Anti-Bullying & Harassment Policy", filename: "staff-anti-bullying-and-harassment-policy.pdf" },
      { name: "Staff Attendance & Absence Policy", filename: "staff-attendance-and-absence-policy.pdf" },
      { name: "Staff Code of Conduct Policy", filename: "staff-code-of-conduct-policy.pdf" },
      { name: "Staff Induction Policy", filename: "staff-induction-policy.pdf" },
      { name: "Staff Performance Policy", filename: "staff-performance-policy.pdf" },
      { name: "Whistleblowing Policy", filename: "whistleblowing-policy.pdf" },
    ],
  },
  {
    title: "School Policies",
    slug: "school-policies",
    documents: [
      { name: "Academic Performance & Reporting", filename: "academic-performance-and-reporting.pdf" },
      { name: "Access & Security Policy", filename: "access-and-security-policy.pdf" },
      { name: "Additional Learning & SEND Policy", filename: "additional-learning-send-policy.pdf" },
      { name: "Admission Policy", filename: "admission-policy.pdf" },
      { name: "Attendance Policy", filename: "attendance-policy.pdf" },
      { name: "Behaviour Policy", filename: "behaviour-policy.pdf" },
      { name: "British Values, Montessori & Islamic Ethos Policy", filename: "british-values-montessori-islamic-ethos-policy.pdf" },
      { name: "Complaints Policy", filename: "complaints-policy.pdf" },
      { name: "Curriculum Policy", filename: "curriculum-policy.pdf" },
      { name: "EAL Policy", filename: "eal-policy.pdf" },
      { name: "EHC Policy", filename: "ehc-policy.pdf" },
      { name: "EYFS Montessori Policy", filename: "eyfs-montessori-policy.pdf" },
      { name: "First Aid Policy", filename: "first-aid-policy.pdf" },
      { name: "Lone Working Policy", filename: "lone-working-policy.pdf" },
      { name: "Privacy, CCTV & Photography Policy", filename: "privacy-cctv-photography-policy.pdf" },
      { name: "Pupil Assessment Policy", filename: "pupil-assessment-policy.pdf" },
      { name: "RSE Policy", filename: "rse-policy.pdf" },
      { name: "Staff Training Policy", filename: "staff-training-policy.pdf" },
    ],
  },
  {
    title: "Governance & Finance",
    slug: "governance-and-finance",
    documents: [
      { name: "Finance & Scheme of Delegation Policy", filename: "finance-and-scheme-of-delegation-policy.pdf" },
      { name: "Governing Body Structure", filename: "governing-body-structure.pdf" },
      { name: "Governing Body Training & Development Policy", filename: "governing-body-training-and-development-policy.pdf" },
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
    title: "Safeguarding",
    slug: "safer-recruitment",
    documents: [
      { name: "Anti-Bullying Policy", filename: "anti-bullying-policy.pdf" },
      { name: "Safeguarding & Child Protection Part B Guidance", filename: "safeguarding-child-protection-part-b-guidance.pdf" },
      { name: "Safeguarding & Child Protection Policy", filename: "safeguarding-child-protection-policy.pdf" },
      { name: "Safer Recruitment Checklist", filename: "safer-recruitment-checklist.pdf" },
      { name: "Safer Recruitment Criminal Record Disclosure", filename: "safer-recruitment-criminal-record-disclosure.pdf" },
      { name: "Safer Recruitment Policy", filename: "safer-recruitment-policy.pdf" },
      { name: "SCR", filename: "scr.pdf" },
      { name: "DBS Status", filename: "dbs-status.pdf" },
    ],
  },
  {
    title: "School Timetable & Calendar",
    slug: "school-timetable-and-calendar",
    documents: [
      { name: "School Timetable", filename: "school-timetable.pdf" },
    ],
  },
  {
    title: "Enrichment & Sport",
    slug: "enrichment-and-sport",
    documents: [
      { name: "Off Site PE", filename: "off-site-pe.pdf" },
    ],
  },
  {
    title: "School Marketing",
    slug: "school-marketing",
    documents: [],
  },
];
