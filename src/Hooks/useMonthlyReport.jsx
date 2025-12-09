import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMonthlyReport = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [monthlyReport, setMonthlyReport] = useState([]);
  useEffect(() => {
    if (!user?.email) {
      return;
    }
    const monthly = {};
    axiosSecure.get(`/transactions?email=${user?.email}`).then((res) => {
      const data = res.data;
      data.forEach((transaction) => {
        const monthKey = transaction.date.slice(0, 7);
        if (!monthly[monthKey]) {
          monthly[monthKey] = {
            income: 0,
            expense: 0,
          };
        }

        const amount = Number(transaction.amount);
        if (transaction.type === "Income") {
          monthly[monthKey].income += amount;
        } else {
          monthly[monthKey].expense += amount;
        }
      });
      const result = Object.keys(monthly).map((month) => ({
        month,
        income: monthly[month].income,
        expense: monthly[month].expense,
      }));
      result.sort((a, b) => a.month.localeCompare(b.month));
      setMonthlyReport(result);
    })
    .catch(() => setMonthlyReport([]))
  }, [user?.email, axiosSecure]);
  return monthlyReport;
};

export default useMonthlyReport;
