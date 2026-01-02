import React from "react";
import { NavLink } from "react-router";

const PrivateNavItem = () => {
  return (
    <>
      <li>
        <NavLink to="/add-transaction">Add Transaction</NavLink>
      </li>
      <li>
        <NavLink to="/my-transactions">My Transactions</NavLink>
      </li>
      <li>
        <NavLink to="/reports">Reports</NavLink>
      </li>
    </>
  );
};

export default PrivateNavItem;
