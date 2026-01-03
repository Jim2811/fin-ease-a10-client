import React from "react";
import { motion } from "framer-motion";
import {
  FaRegMoneyBillAlt,
  FaChartPie,
  FaCreditCard,
  FaHandshake,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const services = [
  {
    icon: <FaRegMoneyBillAlt className="text-primary text-5xl" />,
    title: "Personal Finance Planning",
    description:
      "Build a clear, customized financial strategy that keeps your goals on track. Get insights on saving, investing, and managing your income.",
  },
  {
    icon: <FaChartPie className="text-secondary text-5xl" />,
    title: "Data‑Driven Analytics",
    description:
      "Visual analytics to help you understand patterns in your spending and find smarter ways to grow your finances.",
  },
  {
    icon: <FaCreditCard className="text-accent text-5xl" />,
    title: "Expense Integration",
    description:
      "Connect your bank and credit accounts easily and manage all your transactions in one secure place.",
  },
  {
    icon: <FaHandshake className="text-primary text-5xl" />,
    title: "Financial Consultation",
    description:
      "Get personalized recommendations from FinEase insights — guiding you toward better financial decisions.",
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-6 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-base-content mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
          <span className="text-primary font-bold">FinEase</span> offers intelligent financial tools and professional support to help you grow smarter every day.
        </p>
      </motion.div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        style={{ alignItems: "stretch" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              delay: index * 0.1,
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col items-center text-center bg-base-200/60 border border-base-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full"
          >
            <div className="h-16 flex items-center justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-base-content mb-3 h-12 flex items-center justify-center">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-base-content/70 leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-16"
      >
        <button className="btn btn-primary shadow-md hover:shadow-primary/30 transition-all duration-300">
          Explore All Services
        </button>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;