import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import useAuth from "../Hooks/useAuth";
import LogoutAndProfile from "../Components/LogoutAndProfile";
import ThemeToggle from "../Components/Button/ThemeToggle";
import PrivateNavItem from "../Components/PrivateNavItem/PrivateNavItem";

const Navbar = () => {
  const { user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary px-2"
              : "px-2 hover:text-primary transition-colors"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary px-2"
              : "px-2 hover:text-primary transition-colors"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary px-2"
              : "px-2 hover:text-primary transition-colors"
          }
        >
          Contact
        </NavLink>
      </li>
      {user && <PrivateNavItem />}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-base-100/70 backdrop-blur-xl border-b border-base-300/40">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="navbar py-2">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                aria-label="Open Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
              >
                {navLinks}
              </ul>
            </div>

            <Link to="/" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="FinEase Logo"
                className="w-8 md:w-10 transition-transform hover:scale-105"
              />
              <span className="text-xl md:text-2xl font-extrabold text-primary">
                FinEase
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            <ThemeToggle />
            {!user ? (
              <Link
                to="/login"
                className="btn btn-accent text-white font-semibold px-5"
              >
                Login / Register
              </Link>
            ) : (
              <LogoutAndProfile />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;