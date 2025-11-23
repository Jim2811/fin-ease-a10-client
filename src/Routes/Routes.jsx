import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }
]);
export default router;
