import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
// import '../../App.css'

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <>
        {
            isLoading && <Spinner></Spinner>
        }
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </>
    );
};

export default Root;