import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const MyTransactions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterType, setFilterType] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axiosSecure
      .get(`/transactions?email=${user.email}`)
      .then((res) => setTransactions(res.data || []))
      .catch(() => toast.error("Failed to load transactions"))
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  const handleDltSuccess = (id) =>
    setTransactions((prev) => prev.filter((t) => t._id !== id));
  const list = useMemo(() => {
    let data = [...transactions];
    if (filterType !== "all") {
      data = data.filter((tx) => tx.type.toLowerCase() === filterType);
    }
    data.sort((a, b) =>
      sortAsc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
    return data;
  }, [transactions, filterType, sortAsc]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        <h1 className="text-4xl text-primary font-bold mb-6">
          My Transactions
        </h1>
        <Spinner />
      </div>
    );

  return (
    <section className="min-h-screen custom-gradient px-4 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 max-w-6xl mx-auto">
        <h1 className="text-3xl text-base-content font-bold text-center sm:text-left">
          My Transactions
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setFilterType((prev) =>
                prev === "all"
                  ? "income"
                  : prev === "income"
                  ? "expense"
                  : "all"
              )
            }
            className="btn btn-sm btn-ghost text-base-content hover:text-primary flex items-center gap-2"
            title="Toggle Filter (Income / Expense / All)"
          >
            <FaFilter size={16} />
            <span className="hidden sm:inline">
              {filterType === "all"
                ? "All"
                : filterType === "income"
                ? "Income"
                : "Expense"}
            </span>
          </button>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="btn btn-sm btn-ghost text-base-content hover:text-primary flex items-center gap-2"
            title="Toggle Sort (Newest / Oldest)"
          >
            {sortAsc ? (
              <FaSortAmountDown size={16} />
            ) : (
              <FaSortAmountUp size={16} />
            )}
            <span className="hidden sm:inline">
              {sortAsc ? "Oldest" : "Newest"}
            </span>
          </button>
        </div>
      </div>
      {list.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {list.map((tx) => (
              <MyTransactionCard
                key={tx._id}
                myTransaction={tx}
                handleDltSuccess={handleDltSuccess}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16 text-center space-y-4">
          <div className="bg-base-200/60 backdrop-blur-sm rounded-xl border border-base-300 p-8 shadow">
            <h3 className="text-2xl font-semibold mb-2">
              No Transactions Found
            </h3>
            <p className="text-base-content/70 mb-4">
              Add your first transaction to see it here.
            </p>
            <Link to="/add-transaction" className="btn btn-primary">
              Add Transaction
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyTransactions;
