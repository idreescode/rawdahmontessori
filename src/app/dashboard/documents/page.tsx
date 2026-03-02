import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dashboardCategories } from "../data";

export const metadata = {
  title: "Dashboard — Rawdah Montessori Primary School",
};

export default function DashboardDocumentsPage() {
  const visibleCategories = dashboardCategories.filter(
    (cat) => cat.documents.length > 0
  );

  return (
    <>
      <Header linkPrefix="/" />

      {/* Banner */}
      <section className="dashboard_banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dashboard_banner">
                <h1>Dashboard</h1>
                <p className="dashboard_banner_subtitle">
                  School documents &amp; policies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="dashboard_docs_main">
        <div className="container">
          {visibleCategories.map((category) => (
            <div key={category.slug} className="dashboard_category">
              <div className="dashboard_category_header">
                <h2>{category.title}</h2>
                <span className="dashboard_category_count">
                  {category.documents.length}
                </span>
              </div>
              <div className="dashboard_category_underline"></div>
              <div className="row">
                {category.documents.map((doc) => (
                  <div key={doc.filename} className="col-lg-4 col-md-6 col-12">
                    <a
                      href={`/documents/dashboard/${category.slug}/${doc.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dashboard_doc_card"
                    >
                      <i className="fa-solid fa-file-pdf"></i>
                      <span>{doc.name}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square dashboard_doc_card_arrow"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
