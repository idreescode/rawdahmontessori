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
