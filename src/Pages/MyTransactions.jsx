import React from "react";
import { Link, Outlet, useLoaderData } from "react-router";
import MyTransactionCard from "../Components/Cards/MyTransactionCard";

const MyTransactions = () => {
  const myTransactions = useLoaderData();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="py-8">
          <h1 className="my-5 text-center text-4xl md:text-5xl text-primary font-bold">
            My Transactions
          </h1>
        </div>

        {Array.isArray(myTransactions) ? (
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl px-2 mx-auto w-full">
            {myTransactions.map((myTransaction) => (
              <MyTransactionCard
                myTransaction={myTransaction}
                key={myTransaction._id}
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
