import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 mt-15">
        <Sidebar />
        <main className="flex-1 p-4">
          <Outlet /> {/* This renders the dynamic content/pages */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
