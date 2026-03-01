import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <section className="banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner">
                <h1>Opening soon….</h1>
                <Link href="/registration" className="btn_style">Register your Interest</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission_main" id="mission">
        <div className="container">
          <div className="col-md-12">
            <div className="mission">
              <div className="mission_img_wrap">
                <img src="/images/mission.png" alt="Mission Image" />
              </div>
              <div className="mission_content">
                <h2>Our Mission</h2>
                <p>
                  Rawdah Montessori Primary School is a beacon of balanced education, where a
                  dynamic, creative Montessori curriculum works in harmony with a foundation of
                  Islamic values. Our carefully prepared classrooms nurture each child&apos;s innate
                  curiosity, fostering essential learning skills and supporting profound cognitive
                  development through hands-on exploration and individualized discovery. We are
                  building a school community firmly rooted in the principles of peaceful coexistence,
                  conviviality, and service. Through an embedded commitment to charitable work and
                  community engagement, we empower our students to grow into compassionate,
                  contributing members of a diverse global society
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission_bg"><img src="/images/mission-bg.png" alt="" /></div>
      </section>

      {/* Vision Section */}
      <section className="vision_main" id="vision">
        <div className="container">
          <div className="col-md-12">
            <div className="mission">
              <div className="mission_content">
                <h2>Our Vision</h2>
                <p>
                  Our vision for Rawdah Montessori Primary School is to embrace the Montessori
                  method as the perfect vessel for cultivating resilient, independent thinkers. With its
                  celebration of individual curiosity, hands-on discovery, and deep respect for a child&apos;s
                  natural development, this approach provides the ideal foundation for growth. When
                  this educational philosophy is lovingly guided by timeless Islamic values, it forges
                  individuals of profound character: children who are not only academically
                  accomplished but also ethically grounded, socially responsible, and intrinsically
                  motivated to contribute peace and good to the world. We are dedicated to nurturing
                  thriving children who are fully prepared to excel in this life with wisdom, creativity,
                  and grace, and to serve humanity with sincerity and conviction.
                </p>
              </div>
              <div className="mission_img_wrap">
                <img src="/images/vission.png" alt="Vision Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="mission_bg"><img src="/images/vission-bg.png" alt="" /></div>
      </section>

      {/* About Montessori Section */}
      <section className="mission_main about_main" id="about">
        <div className="container">
          <div className="col-md-12">
            <div className="mission">
              <div className="mission_img_wrap">
                <img src="/images/about.png" alt="Mission Image" />
              </div>
              <div className="mission_content">
                <h2>About<br />Montessori</h2>
                <p>
                  At the heart of a Montessori education is a profound understanding of child development, organised into four key stages or &ldquo;planes.&rdquo; These planes—from the absorbent mind of the early years to the philosophical exploration of adolescence—recognise that children have distinct developmental needs and ways of learning at each phase of life.
                </p>
                <p>
                  Unlike traditional didactic teaching, where a standardised curriculum is delivered to a whole class, the Montessori method is individually tailored. Our prepared environments and specially designed materials allow children to learn at their own pace, guided by their innate curiosity. This approach transforms the classroom from a place of passive reception into a dynamic community of active discovery.
                </p>
                <p>
                  The benefits are clear: instead of simply memorising facts for a test, children develop deep concentration, intrinsic motivation, and true mastery. They become confident, independent problem-solvers who love learning—a foundational advantage that prepares them not just for the next school level, but for a lifetime of adaptive thinking and intellectual engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission_bg"><img src="/images/about-bg.png" alt="" /></div>
      </section>

      {/* Admission Section */}
      <section className="admission_main" id="admission">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="admission_box">
                <h2>Admission Enquiries</h2>

                <div className="admission_inner">
                  <h3>For Parents Interested in 2026/2027 Admission</h3>
                  <p>
                    We are delighted by your interest in Rawdah Montessori Primary School for the 2026 or 2027 academic years. To ensure you receive the most timely updates, including the confirmed opening date, we invite you to complete our Registration of Interest Form
                  </p>
                  <Link href="/registration" className="btn_style btn_style_sm">Go to Registration of Interest Form &gt;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment_main" id="recruitment">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="recruitment_head">
                <h2>Recruitment</h2>
                <p>We have the following active recruitment campaigns for the Rawdah Montessori school:</p>
              </div>
            </div>
          </div>

          <div className="recruitment_cards">
            <div className="job_card">
              <div className="job_top">
                <h3>Head of School</h3>
                <p>
                  Oversees the academic and operational leadership of the school, ensuring high teaching standards, effective staff management, curriculum excellence, and a safe, inclusive learning environment aligned with the school&apos;s vision and objectives.....
                </p>
              </div>
              <div className="job_meta">
                <a href="https://montessori-ami.org/training-programmes/job-openings/rawdah-montessori-bradford" target="_blank" className="job_link">View Job Opening</a>
                <a href="/documents/Headteacher_RMS.pdf" target="_blank" className="job_link">Download Job Information</a>
                <p>Please send a CV with a short introduction to:</p>
                <a href="mailto:admin@rawdahmontessori.co.uk">admin@rawdahmontessori.co.uk</a>
              </div>
            </div>
            <div className="job_card">
              <div className="job_top">
                <h3>Montessori Guides</h3>
                <p>
                  Supports children&apos;s holistic development by implementing Montessori principles, preparing a structured learning environment, observing student progress, and guiding independent, self-directed learning in a nurturing and respectful classroom setting...
                </p>
              </div>
              <div className="job_meta">
                <a href="https://montessori-ami.org/training-programmes/job-openings/rawdah-montessori-bradford" target="_blank" className="job_link">View Job Opening</a>
                <a href="/documents/Guides_RMS.pdf" target="_blank" className="job_link">Download Job Information</a>
                <p>Please send a CV with a short introduction to:</p>
                <a href="mailto:admin@rawdahmontessori.co.uk">admin@rawdahmontessori.co.uk</a>
              </div>
            </div>
            <div className="job_card">
              <div className="job_top">
                <h3>Mainstream Primary Teachers</h3>
                <p>
                  For those who want to transition and train as Montessori Guides.
                </p>
              </div>
              <div className="job_meta">
                <a href="https://montessori-ami.org/training-programmes/job-openings/rawdah-montessori-bradford" target="_blank" className="job_link">View Job Opening</a>
                <a href="/documents/Transition_RMS.pdf" target="_blank" className="job_link">Download Job Information</a>
                <p>Please send a CV with a short introduction to:</p>
                <a href="mailto:admin@rawdahmontessori.co.uk">admin@rawdahmontessori.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
