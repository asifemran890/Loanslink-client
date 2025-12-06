import { Link } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Card from "./card";

const AvailableLoans = () => {
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const result = await axios(`http://localhost:5000/latest-loans`);
      console.log(result);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    // <div className="max-w-7xl mx-auto px-4 py-12">
    //   <h2 className="text-3xl font-bold text-center mb-8">Available Loans</h2>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {loans.map((loan) => (
    //       <div
    //         key={loan._id}
    //         className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
    //       >
    //         <img
    //           src={loan.image}
    //           alt={loan.title}
    //           className="w-full h-48 object-cover rounded-lg"
    //         />

    //         <h3 className="text-xl font-semibold mt-4">{loan.title}</h3>
    //         <p className="text-gray-600 mt-1">{loan.shortDescription}</p>

    //         <p className="text-gray-800 font-medium mt-2">
    //           Max Loan Limit: {loan.maxLimit}
    //         </p>

    //         <Link to={`/loans/${loan._id}`}>
    //           <button className="mt-4 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700">
    //             View Details
    //           </button>
    //         </Link>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">AvailableLoans</h1>

      {loans && loans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loant) => (
            <Card key={loant._id} loant={loant} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AvailableLoans;
