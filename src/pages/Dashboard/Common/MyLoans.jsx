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

      return result.data;
    },
  });
  console.log(loans);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mt-4">My Loans</h1>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr className="bg-blue-500 text-white  font-bold">
                  <th
                    scope="col"
                    className="px-5 py-3  border    text-center text-sm uppercase "
                  >
                    Loan ID
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border   text-center text-sm uppercase "
                  >
                    Loan Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-center border     text-sm uppercase "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border    text-center text-sm uppercase "
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3   border    text-center text-sm uppercase "
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
