import React from "react";

const MyTransactions = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div>
          <h1 className="py-6 text-center text-4xl md:text-5xl text-primary font-bold">
            My Transactions
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl px-2 mx-auto w-full">
          <div className="card bg-base-100 w-full mx-auto shadow-lg">
            <div className="card-body">
              <h2 className="card-title font-bold text-primary text-xl">
                Type
              </h2>
              <div>
                <p>
                  <span className="font-bold">Category:</span> Category
                </p>
                <p>
                  <span className="font-bold">Amount:</span> Category
                </p>
                <p>
                  <span className="font-bold">Date:</span> Category
                </p>
                <div className="card-actions md:justify-end justify-center">
                  <div className="flex gap-2 pt-5">
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-accent">Update</button>
                    <button className="btn btn-primary bg-red-600 hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTransactions;
