//
import React from "react";
import { Link } from "react-router";

const Loans = ({ loant }) => {
  console.log(loant);
  const { LoanTitle, Category, ImagesUrl, InterestRate, MaxLoanLimit, _id } =
    loant;
  return (
    <div>
      <div
        key={loant.id}
        className="bg-white shadow-md rounded-lg p-2 border border-gray-200"
      >
        <img src={ImagesUrl} alt="img" className="  rounded-md" />
        <div className="pl-5">
          <h2 className="text-xl font-semibold mt-4">{LoanTitle}</h2>
          <p className="text-gray-600">Category: {Category}</p>
          <p className="text-gray-600">Interest: {InterestRate}</p>
          <p className="text-gray-600">Max Limit: {MaxLoanLimit}</p>
        </div>
        <Link to={`/loans/${_id}`}>
          <button className="mt-4 w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Loans;
