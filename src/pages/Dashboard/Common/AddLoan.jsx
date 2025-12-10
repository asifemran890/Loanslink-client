import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddLoan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      data.Date = new Date().toISOString();
      // Transform requiredDocuments string to array if needed
      if (
        data.requiredDocuments &&
        typeof data.requiredDocuments === "string"
      ) {
        data.requiredDocuments = data.requiredDocuments
          .split(",")
          .map((doc) => doc.trim());
      }

      const response = await fetch("http://localhost:5000/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create loan");
      }

      const result = await response.json();
      console.log("Loan created successfully:", result);
      toast.success("Loan added successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error adding loan: " + error.message);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Loan Title */}
            <div className="space-y-1 text-sm">
              <label htmlFor="LoanTitle" className="block text-gray-600">
                Loan Title
              </label>
              <input
                id="LoanTitle"
                type="text"
                placeholder="Loan Title"
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                {...register("LoanTitle", {
                  required: "Loan Title is required",
                })}
              />
              {errors.loanTitle && (
                <p className="text-xs text-red-500">
                  {errors.loanTitle.message}
                </p>
              )}

              {/* Description */}
              <label htmlFor="Description" className="block text-gray-600">
                Description
              </label>
              <input
                id="Description"
                type="text"
                placeholder="Description"
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                {...register("Description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="Category" className="block text-gray-600">
                Category
              </label>
              <input
                id="Category"
                type="text"
                placeholder="Category"
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                {...register("Category", { required: "Category is required" })}
              />
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500 bg-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="EMIPlans" className="block text-gray-600">
                EMI Plans
              </label>
              <input
                id="EMIPlans"
                type="text"
                placeholder="12 Months"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500 bg-white"
                {...register("EMIPlans", { required: "EMI Plan is required" })}
              />
              {errors.EMIPlans && (
                <p className="text-xs text-red-500">
                  {errors.EMIPlans.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="flex justify-between gap-2">
              {/* Interest Rate */}
              <div className="space-y-1 text-sm">
                <label htmlFor="InterestRate" className="block text-gray-600">
                  Interest Rate
                </label>
                <input
                  id="InterestRate"
                  type="number"
                  placeholder="Interest Rate %"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  {...register("InterestRate", {
                    required: "Interest Rate is required",
                    min: {
                      value: 0,
                      message: "Interest Rate must be positive",
                    },
                  })}
                />
                {errors.interestRate && (
                  <p className="text-xs text-red-500">
                    {errors.interestRate.message}
                  </p>
                )}
              </div>

              {/* Max Limit */}
              <div className="space-y-1 text-sm">
                <label htmlFor="MaxLoanLimit" className="block text-gray-600">
                  Max Limit
                </label>
                <input
                  id="MaxLoanLimit"
                  type="number"
                  placeholder="Max Limit"
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  {...register("MaxLoanLimit", {
                    required: "Max Limit is required",
                    min: { value: 1, message: "Max Limit must be at least 1" },
                  })}
                />
                {errors.maxLoanLimit && (
                  <p className="text-xs text-red-500">
                    {errors.maxLoanLimit.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-1 text-sm">
              <label htmlFor="ImagesUrl" className="block text-gray-600">
                Image URL
              </label>
              <input
                id="ImagesUrl"
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500 bg-white"
                {...register("ImagesUrl", {
                  required: "Image URL is required",
                })}
              />
              {errors.ImagesUrl && (
                <p className="text-xs text-red-500">
                  {errors.ImagesUrl.message}
                </p>
              )}
            </div>

            {/* Show on Home Toggle */}
            <div className="flex items-center gap-3">
              <input
                id="showOnHomeToggle"
                type="checkbox"
                className="w-5 h-5"
                {...register("show On Home Toggle")}
              />
              <label htmlFor="showOnHomeToggle" className="text-gray-600">
                Show on Home
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white rounded shadow-md bg-lime-500"
            >
              Add Loan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLoan;
