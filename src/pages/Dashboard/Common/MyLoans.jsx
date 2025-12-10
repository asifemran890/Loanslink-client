import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CostomerLoanDetails from "./Details/CostomerLoanDetails";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MyLoans = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: loans = {}, isLoading } = useQuery({
    queryKey: ["loans", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/my-loanapplication/${user?.email}`);
      // http://localhost:5000/my-loanapplication/asifemran890@gmail.com
      return result.data;
    },
  });
  console.log(loans);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Loan ID
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Loan Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <CostomerLoanDetails key={loan._id} loan={loan} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLoans;
