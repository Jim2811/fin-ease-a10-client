import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, Outlet } from "react-router";
import Spinner from "../Components/Spinner";
const PrivateRoute = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen">
        <Spinner></Spinner>
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;