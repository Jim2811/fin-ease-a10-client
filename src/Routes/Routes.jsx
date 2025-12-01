import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddTransaction from "../Pages/AddTransaction";
import MyTransactions from "../Pages/MyTransactions";
import Reports from "../Pages/Reports";
import Spinner from "../Components/Spinner";
import TransactionDetail from "../Pages/TransactionDetail";
import UpdateTransaction from "../Pages/UpdateTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        Component: PrivateRoute,
        children: [
          { path: "/add-transaction", 
            Component: AddTransaction },
          {
            path: "/my-transactions",
            Component: MyTransactions,
            loader: async () => {
              const res = await fetch("http://localhost:3000/transactions");
              const data = await res.json();
              return data;
            },
          },
          {
            path: "/transaction/:id",
            loader: ({params}) => fetch(`http://localhost:3000/transactions/${params.id}`),
            Component: TransactionDetail,
          },
          {
            path: "/update-transaction/:id",
            loader: ({params}) => fetch(`http://localhost:3000/transactions/${params.id}`),
            Component: UpdateTransaction            
          },
          { path: "/reports", 
            Component: Reports },
        ],
      },
    ],
  },
]);
export default router;
