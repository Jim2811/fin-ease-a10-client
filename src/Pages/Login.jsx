import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import GoogleSignIn from "../Components/Button/GoogleSignIn";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (!email || !password) return toast.warning("Please enter credentials.");

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleDemoLogin = () => {
    const demoEmail = "demo@demo.com";
    const demoPass = "DemoUser@";

    setInputs({ email: demoEmail, password: demoPass });
      signInUser(demoEmail, demoPass)
        .then(() => {
          toast.success("Demo Login Successful");
          navigate("/");
        })
        .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <title>Login - FinEase</title>

      <div className="min-h-screen w-11/12 mx-auto flex flex-col justify-center items-center py-20">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-6 shadow-md">
            <legend className="fieldset-legend text-2xl font-bold text-center mb-2">
              Login
            </legend>

            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              name="email"
              required
              value={inputs.email}
              onChange={(e) =>
                setInputs({ ...inputs, email: e.target.value })
              }
            />
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              name="password"
              required
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <Link
              to="/reset-password"
              className="text-primary font-semibold py-1 inline-block"
            >
              Forgot Password?
            </Link>
            <button
              className="btn btn-accent mt-3 w-full text-white font-semibold"
              type="submit"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="btn btn-primary hover:btn-accent mt-2"
            >
              Demo Login
            </button>
            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-primary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
        <h2 className="text-center font-bold text-xl py-4">Or</h2>
        <GoogleSignIn />
      </div>
    </>
  );
};

export default Login;