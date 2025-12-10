const ManageLoansDetails = ({ loan }) => {
  //   let [isOpen, setIsOpen] = useState(false)

  const { InterestRate, LoanTitle, Category, ImagesUrl } = loan || {};

  return (
    // <thead className="bg-gray-100">
    //   <tr>
    //     <th className="p-2 border">{ImagesUrl}</th>
    //     <th className="p-2 border">{LoanTitle}</th>
    //     <th className="p-2 border">{Category}</th>
    //     <th className="p-2 border">{InterestRate}</th>
    //     <th className="p-2 border">Actions</th>
    //   </tr>

    // </thead>
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
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Update
        </button>
      </td>
      <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
        <button className="bg-red-500  text-white px-3 py-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageLoansDetails;
