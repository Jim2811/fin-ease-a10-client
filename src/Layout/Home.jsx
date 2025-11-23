import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-primary font-extrabold text-4xl md:text-7xl">
                FinEase
              </h1>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Master Your Money,{" "}
                <span className="text-primary">Live Your Dreams</span>
              </h3>
              <p className="py-8 text-xl md:text-2xl text-base-content/80">
                Track expenses, set budgets, and grow your wealth — all in one
                simple, beautiful app.
              </p>
            </div>
          </div>
        </section>
        {/* Overview Cards */}
        <section className="py-20 px-6 bg-base-200/50">
          <div className="max-w-7xl mx-auto justify-center grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl">৳</div>
                <h2 className="text-3xl font-bold text-primary">85,400</h2>
                <p className="text-base-content/70">Total Balance</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl text-success">↑</div>
                <h2 className="text-3xl font-bold text-success">+32,000</h2>
                <p className="text-base-content/70">This Month Income</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl text-error">↓</div>
                <h2 className="text-3xl font-bold text-error">-18,600</h2>
                <p className="text-base-content/70">This Month Expense</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Why Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto justify-center grid md:grid-cols-2 gap-12">
            <div className="card bg-primary/5 rounded-2xl p-10">
              <h2 className="text-4xl font-bold mb-6">Smart Budgeting Tips</h2>
              <ul className="space-y-4 text-lg">
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
                  <span className="text-primary text-2xl">✓</span> Review
                  weekly, adjust monthly
                </li>
              </ul>
            </div>

            <div className="card bg-secondary/5 rounded-2xl p-10">
              <h2 className="text-4xl font-bold mb-6">
                Why Financial Planning Matters
              </h2>
              <p className="text-lg leading-relaxed text-base-content/80">
                Financial freedom isn't about being rich — it's about having
                control. With FinEase, you’ll stop living paycheck to paycheck
                and start building the life you actually want.
              </p>
              <div className="stats stats-vertical shadow mt-8">
                <div className="stat">
                  <div className="stat-value text-primary">92%</div>
                  <div className="stat-desc">
                    Users save more in first month
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-value text-secondary">3.5x</div>
                  <div className="stat-desc">Faster debt payoff</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
