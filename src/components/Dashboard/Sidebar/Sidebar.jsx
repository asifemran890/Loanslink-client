import { useState } from "react";
import { Link } from "react-router";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

// User Menu
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";

const Sidebar = () => {

  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar, only visible till md breakpoint */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div>
        <div className="flex flex-col h-full">
          {/* Middle Content */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}
            <nav>
              {/* Common Menu */}
              <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              />
              {/* Role-Based Menu */}
              <CustomerMenu />
              <SellerMenu />
              <AdminMenu />
            </nav>
          </div>

          {/* Bottom Content */}
          <div>
            <hr />

            <MenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
