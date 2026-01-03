import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photoURL.value.trim() || user.photoURL;

    try {
      await updateProfile(user, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      form.reset();
    } catch {
      toast.error("Profile update failed. Try again.");
    }
  };

  return (
    <>
      <title>Update Profile - FinEase</title>

      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-base-100 transition-colors duration-300">
        <div className="w-full max-w-md bg-base-200/60 backdrop-blur-md rounded-2xl shadow-xl border border-base-300/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-6">
            Update Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-base-content mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Your full name"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-semibold text-base-content mb-1"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="url"
                name="photoURL"
                defaultValue={user?.photoURL || ""}
                placeholder="https://example.com/profile.jpg"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-white font-semibold mt-3 shadow-md hover:shadow-primary/40 transition-transform duration-300 hover:scale-[1.02]"
            >
              Save Changes
            </button>
          </form>

          <div className="divider my-6" />

          <Link
            to="/my-profile"
            className="btn btn-outline btn-accent w-full font-semibold hover:shadow-lg transition-all"
          >
            Back to My Profile
          </Link>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;