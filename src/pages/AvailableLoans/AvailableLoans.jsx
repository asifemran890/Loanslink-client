import { Link } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Card from "./card";

const AvailableLoans = () => {
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const result = await axios(`http://localhost:5000/latest-loans`);
      console.log(result);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
  
    <div className="max-w-7xl mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">AvailableLoans</h1>

      {loans && loans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loant) => (
            <Card key={loant._id} loant={loant} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AvailableLoans;
