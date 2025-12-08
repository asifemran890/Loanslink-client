import { useState } from "react";
import { Link } from "react-router";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import { FaUserCog, FaUsers, FaUserTie } from "react-icons/fa";

// User Menu
import MenuItem from "./Menu/MenuItem";

import LoadingSpinner from "../../Shared/LoadingSpinner";
import Container from "../../Shared/Container";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [role, isRoleLoading] = useRole();
  console.log(role, isRoleLoading);
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
        <Container>
          <div className="flex flex-col h-full">
            {/* Middle Content */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              {/*  Menu Items */}
              <nav>
                
                {/* {role === "custome" && (
                  <>
                    <MenuItem
                      icon={FaUserTie}
                      label="My Loans"
                      address="my-loans"
                    />
                    <MenuItem
                      icon={MdHomeWork}
                      label="Loan Applications"
                      address="loan-applications"
                    />
                    <MenuItem
                      icon={FcSettings}
                      label="Profile"
                      address="/dashboard/profile"
                    />
                  </>
                )} */}

                {/* Manager Menu */}
                {/* {role === "manager" && (
                  <>
                    <MenuItem
                      icon={BsFillHouseAddFill}
                      label="Add Loan"
                      address="add-loan"
                    />
                    <MenuItem
                      icon={FaUserCog}
                      label="Manage Loans"
                      address="manage-loans"
                    />
                    <MenuItem
                      icon={MdOutlineManageHistory}
                      label="Pending Applications"
                      address="pending-applications"
                    />
                    <MenuItem
                      icon={FcSettings}
                      label="Profile"
                      address="/dashboard/profile"
                    />
                  </>
                )} */}

                {/* Admin Menu */}
                {/* {role === "admin" && (
                  <>
                    {" "}
                    <MenuItem
                      icon={BsGraphUp}
                      label="All Loans"
                      address="/dashboard/all-loans"
                    />{" "}
                    <MenuItem
                      icon={FaUsers}
                      label="Manage Users"
                      address="/dashboard/manage-users"
                    />{" "}
                  </>
                )} */}
                {/* Common Menu */}
                <MenuItem
                  icon={FaUserTie}
                  label="My Loans"
                  address="my-loans"
                />
                <MenuItem
                  icon={BsGraphUp}
                  label="All Loans"
                  address="/dashboard/all-loans"
                />
                <MenuItem
                  icon={FaUsers}
                  label="Manage Users"
                  address="/dashboard/manage-users"
                />
                <MenuItem
                  icon={FaUserCog}
                  label="Manage Loans"
                  address="manage-loans"
                />
                <div>
                  <MenuItem
                    icon={FcSettings}
                    label="Profile"
                    address="/dashboard/profile"
                  />
                </div>

                <MenuItem
                  icon={BsFillHouseAddFill}
                  label="Add Loan"
                  address="add-loan"
                />
                <MenuItem
                  icon={MdHomeWork}
                  label="Loan Applications"
                  address="loan-applications"
                />
                <MenuItem
                  icon={MdOutlineManageHistory}
                  label="Pending Applications"
                  address="pending-applications"
                />

                {/* Role-Based Menu */}
              </nav>
            </div>

            {/* Bottom Content */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Sidebar;
