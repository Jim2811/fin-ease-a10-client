import React from "react";

const TipsWhySection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto justify-center grid md:grid-cols-2 gap-12 ">
        <div className="card bg-primary/5 rounded-2xl p-10 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Smart Budgeting Tips</h2>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3">
              <span className="text-primary text-2xl">✓</span> Follow the
              50/30/20 rule
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-2xl">✓</span> Track every
              single expense
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-2xl">✓</span> Set realistic
              savings goals
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-2xl">✓</span> Review weekly,
              adjust monthly
            </li>
          </ul>
        </div>

        <div className="card bg-secondary/5 rounded-2xl p-10 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Financial Planning Matters
          </h2>
          <p className="text-base leading-relaxed text-base-content/80">
            Financial freedom isn't about being rich — it's about having
            control. With FinEase, you'll stop living paycheck to paycheck and
            start building the life you actually want.
          </p>
          <div className="stats stats-vertical shadow bg-base-200 mt-8">
            <div className="stat">
              <div className="stat-value text-primary">92%</div>
              <div className="stat-desc">Users save more in first month</div>
            </div>
            <div className="stat">
              <div className="stat-value text-accent">3.5x</div>
              <div className="stat-desc">Faster debt payoff</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsWhySection;
