
import { useEffect, useState } from "react";

export default function PendingApplications() {
  const [loans, setLoans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/loanapplication")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);

  const handleApprove = async (loanId) => {
    const timestamp = new Date().toISOString();
    await fetch(`http://localhost:5000/loanapplication/${loanId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Approved", approvedAt: timestamp }),
    });
    // Refresh data after update
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan._id === loanId
          ? { ...loan, status: "Approved", approvedAt: timestamp }
          : loan
      )
    );
  };

  const handleReject = async (loanId) => {
    await fetch(`http://localhost:5000/loanapplication/${loanId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Rejected" }),
    });
    // Refresh data after update
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan._id === loanId ? { ...loan, status: "Rejected" } : loan
      )
    );
  };

  const handleView = (loan) => {
    setSelectedLoan(loan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLoan(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Pending Applications
      </h1>
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
                Date
              </th>
              <th className="px-6 py-3 border text-center text-xs font-bold uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border text-center text-xs font-bold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td className="px-1 border text-center py-4 whitespace-nowrap">
                  {loan._id}
                </td>
                <td className="px-1 py-4 text-center border whitespace-nowrap text-sm text-gray-500">
                  {loan.name} , {loan.email}
                </td>
                <td className=" py-4 border text-center  whitespace-nowrap">
                  {loan.loanAmount}
                </td>
                <td className="px-1 border py-4 whitespace-nowrap">
                  {loan.createdAt}
                </td>
                <td className="px-1 border  whitespace-nowrap">
                  {loan.status}
                </td>
                <td className="px-1 border py-4 whitespace-nowrap flex justify-center space-x-2">
                  {/* Buttons */}
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleApprove(loan._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleReject(loan._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => handleView(loan)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing loan details */}
      {showModal && selectedLoan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Loan Details</h2>
            <p>
              <strong>Loan ID:</strong> {selectedLoan._id}
            </p>
            <p>
              <strong>Name:</strong> {selectedLoan.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedLoan.email}
            </p>
            <p>
              <strong>Amount:</strong> {selectedLoan.loanAmount}
            </p>
            <p>
              <strong>Date:</strong> {selectedLoan.createdAt}
            </p>
            <p>
              <strong>Status:</strong> {selectedLoan.status}
            </p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
  );
}
