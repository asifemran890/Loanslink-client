import React from "react";
import { Link } from "react-router";

const Card = ({ loant }) => {
  console.log(loant);
  const { title, loan_category, image, interest_rate, max_loan_limit, _id } =
    loant;
  return (
    <div>
      <div
        key={loant.id}
        className=" bg-white  shadow-md rounded-lg p-2 border border-gray-200"
      >
        <img src={image} alt="img" className="w-full h-90 object-cover rounded-md" />

        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="text-gray-600">Category: {loan_category}</p>
        <p className="text-gray-600">Interest: {interest_rate}</p>
        <p className="text-gray-600">Max Limit: {max_loan_limit}</p>

        <Link to={`/dashboard/loans/${_id}`}>
          <button className="mt-4 w-full btn-primary  text-white py-2 rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
