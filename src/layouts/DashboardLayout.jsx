import Navbar from "../components/Shared/Navbar/Navbar";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer/Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* nevber */}
      <Navbar />
      <div className="flex flex-1 bg-cyan-400 ">
        {/* sidebear */}
        <Sidebar />
        <main className="  p-4 w-full h-[calc(100vh-64px)] overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
