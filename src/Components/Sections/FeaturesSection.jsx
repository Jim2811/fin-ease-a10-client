import React from "react";
import { motion } from "framer-motion";
import { FaWallet, FaChartLine, FaPiggyBank, FaBell } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaWallet className="text-primary text-4xl mb-4" />,
      title: "Smart Expense Tracking",
      description:
        "Automatically categorize and monitor your daily expenses so you always know where your money goes.",
    },
    {
      icon: <FaChartLine className="text-secondary text-4xl mb-4" />,
      title: "Real-Time Insights",
      description:
        "Visual charts and insights give you a live view of your financial health and spending patterns.",
    },
    {
      icon: <FaPiggyBank className="text-accent text-4xl mb-4" />,
      title: "Goal-Oriented Budgeting",
      description:
        "Create achievable goals, track your progress, and stay motivated toward smarter saving habits.",
    },
    {
      icon: <FaBell className="text-primary text-4xl mb-4" />,
      title: "Smart Alerts",
      description:
        "Receive timely notifications for upcoming bills, unusual expenses, or goal milestones.",
    },
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 px-6"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
          Powerful Features for Smarter Finances
        </h2>
        <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
          <span className="text-primary font-bold">FinEase</span>  combines simplicity with intelligence — designed to help you
          master every aspect of your financial life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="p-8 bg-base-200/60 backdrop-blur-sm border border-base-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-bold text-base-content mb-2">
              {item.title}
            </h3>
            <p className="text-base-content/70 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;