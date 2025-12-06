import { useState } from "react";
import { Link } from "react-router";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import Container from "../Container";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-flat.png";

import MyLink from "../MyLink";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navItemsBeforeLogin = [
    { name: "Home", path: "/" },
    { name: "All Loans", path: "/loans" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/signup" },
  ];

  const navItemsAfterLogin = [
    { name: "Home", path: "/" },
    { name: "All Loans", path: "/loans" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className=" w-full h-15 mt-2    bg-white  shadow-sm dark:bg-gray-900 dark:text-white">
      <div >
        <Container>
          <div className="flex  items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} alt="logo" className="w-15 h-10 rounded-2xl" />
              <h1 className="font-bold text-2xl">LoanLink</h1>
            </Link>{" "}
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {user
                ? navItemsAfterLogin.map((item) => (
                    <MyLink
                      key={item.name}
                      to={item.path}
                      className="hover:text-blue-600"
                    >
                      {item.name}
                    </MyLink>
                  ))
                : navItemsBeforeLogin.map((item) => (
                    <MyLink
                      key={item.name}
                      to={item.path}
                      className="hover:text-blue-600"
                    >
                      {item.name}
                    </MyLink>
                  ))}

              {/* Theme Toggle Button */}
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />

              {/* User Avatar + Logout */}
              {user && (
                <div className="flex items-center gap-4">
                  <img
                    src={user.photoURL || avatarImg}
                    className="w-10 h-10 rounded-full"
                    alt="avatar"
                  />
                  <button
                    onClick={logOut}
                    className="px-4 py-1 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 border rounded-full hover:shadow-md"
              >
                {isOpen ? <AiOutlineCloseSquare /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
              <div className="flex flex-col gap-3">
                {(user ? navItemsAfterLogin : navItemsBeforeLogin).map(
                  (item) => (
                    <MyLink
                      key={item.name}
                      to={item.path}
                      className="border-b pb-2 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </MyLink>
                  )
                )}
                <img
                  src={user.photoURL || avatarImg}
                  className="w-10 h-10 rounded-full"
                  alt="avatar"
                />

                {/* Theme Toggle */}
                <button className="px-3 py-1 border rounded-full w-fit mt-2">
                  🌓 Theme
                </button>

                {/* Logout for mobile */}
                {user && (
                  <button
                    onClick={logOut}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 mt-2"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
