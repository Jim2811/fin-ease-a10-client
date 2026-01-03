import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CategoryReport = ({ income = [], expense = [] }) => {
  const incomeColors = {
    Salary: "#2563eb",
    Bonus: "#16a34a",
    Gift: "#db2777",
    Interest: "#f59e0b",
    Investment: "#7c3aed",
    Others: "#64748b",
  };

  const expenseColors = {
    Food: "#f97316",
    Rent: "#dc2626",
    Transport: "#0ea5e9",
    Shopping: "#ec4899",
    Health: "#22c55e",
    Others: "#9d9900",
  };

  const chartCard =
    "backdrop-blur-md bg-base-100/60 dark:bg-base-200/60 transition-all duration-300 rounded-2xl shadow-lg p-6 border border-base-300/40";

  const noDataMsg =
    "text-center py-14 text-base-content/60 text-sm select-none tracking-wide";

  return (
    <section className="rounded-2xl shadow-2xl custom-gradient py-8 px-4 md:px-8 transition-colors duration-300">
      <h2 className="text-center font-bold mb-8 text-3xl text-base-10">
        Category Overview
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className={chartCard}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-success mb-5">
            Income Sources
          </h3>

          {income.length === 0 ? (
            <p className={noDataMsg}>No income data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={340}>
              <PieChart margin={{ top: 10, bottom: 10 }}>
                <Pie
                  data={income}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  innerRadius={35}
                  paddingAngle={3}
                  strokeWidth={2}
                  labelLine={false}
                >
                  {income.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={incomeColors[entry.name] || incomeColors.Others}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`৳${value.toLocaleString()}`, name]}
                  contentStyle={{
                    backgroundColor: "rgba(31,41,55,0.95)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                  itemStyle={{ color: "#facc15" }}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className={chartCard}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-error mb-5">
            Expense Sources
          </h3>

          {expense.length === 0 ? (
            <p className={noDataMsg}>No expense data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={340}>
              <PieChart margin={{ top: 10, bottom: 10 }}>
                <Pie
                  data={expense}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  innerRadius={35}
                  paddingAngle={3}
                  strokeWidth={2}
                  labelLine={false}
                >
                  {expense.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={expenseColors[entry.name] || expenseColors.Others}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`৳${value.toLocaleString()}`, name]}
                  contentStyle={{
                    backgroundColor: "rgba(31,41,55,0.95)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                  itemStyle={{ color: "#facc15" }}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryReport;