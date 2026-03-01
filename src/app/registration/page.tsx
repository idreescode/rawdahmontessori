import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegistrationPage() {
  return (
    <>
      <Header linkPrefix="/" />

      {/* Banner Section */}
      <section className="register_banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="register_banner">
                <h1>Registration of Interest</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="register_main">
        <div className="register_bg"><img src="/images/register/register-bg.png" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="register">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
