import React from "react";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const NewsLetter = () => {
  return (
    <motion.section
      className="py-20 px-6 bg-base-200/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col justify-center items-center gap-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl text-center pb-5 md:text-4xl font-bold leading-tight text-base-20 mb-6">
          Subscribe to{" "}
          <span className="text-primary">FinEase</span> Newsletter
        </h2>

        <p className="text-base-content/70 mb-6 text-sm md:text-base px-2">
          Get the latest finance tips, updates, and exclusive offers — right to your inbox.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Joined Newsletter Successfully!")
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 w-full"
        >
          <div className="relative w-full md:w-2/3">
            <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="input input-bordered w-full pl-10 py-3 text-base bg-base-100"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full md:w-auto px-8 font-semibold"
          >
            Join
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default NewsLetter;