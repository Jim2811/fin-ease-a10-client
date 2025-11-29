import React from "react";
import { useLoaderData } from "react-router";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";

const MyTransactions = () => {
    const myTransactions = useLoaderData();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div>
          <h1 className="py-6 text-center text-4xl md:text-5xl text-primary font-bold">
            My Transactions
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl px-2 mx-auto w-full">
          {
            myTransactions.map((myTransaction)=><MyTransactionCard myTransaction={myTransaction} key={myTransaction._id}></MyTransactionCard>)
          }
        </div>
      </div>
    </>
  );
};

export default MyTransactions;
