import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const UpdateTransaction = () => {
  const data = useLoaderData().result;
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const defaultDate = `${data.date.split("T")[0]} ${
    data.date.split("T")[1].split(".")[0]
  }`;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.type.value;
    // const date = form.date.value;
    const amount = parseInt(form.amount.value);
    const description = form.description.value;
    const updateData = {
      type,
      category,
      amount,
      description,
    //   date,
      email: user?.email,
      name: user?.displayName,
    };

    axiosInstance.put(`/transactions/${data._id}`, updateData).then(() => {
      form.reset();
      setCategory("");
      alert('Success')
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-7">
      <div className="card w-full max-w-md bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 shadow-2xl rounded-2xl py-3">
        <form className="card-body space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-3xl text-primary font-bold text-center mb-5">
            Update Transaction
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              onChange={(e) => setType(e.target.value)}
              defaultValue={data.type}
              name="type"
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={data.category}
              className="select select-bordered w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Amount</span>
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              name="amount"
              defaultValue={data.amount}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full resize-none h-24"
              defaultValue={data.description}
              name="description"
              placeholder="Write short description"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input
              type="text"
              name="date"
              className="input input-bordered w-full"
              defaultValue={defaultDate}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">
              Update Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;
