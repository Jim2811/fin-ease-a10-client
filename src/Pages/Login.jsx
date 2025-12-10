import React from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import GoogleSignIn from "../Components/Button/GoogleSignIn";
import { toast } from "react-toastify";
const Login = () => {
  const {signInUser} = useAuth()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
     const form = e.target;
    const mail = form.email.value;
    const pass = form.password.value;
    signInUser(mail, pass)
    .then(() => {
      navigate('/')
      toast.success("Login Successful")
    })
    .catch(err => toast.error(err.message))
  };
  return (
    <>
      <title>Login - FinEase</title>
      <div className="h-full w-11/12 mx-auto flex justify-center py-20 items-center flex-col">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend font-xl">Login</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <Link
              to={"/reset-password"}
              className="text-primary font-bold py-1"
            >
              Forgot Password
            </Link>
            <button className="btn btn-accent mt-4" type="submit">
              Login
            </button>
            <Link to={"/register"} className="py-2">
              Do not have an Account?{" "}
              <span className="font-bold text-primary">Register</span>
            </Link>
          </fieldset>
        </form>
        <h2 className="text-center font-bold text-xl py-2">Or</h2>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </>
  );
};

export default Login;
