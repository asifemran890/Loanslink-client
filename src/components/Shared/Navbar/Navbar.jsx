// import React from "react";
// import { Link } from "react-router";
// import useAuth from "../../../hooks/useAuth";
// import MyLink from "../MyLink";
// import loanlink from "../../../assets/images/logo-flat.png";
// import { useTheme } from "../../../Theme/ThemeContext";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const { theme, toggleTheme } = useTheme();

//   const handleLogOut = () => {
//     logOut().catch((error) => console.error(error));
//   };

//   const guestLinks = (
//     <>
//       <li>
//         <MyLink to="/">Home</MyLink>
//       </li>
//       <li>
//         <MyLink to="/loans">All Loans</MyLink>
//       </li>
//       <li>
//         <MyLink to="/about">About Us</MyLink>
//       </li>
//       <li>
//         <MyLink to="/contact">Contact</MyLink>
//       </li>
//     </>
//   );

//   const userLinks = (
//     <>
//       <li>
//         <MyLink to="/">Home</MyLink>
//       </li>
//       <li>
//         <MyLink to="/loans">All Loans</MyLink>
//       </li>
//       <li>
//         <MyLink to="/dashboard">Dashboard</MyLink>
//       </li>
//     </>
//   );

//   const menuLinks = user ? userLinks : guestLinks;

//   return (
//     <div className="navbar lg:pl-10 lg:pr-10 mx-auto bg-gray-500 shadow-sm sticky top-0 z-50">
//       {/* Logo & Mobile menu */}
//       <div className="navbar-start  ">
//         <div className="dropdown">
//           {/* Mobile menu button */}
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost  "
//             aria-label="Menu"
//           >
//             {/* Hamburger icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </div>
//           {/* Dropdown menu */}
//           <ul
//             tabIndex={-1}
//             className="menu menu-sm dropdown-content mt-3 z-50 w-52 p-2 shadow bg-base-100 rounded-box"
//           >
//             {menuLinks}
//             <li>
//               <MyLink to="/profile">Profile</MyLink>
//             </li>
//           </ul>
//         </div>
//         {/* Logo & Title */}
//         <Link to="/" className="flex items-center gap-2">
//           {/* Logo: only visible on large screens */}
//           <img
//             src={loanlink}
//             alt="Logo"
//             className="hidden lg:block w-14 h-14 object-cover rounded-lg"
//           />

//           {/* Mobile title */}
//           <h1 className="font-bold text-2xl lg:hidden">LoanLink</h1>

//           {/* Desktop title */}
//           <div className="hidden lg:block">
//             <h1 className="font-bold text-2xl text-yellow-500">LoanLink</h1>
//           </div>
//         </Link>
//       </div>

//       {/* Center menu for large screens */}
//       <div className="navbar-center hidden  lg:flex">
//         <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
//       </div>

//       {/* User actions & theme toggle */}
//       <div className="navbar-end gap-2 items-center ">
//         <button
//           aria-label="Toggle theme"
//           onClick={toggleTheme}
//           className="btn btn-ghost pl-5 "
//         >
//           {theme === "dark" ? (
//             /* Sun icon */
//             <svg
//               className="swap-off h-10 w-10 fill-current "
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//             </svg>
//           ) : (
//             /* Moon icon */
//             <svg
//               className="swap-on h-10 w-10 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//             </svg>
//           )}
//         </button>

//         {user ? (
//           <div className="flex items-center gap-3   ">
//             <div className="avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   src={user.photoURL || "https://i.ibb.co/YcZq7kP/default.jpg"}
//                   alt="User"
//                 />
//               </div>
//             </div>
//             <button
//               onClick={handleLogOut}
//               className="px-4 py-1 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="flex items-center gap-2">
//             <Link
//               className="px-4 py-1 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//               to="/signup"
//             >
//               Register
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router";
import { useTheme } from "../../../Theme/ThemeContext";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Logo from "../Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("access-token");
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have been successfully logged out!",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong. Please try again.",
        });
      });
  };
  // Avatar setup
  const avatar = user?.photoURL ? (
    <img
      src={user.photoURL}
      alt="User avatar"
      className="h-8 w-8 rounded-full object-cover"
    />
  ) : (
    <div
      className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${
        isDark ? "bg-emerald-800" : "bg-emerald-600"
      }`}
    >
      {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
    </div>
  );

  // Nav link class (clear light/dark contrast)
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isDark
        ? `text-gray-200 hover:bg-emerald-900/50 ${
            isActive ? "bg-emerald-800 text-white" : ""
          }`
        : `text-white hover:bg-emerald-700/40 ${
            isActive ? "bg-emerald-700 text-white" : ""
          }`
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur transition-colors duration-300 text-white ${
          isDark
            ? "bg-gradient-to-r from-gray-950 via-gray-900 to-emerald-950"
            : "bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <Logo></Logo>

            {/* Main Links */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-1">
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>
              <NavLink to="/loans" className={navClass}>
                All-Loans
              </NavLink>

              <NavLink to="/about" className={navClass}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
              {user && (
                <>
                  <NavLink to="/dashboard" className={navClass}>
                    Dashboard
                  </NavLink>
                </>
              )}
            </nav>

            {/* Right side */}
            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:flex items-center gap-5">
                {!user ? (
                  <>
                    <NavLink to="/login" className="btn-primary">
                      Login
                    </NavLink>
                    <NavLink to="/signup" className="btn-secondary">
                      Register
                    </NavLink>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLogOut}
                      className=" btn-primary"
                      type="button"
                    >
                      Logout
                    </button>
                    <button
                      title={user.name || "Profile"}
                      type="button"
                      className="ml-1"
                    >
                      {avatar}
                    </button>
                  </>
                )}

                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="ml-2 px-2 py-2 rounded-md hover:bg-emerald-800/40 transition-colors"
                  aria-label="Toggle theme"
                  type="button"
                  title={
                    theme === "dark"
                      ? "Switch to Light Mode"
                      : "Switch to Dark Mode"
                  }
                >
                  {theme === "dark" ? <FaSun></FaSun> : <FaMoon />}
                </button>
              </div>

              {/* Mobile menu */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleTheme}
                  className="mr-2 px-2 py-2 rounded-md hover:bg-emerald-800/40 transition-colors"
                  aria-label="Toggle theme"
                  type="button"
                >
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>

                <button
                  onClick={() => setOpen((o) => !o)}
                  className="p-2 rounded-md hover:bg-emerald-800/40 transition-colors"
                  aria-expanded={open}
                  aria-label="Toggle menu"
                  type="button"
                >
                  {open ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav
            className={`md:hidden px-4 pb-4 transition-colors ${
              isDark ? "bg-gray-900/95" : "bg-emerald-700/20"
            }`}
          >
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/loans"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                All-Loans
              </NavLink>

              <NavLink
                to="/about"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>

              {user && (
                <>
                  <NavLink
                    to="/dashboard"
                    className={navClass}
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                </>
              )}

              <div className="mt-2 border-t border-white/10 pt-2 flex flex-col gap-2">
                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      className="btn-primary"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="btn-secondary"
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </NavLink>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        handleLogOut();
                        setOpen(false);
                      }}
                      className="btn btn-primary"
                      type="button"
                    >
                      Logout
                    </button>

                    <button
                      className="text-left px-3 py-2 rounded-md hover:bg-emerald-800/40 flex items-center gap-2 transition-colors"
                      type="button"
                    >
                      {avatar}
                      <span>{user?.name}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
