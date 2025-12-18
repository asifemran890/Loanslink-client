import React from "react";
import ImageSlide from "./ImageSlide";
import { useTheme } from "../../Theme/ThemeContext";
import { Link } from "react-router";

const HeroBanner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // 🎨 Theme-based color classes

  const cardBg = isDark ? "bg-amber-200" : "bg-amber-100";

  const cardText = isDark ? "text-gray-200" : "text-green-300";
  const sectionBg = isDark ? "bg-gray-900" : "bg-transparent";

  return (
    <section
      className={`w-11/12 mx-auto py-10 sm:py-15 overflow-hidden ${sectionBg} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5 items-center">
          {/* Text Content */}
          <div className="col-span-6 text-center lg:text-left mb-10 lg:mb-0">
            <p
              className={` sm:text-6xl font-extrabold tracking-tight mb-4 transition duration-1000 ease-out `}
            >
              A loan is a type of debt where a sum of money is provided by a
              lender to a borrower.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="btn-primary ">
                Apply for loan
              </a>

              <a href="/all-loans" className="btn-secondary">
                Explore loans
              </a>
            </div>
          </div>

          {/* Image/Illustration Section */}
          <div className="col-span-6 flex justify-center lg:justify-end">
            <div
              className={`w-70 md:w-180 lg:w-120 h-60 md:h-90   ${cardBg} rounded-lg flex items-center justify-center ${cardText} font-bold text-xl`}
            >
              <ImageSlide className="w-60 md:w-170" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
