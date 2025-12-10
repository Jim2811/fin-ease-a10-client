import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";
// import useAxios from "../Hooks/useAxios";
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
    axiosSecure
      .get(`/transactions?email=${user.email}`)
      .then((res) => {
        setTransactions(res.data);
        setLoading(false);
      })
      .catch(() =>
        toast.error(
          "Some error occurred please reload the page or try again letter"
        )
      );
  }, [user?.email, axiosSecure]);
  const handleDltSuccess = (id) => {
    const remaining = transactions.filter((t) => t._id !== id);
    setTransactions(remaining);
  };

  return (
    <>
      {loading ? (
        <div className="min-h-screen">
          <div className="py-8">
            <h1 className="my-5 text-center text-4xl md:text-5xl text-primary font-bold">
              My Transactions
            </h1>
          </div>
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="min-h-screen">
          <div className="py-8">
            <h1 className="my-5 text-center text-4xl md:text-5xl text-primary font-bold">
              My Transactions
            </h1>
          </div>
          {transactions.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5 max-w-6xl px-2 mx-auto w-full">
              {transactions.map((myTransaction) => (
                <MyTransactionCard
                  myTransaction={myTransaction}
                  key={myTransaction._id}
                  handleDltSuccess={handleDltSuccess}
                ></MyTransactionCard>
              ))}
            </div>
          ) : (
            <h3 className="text-center justify-center pt-28 text-xl">
              You don't have any transactions. <br /> Please add your
              transaction data to{" "}
              <Link className="font-bold text-primary hover:text-accent">
                Add Transaction
              </Link>{" "}
              field
            </h3>
          )}
        </div>
      )}
    </>
  );
};

export default MyTransactions;
