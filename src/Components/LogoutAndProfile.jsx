import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import ProfilePic from "../assets/default-profile.png";
const LogoutAndProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  const handleLogout = () =>{
    logout()
    .then(()=> navigate('/'))
    .catch(err => console.error(err));
  }
  return (
    <>
      <div className="flex items-center gap-1">
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <img
              src={user?.photoURL || ProfilePic}
              className="w-8 cursor-pointer rounded-full"
            />
          </div>
          <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-2 shadow right-1"
                >
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-transaction">Add Transaction</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-transactions">My Transactions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/reports">Reports</NavLink>
                  </li>
                </ul>
        </div>
        <Link className="btn btn-primary bg-red-600" onClick={handleLogout}>Logout</Link>
      </div>
    </>
  );
};

export default LogoutAndProfile;
