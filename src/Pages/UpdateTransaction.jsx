import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Spinner from "../Components/Spinner";

const UpdateTransaction = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("Income");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .get(`/transactions/${params.id}`)
      .then((r) => {
        setData(r.data.result);
        setType(r.data.result.type);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e.message || "Failed to load transaction");
        setLoading(false);
      });
  }, [axiosSecure, params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <Spinner />
      </div>
    );
  }

  const defaultDate = data?.date?.includes("T")
    ? data.date.split("T")[0]
    : data?.date || "";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updateData = {
      type: form.type.value,
      category: form.category.value,
      amount: parseFloat(form.amount.value),
      description: form.description.value.trim(),
      date: form.date.value,
      email: user?.email,
      name: user?.displayName,
    };

    try {
      await axiosSecure.put(`/transactions/${data._id}`, updateData);
      toast.success("Transaction updated successfully");
      navigate(`/transaction/${data._id}`);
    } catch {
      toast.error("Update failed — please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 custom-gradient">
      <div className="w-full max-w-2xl bg-base-200/60 backdrop-blur-md border border-base-300 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10">
          Update Transaction
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-base-content/80">
              Transaction Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="select select-bordered w-full bg-base-100"
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-base-content/80">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              defaultValue={data.category}
              className="select select-bordered w-full bg-base-100"
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-base-content/80">
              Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={data.amount}
              placeholder="Enter amount"
              className="input input-bordered w-full bg-base-100"
              min="1"
              step="0.01"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-base-content/80">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              defaultValue={data.description}
              rows="4"
              placeholder="Write short description"
              className="textarea textarea-bordered resize-none w-full bg-base-100"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-base-content/80">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={defaultDate}
              className="input input-bordered w-full bg-base-100"
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full text-lg font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;