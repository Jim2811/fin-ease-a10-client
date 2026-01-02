import React from "react";
import useMonthlyReport from "../../Hooks/useMonthlyReport";
import Spinner from "../Spinner";

const Balance = () => {
  const report = useMonthlyReport();
  const totalIncome = report.reduce(
    (sum, transaction) => sum + transaction.income,
    0
  );
  const totalExpense = report.reduce(
    (sum, transaction) => sum + transaction.expense,
    0
  );
  const totalBalance = totalIncome - totalExpense;
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card shadow-xl hover:shadow-2xl transition bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-semibold">Total Income</h3>
            <p className="text-3xl font-bold mt-3">৳{totalIncome}</p>
          </div>
          <div className="card shadow-xl hover:shadow-2xl transition bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-semibold">Total Expense</h3>
            <p className="text-3xl font-bold mt-3">৳{totalExpense}</p>
          </div>
          <div className="card shadow-xl hover:shadow-2xl transition bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-semibold">Current Balance</h3>
            <p className="text-3xl font-bold mt-3">৳{totalBalance}</p>
          </div>
        </div>
    </>
  );
};

export default Balance;
