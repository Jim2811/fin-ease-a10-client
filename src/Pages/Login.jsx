import React from 'react';
import google from '../assets/Google.svg'
import { Link } from 'react-router';
const Login = () => {
    const handleLogin = (e) =>{
        console.log('clicked');
    }
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
            //   onChange={(e) => setEmail(e.target.value)}
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
            <Link to={"/reset-password"} className="text-primary font-bold py-1">
              Forgot Password
            </Link>
            <button className="btn btn-accent mt-4" type="submit">
              Login
            </button>
            {/* <div className="py-2 text-center">
              {error && (
                <p className="text-error font-semibold text-center mt-3">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-success font-semibold text-center mt-3">
                  {success}
                </p>
              )}
            </div> */}
            <Link to={"/register"} className="py-2">
              Do not have an Account?{" "}
              <span className="font-bold text-primary">Register</span>
            </Link>
          </fieldset>
        </form>
        <h2 className="text-center font-bold text-xl py-2">Or</h2>
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <img src={google} alt="" />
          Login with Google
        </button>
      </div>
        </>
    );
};

export default Login;