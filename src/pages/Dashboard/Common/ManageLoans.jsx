import { useState, useEffect } from "react";

import ManageLoansDetails from "./Details/ManageLoansDetails";
const ManageLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("https://backend-bay-tau-10.vercel.app/loans")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(loans);

  return (
    <div className="p-3">
      <h2 className="text-xl p-3  font-bold text-center mb-4">Manage Loans</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mt-6">
          <tr className="bg-blue-500 p-5 text-white  font-bold">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Interest</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
            <th className="p-2 border">Delete</th>
          </tr>
        </thead>

        <tbody>
          {loans.map((loan) => (
            <ManageLoansDetails key={loan._id} loan={loan} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageLoans;
