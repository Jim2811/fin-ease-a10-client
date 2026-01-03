import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const TranSactionTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axiosSecure
      .get(`/transactions?email=${user.email}`)
      .then((res) => setTransactions(res.data || []))
      .catch(() => toast.error("Failed to load transactions"))
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <Spinner />
      </div>
    );

  return (
    <div className="h-[88vh] w-full flex justify-center overflow-hidden mb-10">
      <div className="lg:w-full w-[270px] rounded-2xl flex flex-col p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
          My Transactions
        </h2>
        <div className="overflow-auto w-full h-[70vh] rounded-lg border border-base-300">
          <table className="table table-zebra w-full min-w-[750px] text-center text-xs sm:text-sm md:text-base">
            <thead className="bg-base-300 sticky top-0 z-10">
              <tr className="uppercase text-base-content/80 font-semibold">
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((t, i) => (
                  <tr
                    key={t._id || i}
                    className="hover:bg-base-300/40 transition duration-150"
                  >
                    <td className="font-semibold">{i + 1}</td>
                    <td className="font-medium whitespace-nowrap">{t.name}</td>
                    <td className="whitespace-nowrap">
                      {t.category || "N/A"}
                    </td>
                    <td>
                      <span
                        className={`badge badge-sm md:badge-md font-bold ${
                          t.type?.toLowerCase() === "income"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="font-semibold whitespace-nowrap">
                      ৳{t.amount?.toLocaleString() || 0}
                    </td>
                    <td className="whitespace-nowrap">{t.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-10 text-center text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TranSactionTable;