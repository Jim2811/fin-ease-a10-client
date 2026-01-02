import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const TransactionDetail = () => {
  const [data, setData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/transactions/${params.id}`)
      .then((r) => {
        setData(r.data.result);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e.message || "Failed to load transaction");
        setLoading(false);
      });
  }, [axiosSecure, params.id]);

  useEffect(() => {
    if (data?.category) {
      axiosSecure
        .get(`/category-total-amount?category=${data.category}`)
        .then((r) => setTotalAmount(r.data[0]?.total || 0))
        .catch(() => {});
    }
  }, [data?.category, axiosSecure]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <Spinner />
      </div>
    );
  }

  const date = data?.date?.includes("T")
    ? data.date.split("T")[0]
    : data?.date?.split(" ")[0];
  const isIncome = data?.type === "Income";

  return (
    <div className="min-h-screen custom-gradient flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-base-200/70 border border-base-300 backdrop-blur-md shadow-xl rounded-3xl p-10 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-primary mb-10 border-b border-base-300 pb-3">
          Transaction Details
        </h1>

        <div className="grid gap-6">
          <div className="flex justify-between items-center border-b border-base-300 pb-2">
            <span className="font-semibold text-base-content/70">Type</span>
            <span
              className={`font-bold ${
                isIncome ? "text-accent" : "text-primary"
              } text-lg`}
            >
              {data?.type}
            </span>
          </div>

          <div className="border-b border-base-300 pb-3">
            <h3 className="font-semibold text-base-content/70 mb-1">
              Description
            </h3>
            <p className="text-base-content/80 leading-relaxed text-justify">
              {data?.description}
            </p>
          </div>

          <div className="flex justify-between items-center border-b border-base-300 pb-2">
            <span className="font-semibold text-base-content/70">Amount</span>
            <span
              className={`font-bold ${
                isIncome ? "text-accent" : "text-primary"
              } text-lg`}
            >
              {data?.amount}৳
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5 border-b border-base-300 pb-3">
            <div>
              <h4 className="font-semibold text-base-content/70 mb-1">Date</h4>
              <p className="text-base-content/80">{date}</p>
            </div>
            <div>
              <h4 className="font-semibold text-base-content/70 mb-1">
                Category
              </h4>
              <p className="text-base-content/80">{data?.category}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-base-content/70">
              Total Amount in this Category
            </span>
            <span className="font-bold text-secondary text-lg">
              {totalAmount}৳
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/my-transactions"
              className="btn btn-primary w-full md:w-1/2 rounded-xl"
            >
              Back to My Transactions
            </Link>
            <Link
              to={`/update-transaction/${data?._id}`}
              className="btn btn-accent w-full md:w-1/2 rounded-xl"
            >
              Update Transaction
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;