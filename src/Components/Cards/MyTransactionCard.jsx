import React from 'react';

import { Link } from 'react-router';

const MyTransactionCard = ({myTransaction}) => {
    const type = myTransaction.type.charAt(0).toUpperCase() + myTransaction.type.slice(1).toLowerCase();
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto shadow-lg">
            <div className="card-body">
              <h2 className="card-title font-bold text-primary text-xl">
                {type}
              </h2>
              <div>
                <p>
                  <span className="font-bold">Category:</span> {myTransaction.category}
                </p>
                <p>
                  <span className="font-bold">Amount:</span> {myTransaction.amount}৳
                </p>
                <p>
                  <span className="font-bold">Date:</span> {myTransaction.date.split("T")[0]}
                </p>
                <div className="card-actions md:justify-end justify-center">
                  <div className="flex gap-2 pt-5">
                    {/* <TranDetBtn myTransaction={myTransaction}></TranDetBtn> */}
                    <Link className="btn btn-primary" to={`/transaction/${myTransaction._id}`}>Details</Link>
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
    );
};

export default MyTransactionCard;