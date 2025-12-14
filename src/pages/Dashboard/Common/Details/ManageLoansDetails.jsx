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
      const res = await fetch(
        `https://backend-bay-tau-10.vercel.app/loans/${_id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.deletedCount > 0) {
        setLoans(loans.filter((item) => item._id !== _id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    }
  };

  return (
    <tr>
      <td className=" px-5 py-3 bg-white  border  text-gray-800  ">
        <img className="h-20 w-full" src={ImagesUrl} alt="img" />
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{LoanTitle}</p>
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{Category}</p>
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{InterestRate}</p>
      </td>

      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">Active</p>
      </td>

      <td className="pl-6 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <button
          onClick={() => handleDelete(loans._id)}
          className="bg-red-500 flex items-center  text-white px-3 py-1 rounded"
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageLoansDetails;
