import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router";
import toast from "react-hot-toast";
import { loanApplicationUser } from "../../../utils";

const LoanApplication = () => {
  const { user } = useAuth();
  const location = useLocation();
  const loanData = location.state;
  const autofilledData = {
    userEmail: user?.email,
    loanTitle: loanData?.LoanTitle,
    interestRate: loanData?.InterestRate,
  };

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    nationalId: "",
    incomeSource: "",
    monthlyIncome: "",
    loanAmount: "",
    reason: "",
    address: "",
    extraNotes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Placeholder functions for database actions
  const saveLoanApplication = async (data) => {
    // Replace with your API call
    console.log("Saving loan application:", data);
    return Promise.resolve({ id: "loan123" }); // simulate saved ID
  };

  const addLoanToBorrower = async (loanId) => {
    // Replace with your API call
    console.log("Adding loan to borrower:", loanId);
    return Promise.resolve();
  };

  const addLoanToPendingLoans = async (loanId) => {
    // Replace with your API call
    console.log("Adding loan to pending loans:", loanId);
    return Promise.resolve();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      // Combine all data
      const loanData = {
        ...autofilledData,
        ...formData,
      };
      // Save to database
      const savedLoan = await saveLoanApplication(loanData);
      const loanId = savedLoan.id;

      // Update borrower and pending loans
      await addLoanToBorrower(loanId);
      await addLoanToPendingLoans(loanId);

      setSuccessMsg("Loan application submitted successfully!");
      // Reset form if needed
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        nationalId: "",
        incomeSource: "",
        monthlyIncome: "",
        loanAmount: "",
        reason: "",
        address: "",
        extraNotes: "",
        status: "Pending",
        applicationFeeStatus: "Unpaid",
      });
    } catch {
      setErrorMsg("Error submitting application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const handleSubmitData = async () => {
    try {
      await loanApplicationUser({
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        nationalId: formData.nationalId,
        incomeSource: formData.incomeSource,
        monthlyIncome: formData.monthlyIncome,
        loanAmount: formData.loanAmount,
        reason: formData.reason,
        address: formData.address,
        extraNotes: formData.extraNotes,
      });

      toast.success("Loan Application Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-3 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Loan Application Form</h2>
      {successMsg && <div className="mb-4 text-green-600">{successMsg}</div>}
      {errorMsg && <div className="mb-4 text-red-600">{errorMsg}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Autofilled Read-Only Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="text"
              value={autofilledData.userEmail}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Loan Title</label>
            <input
              type="text"
              value={autofilledData.loanTitle}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Interest Rate</label>
            <input
              type="text"
              value={autofilledData.interestRate}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* User Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              National ID / Passport Number
            </label>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Income Source</label>
            <input
              type="text"
              name="incomeSource"
              value={formData.incomeSource}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Monthly Income</label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Loan Amount</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Reason for Loan</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Address and Extra Notes */}
        <div>
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Extra Notes</label>
          <textarea
            name="extraNotes"
            value={formData.extraNotes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            onClick={handleSubmitData}
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanApplication;
