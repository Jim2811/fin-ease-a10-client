import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Layout/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    }
]);
export default router;
