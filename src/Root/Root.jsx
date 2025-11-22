import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router';
// import '../../App.css'

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Root;