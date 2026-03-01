import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dashboardCategories } from "../data";

export const metadata = {
  title: "Dashboard — Rawdah Montessori Primary School",
};

export default function DashboardDocumentsPage() {
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="dashboard_docs_main">
        <div className="container">
          {dashboardCategories.map((category) => (
            <div key={category.slug} className="dashboard_category">
              <h2>{category.title}</h2>
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
