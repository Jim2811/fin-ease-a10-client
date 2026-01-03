import React from "react";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    if (!user) return;
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value ? form.photoURL.value : user.photoURL;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    }).then(() => {
      toast.success("Profile Updated Successfully!!");
      form.reset();
    });
  };

  return (
    <>
      <title>Update Profile - FinEase</title>
      <div className="flex flex-col justify-center items-center py-12 min-h-screen">
        <div className="py-5 custom-gradient shadow-2xl rounded-2xl hover:shadow-primary/30 transition duration-300 flex flex-col justify-center">
          <form className="" onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-4xl text-primary py-4">
              Update Profile
            </h1>
            <fieldset className="fieldset border-none rounded-box w-xs border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                defaultValue={user.displayName}
              />

              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                placeholder="Photo URL"
                name="photoURL"
                defaultValue={user.photoURL}
              />
              <button className="btn btn-accent mt-4 w-7/12 mx-auto" type="submit">
                Update Profile
              </button>
            </fieldset>
          </form>
          <button className="btn btn-primary w-6/12 mx-auto text-white">
            <Link to={"/my-profile"}>My Profile</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
