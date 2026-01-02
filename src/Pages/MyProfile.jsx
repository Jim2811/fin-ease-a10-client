import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Profile from '../assets/default-profile.png'
const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card w-full max-w-md custom-gradient shadow-2xl rounded-2xl hover:shadow-primary/30 transition duration-300">
        <figure className="pt-6">
          <img
            src={user?.photoURL || Profile}
            alt="profile pic"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-md object-cover"
          />
        </figure>

        <div className="card-body text-center space-y-3">
          <h2 className="text-3xl font-bold text-primary">
            {user?.displayName}
          </h2>

          <p className="text-base text-gray-600">
            <span className="font-semibold">Email:</span>{" "}
            {user?.email}
          </p>

          <div className="divider my-2"></div>

          <div className="form-control mt-4">
            <Link
              to="/update-profile"
              className="btn btn-accent w-full hover:shadow-lg"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;