import React from 'react';
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router';
const PrivateRoute = () => {
    const {user} = useAuth();
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;