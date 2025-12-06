const HowItWorks = () => {
  const steps = [
    {
      id: 15,
      title: "Apply Online",
      desc: "Fill out the basic application form to get started.",
    },
    {
      id: 12,
      title: "Submit Documents",
      desc: "Upload your necessary documents securely.",
    },
    {
      id: 3,
      title: "Quick Approval",
      desc: "Our team reviews your information and approves fast.",
    },
    {
      id: 10,
      title: "Receive Funds",
      desc: "Loan amount is sent directly to your bank account.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl hover:bg-cyan-200 shadow-md p-6 text-center border"
          >
            <div className="text-lime-600 text-4xl font-bold mb-4">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
