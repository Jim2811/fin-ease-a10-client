import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import GoogleSignIn from "../Components/Button/GoogleSignIn";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photoURL.value.trim();
    const pass = form.pass.value.trim();

    const upperCasePattern = /(?=.*[A-Z])/;
    const lowerCasePattern = /(?=.*[a-z])/;
    const lengthPattern = /.{6,}/;

    if (!lengthPattern.test(pass))
      return toast.error("Password must be at least 6 characters long.");
    if (!upperCasePattern.test(pass))
      return toast.error("Password must contain at least one uppercase letter.");
    if (!lowerCasePattern.test(pass))
      return toast.error("Password must contain at least one lowercase letter.");

    try {
      const result = await createUser(email, pass);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Registration successful! Welcome to FinEase.");
      form.reset();
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Failed to register user.");
    }
  };

  return (
    <>
      <title>Register - FinEase</title>
      <section className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 py-10 sm:py-20 transition-colors duration-300">
        <div className="w-full max-w-md bg-base-200/60 backdrop-blur-md border border-base-300/40 rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label text-sm font-semibold text-base-content">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="label text-sm font-semibold text-base-content">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-semibold text-base-content">
                Photo URL (optional)
              </label>
              <input
                type="url"
                name="photoURL"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none"
                placeholder="https://example.com/profile.jpg"
              />
            </div>
            <div>
              <label className="label text-sm font-semibold text-base-content">
                Password
              </label>
              <input
                type="password"
                name="pass"
                className="input input-bordered w-full border-base-300 focus:border-primary focus:outline-none"
                placeholder="Choose a strong password"
                required
              />
              <p className="text-xs text-base-content/60 mt-1">
                Must be at least 6 characters, include upper & lower case.
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-accent w-full mt-2 text-white font-semibold hover:shadow-lg transition-transform duration-200 hover:scale-[1.02]"
            >
              Register
            </button>
            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-primary">
                Login
              </Link>
            </p>
          </form>
          <div className="divider my-6">OR</div>
          <GoogleSignIn />
        </div>
      </section>
    </>
  );
};

export default Register;