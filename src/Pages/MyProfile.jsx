import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import DefaultProfile from "../assets/default-profile.png";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-8 bg-base-100 transition-colors duration-300">
      <div className="card w-full max-w-md bg-base-200/60 backdrop-blur-md border border-base-300/40 shadow-xl hover:shadow-2xl hover:shadow-primary/10 rounded-2xl transition-all duration-300">
        <figure className="pt-8">
          <img
            src={user?.photoURL || DefaultProfile}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover mx-auto transform transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            {user?.displayName || "Anonymous User"}
          </h2>

          <p className="text-base text-base-content/70">
            <span className="font-semibold text-base-content">Email: </span>
            {user?.email || "N/A"}
          </p>

          <div className="divider my-3"></div>

          <Link
            to="/update-profile"
            className="btn btn-primary w-11/12 max-w-xs mt-2 text-white font-semibold shadow-md hover:shadow-primary/40 transition-transform duration-300 hover:scale-[1.02]"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;