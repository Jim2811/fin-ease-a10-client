import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
const TransactionDetail = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const params = useParams();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`transactions/${params.id}`)
      .then((r) => setData(r.data.result))
      .catch((e) => toast.error(e.message));
  }, [user?.email]);
  const date = data?.date.includes("T")
    ? `${data?.date.split("T")[0]}`
    : `${data?.date.split(" ")[0]}`;
  const [totalAmount, setTotalAmount] = useState(0);
  // total amount in single category
  useEffect(() => {
    axiosSecure
      .get(`/category-total-amount?category=${data?.category}`)
      .then((r) => setTotalAmount(r.data[0].total));
  }, [data?.category, axiosSecure]);

  return (
    <div className="min-h-screen  py-6">
      <div className="flex flex-col justify-center items-center gap-3 mt-6">
        <h1 className="card-title text-primary text-4xl font-bold text-center pb-3 mb-5">
          Transaction Details
        </h1>
        <div className="w-10/12 md:w-7/12 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-7 px-5 rounded-2xl shadow-2xl text-xl grid gap-2">
          {/* Transaction Type */}
          <div>
            <h3 className="text-primary font-bold">Type: </h3>
            <span
              className={`font-bold ${
                data?.type === "Income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {data?.type}
            </span>
          </div>
          {/* description */}
          <div className="text-gray-700">
            <h3 className="text-primary font-bold">Description: </h3>
            <span>{data?.description}</span>
          </div>
          {/* Amount */}
          <div>
            <h3 className="text-primary font-bold ">Amount: </h3>
            <span className="text-secondary">{data?.amount}৳</span>
          </div>
          {/* date */}
          <div className="text-gray-700">
            <h3 className="text-primary font-bold ">Date: </h3>
            <span>{date}</span>
          </div>
          <div className="text-gray-700">
            <h3 className="text-primary font-bold ">Category: </h3>
            <span>{data?.category}</span>
          </div>
          <div className="text-gray-700">
            <h3 className="text-primary font-bold ">
              Total amount of this category:{""}
            </h3>
            <span>{totalAmount}৳</span>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2 mt-4">
            <Link
              className="btn btn-primary w-full md:w-5/12"
              to={"/my-transactions"}
            >
              Go to My Transaction
            </Link>
            <Link
              className="btn btn-accent w-full md:w-5/12"
              to={`/update-transaction/${data?._id}`}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
