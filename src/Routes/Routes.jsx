import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from './PrivateRoute'
import AddTransaction from '../Pages/AddTransaction'
import MyTransactions from '../Pages/MyTransactions'
import Reports from '../Pages/Reports'

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
          { path: "/add-transaction", Component: AddTransaction},
          { path: "/my-transactions", Component: MyTransactions  },
          { path: "/reports", Component: Reports  },
        ],
      },
    ],
  },
]);
export default router;
