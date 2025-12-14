const CostomerLoanDetails = ({ loan }) => {
  //   let [isOpen, setIsOpen] = useState(false)

  const { loanAmount, applicationFeeStatus, extraNotes, status, _id } =
    loan || {};

  return (
    <tr>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{_id}</p>
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{extraNotes}</p>
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">${loanAmount}</p>
      </td>
      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{status}</p>
      </td>

      <td className="px-5 py-3 bg-white  border  text-gray-800  text-center text-sm uppercase font-normal">
        <p className="text-gray-900 ">{applicationFeeStatus}</p>
      </td>
    </tr>
  );
};

export default CostomerLoanDetails;
