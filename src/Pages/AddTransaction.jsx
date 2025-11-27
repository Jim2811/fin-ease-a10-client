import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AddTransaction = () => {

  const { user } = useAuth();
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("Salary");

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const form = e.target;
    const amount = parseFloat(form.amount.value);
    const description = form.description.value;
    const date = form.date.value;
    const email = user?.email;
    const name = user?.displayName;

    const newTransaction = {
      type,
      category,
      amount,
      description,
      date,
      email,
      name,
    };

    console.log("Transaction Data:", newTransaction);
  };

  return (
    <div className="mx-auto p-6 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 shadow-md rounded-md">
      <h1 className="text-primary text-center font-extrabold text-3xl md:text-5xl my-5">Add Transaction</h1>
      <form onSubmit={handleAddTransaction} className="space-y-3 w-9/12 md:w-7/12 mx-auto">
        {/* Type */}
        <div>
          <label className="block mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="Home">Home</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Salary">Salary</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-1">Amount</label>
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
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Write short description"
            className="textarea textarea-bordered w-full h-24 resize-none"
            required
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Info (read-only) */}
        <div>
          <label className="block mb-1">User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1">User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-accent w-full mt-4 hover:btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
