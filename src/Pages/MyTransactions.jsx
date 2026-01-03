import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

const MyTransactions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axiosSecure
      .get(`/transactions?email=${user.email}`)
      .then((res) => {
        setTransactions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message || "Failed to load transactions");
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);

  const handleDltSuccess = (id) => {
    const remaining = transactions.filter((t) => t._id !== id);
    setTransactions(remaining);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        <h1 className="text-4xl md:text-5xl text-primary font-extrabold mb-8">
          My Transactions
        </h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen custom-gradient pb-16 px-4">
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          My Transactions
        </h1>
        <p className="text-base-content/70 mt-2">
          View and manage all your recorded transactions
        </p>
      </div>

      {transactions.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {transactions.map((tx) => (
            <MyTransactionCard
              key={tx._id}
              myTransaction={tx}
              handleDltSuccess={handleDltSuccess}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center space-y-4">
          <div className="bg-base-200/40 p-10 rounded-xl border border-base-300 shadow-sm max-w-md">
            <h3 className="text-2xl font-semibold text-base-content mb-2">
              No Transactions Found
            </h3>
            <p className="text-base-content/70 mb-6">
              You haven’t added any transaction yet. Start by adding your first one.
            </p>
            <Link
              to="/add-transaction"
              className="btn btn-primary font-semibold px-10"
            >
              Add Transaction
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTransactions;