import { useState } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa6";

const ManageLoansDetails = ({ loan }) => {
  const [loans, setLoans] = useState([]);

  const { InterestRate, LoanTitle, Category, ImagesUrl, _id } = loan || {};
  const handleDelete = async () => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00C951",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirmDelete.isConfirmed) {
      const res = await fetch(`http://localhost:5000/loans/${_id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        setLoans(loans.filter((item) => item._id !== _id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    }
  };

  return (
    <tr>
      <td className="border-b  border p-5 border-gray-200 bg-white text-sm">
        <img className="h-10 w-10" src={ImagesUrl} alt="img" />
      </td>
      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{LoanTitle}</p>
      </td>
      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{Category}</p>
      </td>
      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{InterestRate}</p>
      </td>

      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">Active</p>
      </td>

      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleDelete(loans._id)}
          className="bg-red-500 flex items-center gap-2 text-white px-3 py-1 rounded"
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageLoansDetails;
