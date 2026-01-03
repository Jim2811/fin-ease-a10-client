import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Finance from "../../assets/finance-illustrator.png"
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const CTASection = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden custom-gradient py-20 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-base-content leading-tight">
            Ready to{" "}
            <span className="text-primary">Take Control</span> of Your Finances?
          </h2>
          <p className="text-base text-base-content/70 max-w-lg mx-auto md:mx-0">
            Join thousands of professionals already using FinEase to track,
            manage, and grow their wealth. It's time to make your money work for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-3">
            <Link
              to="/add-transaction"
              className="btn btn-primary px-8 py-3 w-full sm:w-auto shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="btn btn-outline btn-secondary px-8 py-3 font-semibold w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={Finance}
            alt="Finance Illustration"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </motion.section>
  );
};

export default CTASection;