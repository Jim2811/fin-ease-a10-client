import React from 'react';
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router';
import Spinner from '../Components/Spinner';
const PrivateRoute = () => {
    const {user, loading} = useAuth();
    if(loading){
        return <Spinner></Spinner>
    }
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;