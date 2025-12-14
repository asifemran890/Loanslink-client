import { useState } from "react";
import { Link } from "react-router";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import { FaUserCog, FaUsers, FaUserTie } from "react-icons/fa";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";

import MenuItem from "./Menu/MenuItem";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import Container from "../../Shared/Container";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [role, isRoleLoading] = useRole();
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      {/* Mobile Header */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden shadow-md">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-5 left-0 h-full z-40 shadow-lg transform transition-transform duration-300
        ${isActive ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <Container>
          <div className="flex flex-col h-full p-4">
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="flex flex-col gap-2">
                {role === "custome" && (
                  <>
                    <MenuItem
                      icon={BsGraphUp}
                      label="All Loans"
                      address="/dashboard/all-loans"
                    />
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
                )}

                {role === "manager" && (
                  <>
                    <MenuItem
                      icon={FaUserCog}
                      label="Manage Loans"
                      address="manage-loans"
                    />
                    <MenuItem
                      icon={BsFillHouseAddFill}
                      label="Add Loan"
                      address="add-loan"
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
                )}

                {role === "admin" && (
                  <>
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
                  </>
                )}
              </nav>
            </div>
          </div>
        </Container>
      </div>

      {/* Overlay for mobile */}
      {isActive && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-blue-400 bg-opacity-40 md:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Sidebar;

{
  /* Common Menu */
}
{
  /* <MenuItem
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
                <MenuItem
                  icon={MdOutlineManageHistory}
                  label="Approved Loans"
                  address="approved-loans"
                /> */
}
