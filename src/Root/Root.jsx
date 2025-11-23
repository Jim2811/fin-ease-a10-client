import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router';
// import '../../App.css'

const Root = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default Root;