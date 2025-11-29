import React from "react";
import { Link, useLoaderData } from "react-router";

const TransactionDetail = () => {
  const data = useLoaderData();
  const result = data.result;
  console.log(result);
  return (
    <div className="min-h-screen  py-6">
      <div className="flex flex-col justify-center items-center gap-3 mt-6">
        <h1 className="card-title text-primary text-4xl font-bold text-center pb-3 mb-5">
          Transaction Details
        </h1>
        <div className="w-10/12 md:w-7/12 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-7 px-5 rounded-2xl shadow-2xl text-xl grid gap-2">
        {/* Transaction Type */}
          <div className="text-gray-700">
                <h3 className="text-primary font-bold">Type: </h3> 
                <span>Income</span>
          </div>
          {/* Amount */}
          <div className="text-gray-700">
                <h3 className="text-primary font-bold ">Amount: </h3> 
                <span>5000৳</span>
          </div>
          {/* date */}
          <div className="text-gray-700">
                <h3 className="text-primary font-bold ">Date: </h3> 
                <span>111/111/11</span>
          </div>
          <div className="text-gray-700">
                <h3 className="text-primary font-bold ">Category: </h3> 
                <span>Category</span>
          </div>
          <div className="text-gray-700">
                <h3 className="text-primary font-bold ">Total amount of this category: </h3> 
                <span>money</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TransactionDetail;
