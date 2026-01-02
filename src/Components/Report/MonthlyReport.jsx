import React from "react";
import useMonthlyReport from "../../Hooks/useMonthlyReport";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Spinner from "../Spinner";

const MonthlyReport = () => {
  const monthlyReport = useMonthlyReport();
  if (!monthlyReport) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div>
      <div className="custom-gradient rounded-2xl shadow-2xl py-8 px-2">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Monthly Overview
        </h2>
        <div className="flex justify-center">
          <div className="w-full">
            {monthlyReport.length === 0 ? (
              <p className="text-center py-20 text-gray-500">No data yet</p>
            ) : (
              <ResponsiveContainer width={"100%"} height={350}>
                <BarChart
                  data={monthlyReport}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="0 0"></CartesianGrid>
                  <XAxis type="number" hide></XAxis>
                  <YAxis
                    dataKey="month"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                  ></YAxis>
                  <Tooltip
                    formatter={(value) => `৳${value.toLocaleString()}`}
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    itemStyle={{
                      color: "#facc15", 
                    }}
                    labelStyle={{
                      color: "#ffffff", 
                    }}
                  ></Tooltip>
                  <Legend></Legend>
                  <Bar dataKey="income" fill="#10b981" name="Income"></Bar>
                  <Bar dataKey="expense" fill="#ef4444" name="Expense"></Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
