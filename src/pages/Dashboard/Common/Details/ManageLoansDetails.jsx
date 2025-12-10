const ManageLoansDetails = ({ loan }) => {
  //   let [isOpen, setIsOpen] = useState(false)

  const { InterestRate, LoanTitle, Category, ImagesUrl } = loan || {};

  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 border">{ImagesUrl}</th>
        <th className="p-2 border">{LoanTitle}</th>
        <th className="p-2 border">{Category}</th>
        <th className="p-2 border">{InterestRate}</th>
        <th className="p-2 border">Actions</th>
      </tr>
   
    </thead>
  );
};

export default ManageLoansDetails;
