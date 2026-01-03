import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ProfilePic from "../assets/default-profile.png";
import { toast } from "react-toastify";

const LogoutAndProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="relative flex items-center">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center justify-center"
        >
          <div className="avatar ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 rounded-full ring ring-primary/60">
              <img
                src={user?.photoURL || ProfilePic}
                alt="Profile Avatar"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[5] p-4 shadow-lg bg-base-100 border border-base-300 rounded-xl w-64"
        >

          <div className="pb-2 border-b border-base-300 mb-2">
            <p className="text-sm font-semibold text-base-content">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs text-base-content/70 break-all">
              {user?.email || "No email found"}
            </p>
          </div>

          <li>
            <Link
              to="/my-profile"
              className="btn btn-sm btn-primary w-full text-white font-semibold hover:btn-accent transition-colors"
            >
              My Profile
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-600 border-none hover:bg-red-700 text-white font-semibold w-full mt-1 transition-colors"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoutAndProfile;