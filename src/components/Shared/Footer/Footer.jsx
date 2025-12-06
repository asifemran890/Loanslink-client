import React from "react";
import logo from "../../../assets/images/logo-flat.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-5 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
            <h1 className="font-bold text-xl">LoanLink</h1>
          </div>
          <p className="max-w-sm text-gray-600 dark:text-gray-400">
            LoanLink helps you find the best loan options quickly and securely.
            Compare rates, explore options, and manage your finances
            effortlessly.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Useful Links</h2>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/all-loans" className="hover:text-blue-600">
            All Loans
          </a>
          <a href="/about" className="hover:text-blue-600">
            About Us
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
          <a href="/login" className="hover:text-blue-600">
            Login
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 flex justify-center gap-2 dark:border-gray-700 mt-8 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} LoanLink. All rights reserved.
        <h1>Develoy- Asif Emran</h1>
      </div>
    </footer>
  );
};

export default Footer;
