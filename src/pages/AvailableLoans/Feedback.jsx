const Feedback = () => {
  const cardsData = [
    {
      image: "https://placehold.co/50x50/3498db/FFFFFF?text=AJ",
      name: "Alex Johnson",
      date: "2024-11-20",
      loan_type: "Personal Loan",
      feedback:
        "The application was incredibly fast and digital. Approval took less than 24 hours. Excellent service from start to finish!",
    },
    {
      image: "https://placehold.co/50x50/e74c3c/FFFFFF?text=MS",
      name: "Maria Sanchez",
      date: "2024-11-18",
      loan_type: "Mortgage Refinance",
      feedback:
        "The rates were competitive, but the document submission portal was often slow and timed out, making the process frustratingly long.",
    },
    {
      image: "https://placehold.co/50x50/2ecc71/FFFFFF?text=RW",
      name: "Robert Williams",
      date: "2024-11-15",
      loan_type: "Auto Loan",
      feedback:
        "Transparent terms and a very clear breakdown of the monthly payments. No hidden fees, which I greatly appreciate. Highly recommend LoanLink for car financing.",
    },
    {
      image: "https://placehold.co/50x50/f39c12/FFFFFF?text=SL",
      name: "Sarah Lee",
      date: "2024-11-10",
      loan_type: "Debt Consolidation",
      feedback:
        "My advisor, David, was knowledgeable and helped me choose the best path to reduce my high-interest debt. Great relief and support.",
    },
    {
      image: "https://placehold.co/50x50/9b59b6/FFFFFF?text=JH",
      name: "James Henderson",
      date: "2024-11-05",
      loan_type: "SME Business Loan",
      feedback:
        "While the loan was approved, the required paperwork for a small business was excessive and required multiple follow-up calls. Needs streamlining.",
    },
    {
      image: "https://placehold.co/50x50/34495e/FFFFFF?text=EC",
      name: "Emily Carter",
      date: "2024-11-01",
      loan_type: "Personal Loan",
      feedback:
        "The online account management is fantastic. I can track my balance and schedule extra payments easily from my phone. User-friendly interface.",
    },
    {
      image: "https://placehold.co/50x50/1abc9c/FFFFFF?text=DK",
      name: "David Kim",
      date: "2024-10-25",
      loan_type: "Home Equity Loan",
      feedback:
        "Extremely slow appraisal process compared to competitors. The customer support team was difficult to reach for status updates.",
    },
    {
      image: "https://placehold.co/50x50/d35400/FFFFFF?text=NT",
      name: "Nina Thomas",
      date: "2024-10-20",
      loan_type: "Credit Builder Loan",
      feedback:
        "LoanLink provided clear guidance on rebuilding my credit. The terms were fair, and I feel I'm on a good path now. Thank you!",
    },
    {
      image: "https://placehold.co/50x50/2980b9/FFFFFF?text=OM",
      name: "Omar Mustafa",
      date: "2024-10-15",
      loan_type: "Auto Loan",
      feedback:
        "Received an initial quote that was misleading. The final interest rate was 3 points higher than advertised. Major lack of transparency in pricing.",
    },
    {
      image: "https://placehold.co/50x50/c0392b/FFFFFF?text=LM",
      name: "Lisa Miller",
      date: "2024-10-10",
      loan_type: "Mortgage Refinance",
      feedback:
        "Best interest rate I could find! The closing process was managed professionally and they were flexible with my scheduling needs.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4  shadow hover:shadow-lg transition-all duration-200 w-72 bg-amber-50 shrink-0">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.loan_type}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">
        {card.feedback}
      </p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full mx-auto pt-10 pb-10 bg-emerald-200">
      <div className="text-center">
        <h2 className="text-4xl font-bold    mb-3">
          Customer Feedback
        </h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>
        <p className="   mb-10">
         Reviews generally highlight their fast service, friendly teams, and the ability to track application progress online.
        </p>
      </div>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div className="marquee-row w-full mx-auto max-w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none  to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-full md:w-40 z-10 pointer-events-none   to-transparent"></div>
      </div>
    </section>
  );
};
export default Feedback;
