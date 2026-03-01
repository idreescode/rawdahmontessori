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
