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
              <div className="footer_policies">
                <h4>POLICIES</h4>
                <div className="footer_policies_grid">
                  <ul>
                    <li><a href="/documents/academic-performance-reporting.pdf" target="_blank">Academic Reporting</a></li>
                    <li><a href="/documents/attendance-policy.pdf" target="_blank">Attendance Policy</a></li>
                    <li><a href="/documents/behaviour-policy.pdf" target="_blank">Behaviour Policy</a></li>
                    <li><a href="/documents/complaints-policy.pdf" target="_blank">Complaints Policy</a></li>
                    <li><a href="/documents/curriculum-policy.pdf" target="_blank">Curriculum Policy</a></li>
                    <li><a href="/documents/eal-policy.pdf" target="_blank">EAL Policy</a></li>
                    <li><a href="/documents/ehc-policy.pdf" target="_blank">EHC Policy</a></li>
                  </ul>
                  <ul>
                    <li><a href="/documents/first-aid-policy.pdf" target="_blank">First Aid Policy</a></li>
                    <li><a href="/documents/health-safety-policy.pdf" target="_blank">Health &amp; Safety</a></li>
                    <li><a href="/documents/montessori-british-values.pdf" target="_blank">Montessori &amp; British Values</a></li>
                    <li><a href="/documents/pupil-assessment-policy.pdf" target="_blank">Pupil Assessment</a></li>
                    <li><a href="/documents/rse-policy.pdf" target="_blank">RSE Policy</a></li>
                    <li><a href="/documents/safeguarding-child-protection-policy.pdf" target="_blank">Safeguarding</a></li>
                  </ul>
                </div>
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
