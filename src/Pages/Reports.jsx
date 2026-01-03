import React, { useEffect, useState } from "react";
import CategoryReport from "../Components/Report/CategoryReport";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import MonthlyReport from "../Components/Report/MonthlyReport";
import Spinner from "../Components/Spinner";
const Reports = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/transactions?email=${user.email}`)
      .then((r) => {
        const income = {};
        const expense = {};

        r.data.forEach((item) => {
          const category = item.category;
          const amount = Number(item.amount);

          if (item.type === "Income") {
            income[category] = (income[category] || 0) + amount;
          } else {
            expense[category] = (expense[category] || 0) + amount;
          }
        });

        const incomeList = Object.keys(income).map((cat) => ({
          name: cat,
          value: income[cat],
        }));

        const expenseList = Object.keys(expense).map((cat) => ({
          name: cat,
          value: expense[cat],
        }));
        setIncomeData(incomeList);
        setExpenseData(expenseList);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [user, axiosSecure]);
  return (
    <>
      {loading ? (
        <div className="min-h-screen">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="min-h-screen pt-7 pb-7 ">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl md:text-5xl">Dashboard</h1>
            <p className="text-base-content/70 mt-3 text-lg">
              Visualize your income, expenses, and savings
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            <CategoryReport
              income={incomeData}
              expense={expenseData}
            ></CategoryReport>
          </div>
        </div>
      )}
    </>
  );
};

export default Reports;
