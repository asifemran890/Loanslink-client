import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 bg-cyan-400 ">
        <Sidebar />
        <main className="flex-1 bg-blue-200">
          <Outlet /> {/* This renders the dynamic content/pages */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
