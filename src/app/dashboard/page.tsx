import DashboardLogin from "./components/DashboardLogin";

export const metadata = {
  title: "Dashboard — Rawdah Montessori Primary School",
};

export default function DashboardPage() {
  return (
    <section className="dashboard_login_main">
      <div className="dashboard_login_overlay"></div>
      <div className="dashboard_login_card">
        <DashboardLogin />
      </div>
    </section>
  );
}
