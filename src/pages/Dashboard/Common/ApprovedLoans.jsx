import { useEffect, useState } from "react";

export default function ApprovedLoans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/loanapplication")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(loans);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Approved Loans</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-center">
            <tr>
              <th className="px-6  text-center py-3 border text-xs font-bold  uppercase tracking-wider">
                Loan ID
              </th>
              <th className="px-6 py-3 border text-center text-xs font-bold  uppercase tracking-wider">
                User Info
              </th>
              <th className="px-6 py-3 border text-center text-xs font-bold  uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 border text-center text-xs font-bold  uppercase tracking-wider">
                Approved Date
              </th>
              <th className="px-6 py-3  border text-center text-xs font-bold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td className="px-6 border text-center py-4 whitespace-nowrap">
                  {loan._id}
                </td>
                <td className="px-6 py-4 text-center border whitespace-nowrap text-sm text-gray-500">
                  {loan.name} , {loan.email}
                </td>
                <td className="px-6 py-4 border text-center  whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                    {loan.loanAmount}
                  </span>
                </td>
                <td className="px-6 border py-4 whitespace-nowrap">
                  {/* Highlight 'Suspended' status */}

                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                    {loan.createdAt}
                  </span>
                </td>
                <td className="px-6 border text-center py-4 whitespace-nowrap">
                  <button
                    // onClick={() => onUpdate(loans)}
                    className="text-indigo-600 hover:text-indigo-900 font-medium"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
