import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen custom-gradient px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-base-content mb-6">
            About <span className="text-primary">FinEase</span>
          </h1>
          <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-6">
            FinEase is a modern personal finance platform designed to help you build
            confidence around money — without complex spreadsheets or guesswork.
            We believe financial well-being should be accessible to everyone, and
            that clarity about your money should come easily and intuitively.
          </p>

          <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-6">
            From tracking your daily expenses to setting meaningful goals or
            managing your budget in real-time, FinEase acts as your personal
            financial companion. Our mission is to make financial control simple,
            empowering you to save more, spend smarter and achieve long-term
            freedom — all from one trusted dashboard.
          </p>

          <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
            Founded in 2023 by a team of data-driven financial enthusiasts, FinEase
            combines technology with human insight to give you the future of
            personal finance management you deserve.
          </p>

          <Link
            to="/contact"
            className="mt-7 font-bold btn btn-primary shadow-md hover:shadow-primary/30 transition-all duration-300"
          >
            Contact Our Team
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-base-200/70 rounded-2xl shadow-md flex flex-col items-center text-center border border-primary/20">
            <FaChartLine className="text-primary text-5xl mb-4" />
            <h3 className="text-xl font-bold text-base-content mb-2">
              Our Mission
            </h3>
            <p className="text-base text-base-content/70">
              Empower people to take control of their finances and build wealth
              with clarity and confidence.
            </p>
          </div>

          <div className="p-6 bg-base-200/70 rounded-2xl shadow-md flex flex-col items-center text-center border border-secondary/20">
            <FaUsers className="text-secondary text-5xl mb-4" />
            <h3 className="text-xl font-bold text-base-content mb-2">
              Our Vision
            </h3>
            <p className="text-base text-base-content/70">
              To be the most trusted digital finance platform that helps millions
              of people reach financial freedom.
            </p>
          </div>

          <div className="p-6 bg-base-200/70 rounded-2xl shadow-md flex flex-col items-center text-center border border-accent/20 sm:col-span-2">
            <FaLightbulb className="text-accent text-5xl mb-4" />
            <h3 className="text-xl font-bold text-base-content mb-2">
              What Drives Us
            </h3>
            <p className="text-base text-base-content/70 max-w-sm">
              We believe that knowledge, technology, and transparency can transform
              how people relate to money — turning stress into strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;