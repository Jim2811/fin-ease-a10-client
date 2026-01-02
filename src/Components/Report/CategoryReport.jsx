import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CategoryReport = ({ income, expense }) => {
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
  return (
    <div>
      <div className="custom-gradient rounded-2xl shadow-2xl py-8 ">
      <h2 className="text-center font-bold mb-3 text-3xl text-primary">Category Overview</h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <h3 className="text-2xl font-bold text-center text-accent mb-4">
              Income Sources
            </h3>
            {income.length === 0 ? (
              <p className="text-center py-10 text-gray-500">No income yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={350}>
                <PieChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }}>
                  <Pie
                    data={income}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={15}
                    paddingAngle={3}
                    label={false}
                  >
                    {income.map((entry, i) => (
                      <Cell key={i} fill={incomeColors[entry.name]} />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value) => `৳${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
          {/* Expense */}
          <div>
            <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
              Expense Sources
            </h3>
            {expense.length === 0 ? (
              <p className="text-center py-10 text-gray-500">No expense yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={350}>
                <PieChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }}>
                  <Pie
                    data={expense}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={15}
                    paddingAngle={3}
                    label={false}
                  >
                    {expense.map((entry, i) => (
                      <Cell key={i} fill={expenseColors[entry.name]} />
                    ))}
                  </Pie>

                  <Tooltip
                    formatter={(value, name) => [`৳${value}`, name]}
                  ></Tooltip>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryReport;
