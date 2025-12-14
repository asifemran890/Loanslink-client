import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("https://backend-bay-tau-10.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(loans);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Users</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-center">
            <tr className="bg-blue-500 text-white  font-bold">
              <th className="px-6  text-center py-3 border text-xs   uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border text-center text-xs  uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border text-center text-xs  uppercase tracking-wider">
                Role
              </th>

              <th className="px-6 py-3  border text-center text-xs uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loans.map((user) => (
              <tr key={user._id}>
                <td className="px-6 border text-center py-4 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-center border whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 border text-center  whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 border text-center  whitespace-nowrap">
                  <button
                    // onClick={() => onUpdate(loans)}
                    className="text-indigo-600   hover:text-indigo-900 font-medium"
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
};

export default ManageUsers;
