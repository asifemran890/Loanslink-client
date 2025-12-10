// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";

// const ManageLoans = () => {
//   const [loans, setLoans] = useState([]);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/loans")
//       .then((res) => res.json())
//       .then((data) => setLoans(data))
//       .catch((err) => console.error(err));
//   }, []);
//   console.log(loans);

//   // const handleDelete = async (id) => {
//   //   const confirmDelete = window.confirm(
//   //     "Are you sure you want to delete this loan?"
//   //   );
//   //   if (!confirmDelete) return;

//   //   try {
//   //     const res = await fetch(`http://localhost:5000/loans/${id}`, {
//   //       method: "DELETE",
//   //     });
//   //     if (res.ok) {
//   //       setLoans(loans.filter((loan) => loan._id !== id));
//   //       alert("Loan deleted successfully");
//   //     }
//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("Error deleting loan");
//   //   }
//   // };

//   const filteredLoans = loans.filter(
//     (loan) =>
//       (loan.loanTitle &&
//         loan.loanTitle.toLowerCase().includes(search.toLowerCase())) ||
//       (loan.category &&
//         loan.category.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-semibold mb-4">Manage Loans</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by title or category"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 px-4 py-2 border rounded w-full max-w-sm"
//       />

//       <table className="min-w-full border border-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border">Image</th>
//             <th className="p-2 border">Title</th>
//             <th className="p-2 border">Interest</th>
//             <th className="p-2 border">Category</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredLoans.map((loan) => (
//             <tr key={loan._id} className="text-center border-b">
//               <td className="p-2 border">
//                 <img
//                   src={loan.imagesUrl}
//                   alt={loan.loanTitle}
//                   className="w-16 h-16 object-cover mx-auto"
//                 />
//               </td>
//               <td className="p-2 border">{loan.loanTitle}</td>
//               <td className="p-2 border">{loan.interestRate}%</td>
//               <td className="p-2 border">{loan.category}</td>
//               <td className="p-2 border flex justify-center gap-2">
//                 {/* Update */}
//                 <button
//                   onClick={() => navigate(`/dashboard/update-loan/${loan._id}`)}
//                   className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                   Update
//                 </button>

//                 {/* Delete */}
//                 <button
//                   // onClick={() => handleDelete(loan._id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageLoans;
import { useState, useEffect } from "react";

import ManageLoansDetails from "./Details/ManageLoansDetails";
const ManageLoans = () => {
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/loans")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(loans);

  // **UNCOMMENTED AND CORRECTED DELETE FUNCTION**
  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this loan?"
  //   );
  //   if (!confirmDelete) return;

  //   try {
  //     const res = await fetch(`http://localhost:5000/loans/${id}`, {
  //       // Use backticks for template literals
  //       method: "DELETE",
  //     });
  //     if (res.ok) {
  //       setLoans(loans.filter((loan) => loan._id !== id));
  //       alert("Loan deleted successfully");
  //     } else {
  //       // Handle non-200 responses from the server
  //       const errorData = await res.json();
  //       throw new Error(errorData.message || "Failed to delete loan");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(`Error deleting loan: ${err.message || err}`); // Display a better error message
  //   }
  // };

  // const filteredLoans = loans.filter(
  //   (loan) =>
  //     (loan.loanTitle &&
  //       loan.loanTitle.toLowerCase().includes(search.toLowerCase())) ||
  //     (loan.category &&
  //       loan.category.toLowerCase().includes(search.toLowerCase()))
  // );

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Manage Loans</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full max-w-sm"
      />

      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Interest</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
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
