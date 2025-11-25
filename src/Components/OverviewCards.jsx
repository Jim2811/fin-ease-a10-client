import React from 'react';

const OverviewCards = () => {
    return (
        <div>
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
        </div>
    );
};

export default OverviewCards;