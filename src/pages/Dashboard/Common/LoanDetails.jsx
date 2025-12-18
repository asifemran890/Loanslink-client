import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const LoanDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: loans = {}, isLoading } = useQuery({
    queryKey: ["loans", id],
    queryFn: async () => {
      const result = await axios(
        `https://backend-bay-tau-10.vercel.app/loans/${id}`
      );
      return result.data;
    },
  });
  const {
    title,
    loan_category,
    available_emi_plan,
    image,
    description,
    interest_rate,
    max_loan_limit,
    _id,
  } = loans;
  console.log(loans);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const handleApply = () => {
    navigate("/dashboard/loan-applications", {
      state: loans,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-slate-300 ">
      <img src={image} alt="img" className="w-full h-100 rounded mb-5" />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-700 font-bold mt-2">Category: {loan_category}</p>
      <p className="text-gray-700  font-bold">Interest:{interest_rate}</p>
      <p className="text-gray-700  font-bold">MaxLoanLimit:{max_loan_limit} </p>
      <div className="flex gap-2">
        <label className="text-gray-700 font-bold ">
          EMI Plans :{available_emi_plan}
        </label>
      </div>
      <p className="mt-5  text-black">Description: {description}</p>

      <button
        onClick={handleApply}
        type="button"
        className="btn-primary  mt-3 text-white  rounded-md py-3 px-3 "
      >
        Apply Now
      </button>
    </div>
  );
};

export default LoanDetails;
