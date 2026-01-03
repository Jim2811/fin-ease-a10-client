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
              ? "font-semibold text-primary border-b-2 border-primary px-3"
              : "px-3 hover:text-primary transition-colors"
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
              ? "font-semibold text-primary border-b-2 border-primary px-3"
              : "px-3 hover:text-primary transition-colors"
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
              ? "font-semibold text-primary border-b-2 border-primary px-3"
              : "px-3 hover:text-primary transition-colors"
          }
        >
          Contact
        </NavLink>
      </li>
      {user && <PrivateNavItem />}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 w-full gap-1">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="dropdown lg:hidden">
              <button
                tabIndex={0}
                className="btn btn-ghost p-2"
                aria-label="Menu"
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
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 bg-base-100/95 shadow-md rounded-xl w-52 border border-base-300"
              >
                {navLinks}
              </ul>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="FinEase Home"
            >
              <img
                src={Logo}
                alt="FinEase Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-md object-contain transition-transform hover:scale-105"
              />
              <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                FinEase
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex justify-center flex-1">
            <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
          </div>

          <div className="flex items-center gap-2 justify-between w-full sm:w-auto">
            <ThemeToggle />
            {!user ? (
              <Link
                to="/login"
                className="btn btn-accent btn-sm text-white font-semibold px-4 h-10 min-h-0"
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