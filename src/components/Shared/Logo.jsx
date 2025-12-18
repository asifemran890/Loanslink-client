import React from "react";
import logoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logoImg} alt="LoanLink" className="h-14 rounded-2xl pr-2" />
      <p className="font-bold text-lg sm:text-xl">
        <span className="text-emerald-900">Loan</span>
        <span className="text-shadow-purple-500">Link</span>
      </p>
    </div>
  );
};

export default Logo;
