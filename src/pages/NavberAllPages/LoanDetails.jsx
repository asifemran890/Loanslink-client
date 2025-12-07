import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const LoanDetails = () => {
  const { id } = useParams();
  const [units, setUnits] = useState("");
  const { data: loans = {}, isLoading } = useQuery({
    queryKey: ["loans", id],
    queryFn: async () => {
      const result = await axios(`http://localhost:5000/loans/${id}`);
      return result.data;
    },
  });
  const {
    LoanTitle,
    Category,
    ImagesUrl,
    Description,
    InterestRate,
    MaxLoanLimit,
    EMIPlans,
  } = loans;
  console.log(loans);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={ImagesUrl}
        alt="img"
        className="w-full h-100 rounded mb-5"
      />

      <h1 className="text-3xl font-bold">{LoanTitle}</h1>
      <p className="text-gray-700 font-bold mt-2">Category: {Category}</p>
      <p className="text-gray-700  font-bold">Interest:{InterestRate}</p>
      <p className="text-gray-700  font-bold">MaxLoanLimit:{MaxLoanLimit} </p>

      <div className="flex gap-2">
        <label className="text-2xl font-bold mb-1">EMI Plans :</label>
        <select
          name="EMI Plans"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          required
          className="input input-bordered  border-gray-300 rounded-lg p-2 outline-none border cursor-pointer"
        >
          <option value="">Select EMI Plans</option>

          {EMIPlans?.map((plan, index) => (
            <option key={index}>
              <a>{plan}</a>
            </option>
          ))}
        </select>
      </div>
      <p className="mt-5  text-black">Description: {Description}</p>
    </div>
  );
};

export default LoanDetails;
