import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import ProfilePic from "../assets/default-profile.png";
const LogoutAndProfile = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => navigate("/"))
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <img
              src={user?.photoURL || ProfilePic}
              className="w-9 h-9 cursor-pointer rounded-full border-2 border-[#ff6f00]"
            />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-2 shadow -left-48"
          >
            <div className="pl-2">
              <p>
                <span className="font-bold">Name: </span>
                <span>{user.displayName}</span>
              </p>
              <p>
                <span className="font-bold">Email: </span> <span>{user.email}</span>
              </p>
            </div>
            <div className="py-2">
              <li>
                <NavLink to="/add-transaction">Add Transaction</NavLink>
              </li>
              <li>
                <NavLink to="/my-transactions">My Transactions</NavLink>
              </li>
              <li>
                <NavLink to="/reports">Reports</NavLink>
              </li>
            </div>
            <Link
              className="btn btn-primary bg-red-600 w-full hover:bg-white hover:border-red-600 hover:text-black"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoutAndProfile;
