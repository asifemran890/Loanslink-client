import { useState, useEffect } from "react";

import ManageLoansDetails from "./Details/ManageLoansDetails";
const ManageLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/loans")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(loans);

  return (
    <div className="p-3">
      <h2 className="text-xl p-3  font-bold text-center mb-4">Manage Loans</h2>

      {/* Search */}
      {/* <input
        type="text"
        placeholder="Search by title or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full max-w-sm"
      /> */}

      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Interest</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
            <th className="p-2 border">Update</th>
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
