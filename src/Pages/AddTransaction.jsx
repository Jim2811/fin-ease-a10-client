import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddTransaction = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");

  const incomeCategories = [
    "Salary",
    "Bonus",
    "Investment",
    "Gift",
    "Interest",
    "Others",
  ];
  const expenseCategories = [
    "Food",
    "Rent",
    "Transport",
    "Shopping",
    "Health",
    "Others",
  ];

  const categories = type === "Income" ? incomeCategories : expenseCategories;

  const today = new Date().toISOString().split("T")[0];

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = parseFloat(form.amount.value);
    const description = form.description.value.trim();
    const date = form.date.value;

    if (!category) {
      toast.warning("Please select a category");
      return;
    }

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (new Date(date) > new Date(today)) {
      toast.warning("You cannot select a future date.");
      return;
    }
    const newTransaction = {
      type,
      category,
      amount,
      description,
      date,
      email: user?.email,
      name: user?.displayName,
    };

    try {
      await axiosInstance.post("/transactions", newTransaction);
      form.reset();
      setCategory("");
      setType("Income");
      toast.success("Transaction added successfully");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] py-16 px-4 custom-gradient">
      <form
        onSubmit={handleAddTransaction}
        className="w-full max-w-2xl bg-base-200/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-base-300"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-8">
          Add Transaction
        </h1>

        <div className="mb-5">
          <label className="block font-semibold mb-1 text-base-content/80">
            Transaction Type <span className="text-red-500">*</span>
          </label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("");
            }}
            className="select select-bordered w-full bg-base-100"
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-1 text-base-content/80">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full bg-base-100"
            required
          >
            <option value="">Select {type} Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-1 text-base-content/80">
            Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="input input-bordered w-full bg-base-100"
            min="1"
            step="0.01"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-1 text-base-content/80">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            rows="4"
            className="textarea textarea-bordered w-full bg-base-100 resize-none"
            placeholder="Write a short description..."
            required
          ></textarea>
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-1 text-base-content/80">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full bg-base-100"
            max={today}
            required
          />
          <p className="text-xs text-base-content/60 mt-1">
            You cannot select a future date.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block font-semibold mb-1 text-base-content/80">
              Your Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-base-100 opacity-80 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-base-content/80">
              Your Name
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-base-100 opacity-80 cursor-not-allowed"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold tracking-wide shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;