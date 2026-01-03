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
    <div className="w-full h-full">
      <div
        className={`card bg-base-200/60 backdrop-blur-md border ${borderClass} hover:shadow-xl transition-all duration-300 rounded-2xl h-full flex flex-col justify-between`}
      >
        <div className="card-body flex flex-col justify-between h-full space-y-3">
          <div>
            <h2
              className={`card-title font-bold text-2xl ${colorClass} tracking-wide mb-3`}
            >
              {type}
            </h2>
            <div className="text-base-content/80 leading-relaxed space-y-1">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {myTransaction.category}
              </p>
              <p>
                <span className="font-semibold">Amount:</span>{" "}
                <span
                  className={`font-bold ${
                    isIncome ? "text-accent" : "text-primary"
                  }`}
                >
                  {myTransaction.amount}৳
                </span>
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
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
          </div>

          <div className="border-t border-base-300 pt-4 mt-2">
            <div className="flex gap-2 justify-end flex-wrap">
              <Link
                to={`/transaction/${myTransaction._id}`}
                className="btn btn-sm btn-primary font-semibold min-w-[90px]"
              >
                Details
              </Link>

              <Link
                to={`/update-transaction/${myTransaction._id}`}
                className="btn btn-sm btn-accent font-semibold min-w-[90px]"
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