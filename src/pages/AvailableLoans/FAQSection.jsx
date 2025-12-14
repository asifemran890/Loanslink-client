import React, { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Container from "../../components/Shared/Container";

// The FAQ data structure
const faqs = [
  {
    question: "What are the interest rates for your loans?",
    answer:
      "Interest rates are competitive and depend on the type of loan you choose, your credit score, and the loan term. Our standard personal loan APRs start as low as 6.99%. Please check the specific loan product page for the most accurate and up-to-date rate information.",
  },
  {
    question: "Do I need collateral for a personal loan?",
    answer:
      "Most of our personal loans are unsecured, meaning you do not need to provide collateral. However, some larger personal loans or specific business loans may require an asset as security. Please consult the loan terms for details on collateral requirements.",
  },
  {
    question: "What is the maximum loan amount I can apply for?",
    answer:
      "Maximum loan amounts vary by loan type and your creditworthiness. Personal loans go up to $25,000, while business loans can go up to $100,000. Check individual loan details for specific limits.",
  },
  {
    question: "Can I prepay my loan without penalties?",
    answer:
      "Yes! LoanLink allows prepayment of loans without any penalties. You can pay off your loan early and potentially save on interest payments.",
  },
  {
    question: "What is the difference between a secured and an unsecured loan?",
    answer:
      "The main difference is collateral. A secured loan (like a mortgage or auto loan) requires you to put up an asset (like a house or car) as collateral, which the lender can seize if you default. An unsecured loan (like a personal loan or credit card) does not require collateral; it's based solely on your creditworthiness and income. Unsecured loans typically have higher interest rates because they pose a greater risk to the lender.",
  },
];


const FAQSection = () => {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 w-7xl mx-auto bg-slate-300 rounded-2xl ">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Content (Title, Description, and Callout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-6 text-muted-foreground">
              Find answers to common questions about our loan products and
              application process. Can't find what you're looking for? Contact
              our support team.
            </p>
            <div className="rounded-2xl bg-purple-100  p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Still have questions?
              </h3>
              <p className="text-sm text-muted-foreground">
                Our customer support team is available 24/7 to help you with any
                questions or concerns.
              </p>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#E1E7EF]  overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
              >
                {/* Accordion Header/Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-[#F9FAFB] dark:hover:bg-gray-700"
                >
                  <span className="font-semibold text-lg pr-4 text-foreground dark:text-white">
                    {faq.question}
                  </span>
                  {/* Plus/Minus Icon */}
                  <div
                    className={`shrink-0 rounded-full p-1 transition-colors ${
                      openIndex === index
                        ? "bg-indigo-600 text-white" // Using indigo for primary for better contrast
                        : "bg-[#F1F5F9]  dark:text-indigo-400"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {/* Accordion Content (Animated) */}
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-muted-foreground ">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
