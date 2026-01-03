import { useState } from "react";
import { FaBars, FaChartPie, FaUsers } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { NavLink, Outlet } from "react-router";
import { MdOutlineAddchart } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import ThemeToggle from "../Components/Button/ThemeToggle";
import LogoutAndProfile from "../Components/LogoutAndProfile";
import { CiViewTable } from "react-icons/ci";

const DashboardLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="relative flex min-h-screen bg-base-100 max-w-[1200px] mx-auto">
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-base-200 border-r border-base-300 
        transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between p-4 border-b border-base-300">
          <h2 className="text-xl font-bold text-primary tracking-tight">
            FinEase
          </h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="btn btn-sm btn-ghost text-base-content hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <ul className="menu p-3 gap-2 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <CiHome />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <FaChartPie />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-profile"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <FaUsers />
              <span>Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-transaction"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <MdOutlineAddchart />
              <span>Add Transaction</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-transactions"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <HiOutlineDocumentReport />
              <span>My Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/transactions-table"
              className="hover:bg-base-300 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <CiViewTable />
              <span>Transaction History</span>
            </NavLink>
          </li>

          <li className="pt-3 border-t border-base-300 mt-2">
            <ThemeToggle />
          </li>
        </ul>
      </aside>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30 px-4 shadow-sm flex justify-between">
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open sidebar"
            >
              <FaBars size={20} />
            </button>
            <h2 className="text-xl tracking-tight">
              <span className=" font-bold text-primary">FinEase</span> Dashboard
            </h2>
          </div>
          <LogoutAndProfile></LogoutAndProfile>
        </div>

        <main className="flex-1 p-4 sm:p-6">
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
