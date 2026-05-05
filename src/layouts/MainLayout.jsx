import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Page Content */}
      <main className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
