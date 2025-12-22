import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../../Assignment-11/Ticket Bari/ticket-bari-client/src/Hooks/useAxiosSecure";
const AddTransaction = () => {
  const { user } = useAuth();

  const axiosInstance = useAxiosSecure();
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");

  // const date = new Date().toISOString();

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

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = parseInt(form.amount.value);
    const description = form.description.value;
    const date = form.date.value;

    const newTransaction = {
      type,
      category,
      amount,
      description,
      date,
      email: user?.email,
      name: user?.displayName,
    };

    axiosInstance
      .post("/transactions", newTransaction)
      .then(() => {
        form.reset();
        setCategory("");
        toast.success("Transaction details added successfully!! 😊");
      })
      .catch(() => toast.error("Some Error Ocured!"));
  };

  return (
    <div className="mx-auto pb-12">
      <h1 className="text-primary text-center font-extrabold text-3xl md:text-5xl my-5">
        Add Transaction
      </h1>
      <form
        onSubmit={handleAddTransaction}
        className="card w-11/12 md:w-7/12 mx-auto p-6 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 shadow-2xl p-6 rounded-2xl mt-7"
      >
        {/* Type */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">
              Type <span className="text-red-600">*</span>
            </span>
          </label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("");
            }}
            className="select select-bordered w-full"
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">
              Category <span className="text-red-600">*</span>
            </span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">
              Amount <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">
              Description <span className="text-red-600">*</span>
            </span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-28 resize-none"
            placeholder="Write short description"
            required
          ></textarea>
        </div>

        {/* date */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-semibold">Transaction Date</span>{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="date"
            required
            className="input input-bordered w-full bg-base-100"
          />
        </div>
        {/* User Email */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">User Email</span>
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-base-100"
          />
        </div>

        {/* User Name */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-semibold">User Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-base-100"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
