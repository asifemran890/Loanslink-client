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

  const handleApply = () => {
    navigate("/dashboard/loan-applications", {
      state: loans,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-amber-100">
      <img src={ImagesUrl} alt="img" className="w-full h-100 rounded mb-5" />
      <h1 className="text-3xl font-bold">{LoanTitle}</h1>
      <p className="text-gray-700 font-bold mt-2">Category: {Category}</p>
      <p className="text-gray-700  font-bold">Interest:{InterestRate}</p>
      <p className="text-gray-700  font-bold">MaxLoanLimit:{MaxLoanLimit} </p>
      <div className="flex gap-2">
        <label className="text-gray-700 font-bold ">
          EMI Plans :{EMIPlans}
        </label>
      </div>
      <p className="mt-5  text-black">Description: {Description}</p>

      <button
        onClick={handleApply}
        type="button"
        className="btn btn-accent mt-3 btn-outline w-full rounded-md py-3 "
      >
        Apply Now Loan
      </button>
      
    </div>
  );
};

export default LoanDetails;
