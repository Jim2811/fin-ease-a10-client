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
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact"
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
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        Component: PrivateRoute,
        children: [
          { path: "add-transaction", 
            Component: AddTransaction },
          {
            path: "my-transactions",
            Component: MyTransactions,
          },
          {
            path: "transaction/:id",
            Component: TransactionDetail,
          },
          {
            path: "/update-transaction/:id",
            loader: ({params}) => fetch(`https://fin-ease-server-iota.vercel.app/transactions/${params.id}`),
            Component: UpdateTransaction
          },
          {
            path: 'my-profile',
            Component: MyProfile
          },
          {
            path: 'update-profile',
            Component: UpdateProfile
          },
          { path: "reports", 
            Component: Reports },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage
  }
]);
export default router;
