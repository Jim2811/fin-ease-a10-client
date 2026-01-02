import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../Button/DeleteBtn";

const MyTransactionCard = ({ myTransaction, handleDltSuccess }) => {
  const type =
    myTransaction.type.charAt(0).toUpperCase() +
    myTransaction.type.slice(1).toLowerCase();

  const isIncome = myTransaction.type === "Income";
  const colorClass = isIncome ? "text-accent" : "text-primary";
  const borderClass = isIncome ? "border-accent/50" : "border-primary/40";

  return (
    <div className="w-full">
      <div
        className={`card bg-base-200/60 backdrop-blur-md border ${borderClass} hover:shadow-xl transition-all duration-300 rounded-xl`}
      >
        <div className="card-body space-y-2">
          <h2
            className={`card-title font-bold text-2xl ${colorClass} tracking-wide`}
          >
            {type}
          </h2>
          <div className="text-base-content/80 leading-relaxed space-y-1">
            <p>
              <span className="font-semibold text-base-content">Category:</span>{" "}
              {myTransaction.category}
            </p>
            <p>
              <span className="font-semibold text-base-content">Amount:</span>{" "}
              <span
                className={`font-bold ${
                  isIncome ? "text-accent" : "text-primary"
                }`}
              >
                {myTransaction.amount}৳
              </span>
            </p>
            <p>
              <span className="font-semibold text-base-content">Date:</span>{" "}
              {myTransaction.date.includes("T")
                ? myTransaction.date.split("T")[0]
                : myTransaction.date.split(" ")[0]}
            </p>
            {myTransaction.description && (
              <p className="italic text-sm text-base-content/70 pt-1">
                “{myTransaction.description.slice(0, 80)}
                {myTransaction.description.length > 80 ? "..." : ""}”
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-base-300 mt-4">
            <div className="flex flex-wrap gap-2 justify-between md:justify-end">
              <Link
                to={`/transaction/${myTransaction._id}`}
                className="btn btn-sm btn-primary font-semibold"
              >
                Details
              </Link>

              <Link
                to={`/update-transaction/${myTransaction._id}`}
                className="btn btn-sm btn-accent font-semibold"
              >
                Update
              </Link>

              <DeleteBtn
                myTransaction={myTransaction}
                handleDltSuccess={handleDltSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactionCard;