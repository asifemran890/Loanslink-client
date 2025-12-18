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

      const response = await fetch(
        "https://backend-bay-tau-10.vercel.app/loans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <div>
        <h1 className=" text-6xl  ">Add Loan </h1>
      </div>{" "}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Loan Title */}
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block font-bold  ">
                Loan Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Loan Title"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("title", {
                  required: "Loan Title is required",
                })}
              />
              {errors.loanTitle && (
                <p className="text-xs text-red-500">
                  {errors.loanTitle.message}
                </p>
              )}

              {/* Description */}
              <label htmlFor="short_description" className="block font-bold">
                Description
              </label>
              <input
                id="short_description"
                type="text"
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("short_description", {
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
              <label htmlFor="loan_category" className="block font-bold">
                Category
              </label>
              <input
                id="loan_category"
                type="text"
                placeholder="Category"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("loan_category", {
                  required: "Category is required",
                })}
              />
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
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
              <label htmlFor="available_emi_plan" className="block font-bold">
                EMI Plans
              </label>
              <input
                id="available_emi_plan"
                type="text"
                placeholder="12 Months"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("available_emi_plan", {
                  required: "EMI Plan is required",
                })}
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
                <label htmlFor="interest_rate" className="block font-bold">
                  Interest Rate
                </label>
                <input
                  id="interest_rate"
                  type="number"
                  placeholder="Interest Rate %"
                  className="w-full p-2 border border-gray-300 rounded"
                  {...register("interest_rate", {
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
                <label htmlFor="max_loan_limit" className="block font-bold">
                  Max Limit
                </label>
                <input
                  id="max_loan_limit"
                  type="number"
                  placeholder="Max Limit"
                  className="w-full p-2 border border-gray-300 rounded"
                  {...register("max_loan_limit", {
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
              <label htmlFor="image" className="block font-bold">
                Image URL
              </label>
              <input
                id="image"
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("image", {
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
                id="showOnHome"
                type="checkbox"
                className="w-5 h-5"
                {...register("showOnHome")}
              />
              <label htmlFor="showOnHome" className="font-bold">
                Show on Home
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-700 cursor-pointer p-3 mt-5 text-center font-medium text-white rounded shadow-md "
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
