import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AddTransaction = () => {

  const { user } = useAuth();

  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");

  const incomeCategories = ["Salary", "Bonus", "Investment", "Gift", "Interest", "Others"];
  const expenseCategories = ["Food", "Rent", "Transport", "Shopping", "Health", "Others"];

  const categories = type === "Income" ? incomeCategories : expenseCategories;

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = parseInt(form.amount.value);
    const description = form.description.value;
    const date = form.date.value;

    const finalCategory = category === "Others" ? `Others - ${source}` : category;

    const newTransaction = {
      type,
      category: finalCategory,
      amount,
      description,
      date,
      email: user?.email,
      name: user?.displayName,
    };

    console.log("Transaction Data:", newTransaction);
    form.reset();
    setCategory("");
    setSource("");
  };

  return (
    <div className="mx-auto p-6 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <h1 className="text-primary text-center font-extrabold text-3xl md:text-5xl my-5">Add Transaction</h1>
      <form onSubmit={handleAddTransaction} className="space-y-4">

        {/* Type */}
        <div>
          <label className="block mb-1 font-semibold">Type</label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("");
              setSource("");
            }}
            className="select select-bordered w-full"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category === "Others" && (
          <div>
            <label className="block mb-1 font-semibold">What is your {type.toLowerCase()}  category?</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder={`Write your ${type.toLowerCase()} category`}
              className="input input-bordered w-full"
              required
            />
          </div>
        )}

        {/* Amount */}
        <div>
          <label className="block mb-1 font-semibold">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-28 resize-none"
            placeholder="Write short description"
            required
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input type="date" name="date" className="input input-bordered w-full" required />
        </div>

        {/* User Info */}
        <div>
          <label className="block mb-1 font-semibold">User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
