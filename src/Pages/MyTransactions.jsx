import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";
// import useAxios from "../Hooks/useAxios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const MyTransactions = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [transactions, setTransactions] = useState();
  useEffect(()=>{
    axiosSecure.get(`/transactions?email=${user.email}`)
    .then(res =>{
      setTransactions(res.data)
    })
  }, [])
  const handleDltSuccess = (id) =>{
    const remaining = transactions.filter((t) => t._id !== id);
    setTransactions(remaining);
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="py-8">
          <h1 className="my-5 text-center text-4xl md:text-5xl text-primary font-bold">
            My Transactions
          </h1>
        </div>

        {Array.isArray(transactions) ? (
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl px-2 mx-auto w-full">
            {transactions.map((myTransaction) => (
              <MyTransactionCard
                myTransaction={myTransaction}
                key={myTransaction._id}
                handleDltSuccess = {handleDltSuccess}
              ></MyTransactionCard>
            ))}
          </div>
        ) : (
          <h3 className="text-center justify-center pt-28 text-xl">
            You don't have any transactions. <br /> Please add your transaction
            data to{" "}
            <Link className="font-bold text-primary hover:text-accent">
              Add Transaction
            </Link>{" "}
            field
          </h3>
        )}
      </div>
    </>
  );
};

export default MyTransactions;
