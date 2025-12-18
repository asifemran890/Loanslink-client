import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../Theme/ThemeContext";
import { Link } from "react-router"; 

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // 🎨 Theme colors
  const bgColor = isDark ? "bg-gray-900" : "bg-green-100";
  const textColor = isDark ? "text-gray-100" : "text-gray-800";
  const headingColor = isDark ? "text-emerald-300" : "text-emerald-800";

  const cardText = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <section
      className={`${bgColor} ${textColor} py-24 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* --- Hero Section --- */}
        <motion.div
          className="text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className={`text-5xl sm:text-6xl font-extrabold ${headingColor}`}
            variants={fadeUp}
            custom={0}
          >
            We empower your financial journey
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-500 dark:text-gray-400"
            variants={fadeUp}
            custom={1}
          >
            At LoanLink, we’re transforming the way people access financial
            support — combining technology, trust, and transparency to make
            lending simpler, faster, and smarter.
          </motion.p>
        </motion.div>

        {/* --- Story Section --- */}
        <div className="lg:grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            src="https://img.freepik.com/premium-photo/finance-banking-account-money-calculation-work-3d-illustration_1995-937.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className={`text-4xl font-bold mb-4 ${headingColor}`}
              variants={fadeUp}
              custom={0}
            >
              Our Story
            </motion.h2>
            <motion.p
              className={`text-lg leading-relaxed ${cardText}`}
              variants={fadeUp}
              custom={1}
            >
              LoanLink began with a mission to simplify access to credit for
              everyone. We connect borrowers and financial institutions through
              a secure, technology-driven platform that prioritizes speed,
              accuracy, and transparency.
            </motion.p>
            <motion.p
              className={`text-lg leading-relaxed ${cardText}`}
              variants={fadeUp}
              custom={2}
            >
              Today, we’re proud to have served thousands of individuals and
              businesses — making financial empowerment more accessible than
              ever before.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
