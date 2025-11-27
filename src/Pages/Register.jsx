import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import GoogleSignIn from "../Components/Button/GoogleSignIn";
const Register = () => {
  const {createUser} = useAuth()
  const navigate = useNavigate()
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mail = form.email.value;
    const photo = form.photoURL.value;
    const pass = form.pass.value;
    createUser(mail, pass)
    .then(r => {
      navigate('/')
      return updateProfile(r.user, {
        displayName: name,
        photoURL: photo
      }).then(()=> {
        setSuccess("Registration successful! Welcome to FinEase.");
        form.reset();
        return r.user
      })
    })
    .catch((err) => {
      setError(err.message)
    })
  }
  return (
    <>
      <title>Register - FinEase</title>
      <div className="h-full w-11/12 mx-auto flex justify-center py-20 flex-col items-center">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input"
              placeholder="Photo URL"
              name="photoURL"
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="pass"
              required
            />
            <button className="btn btn-accent mt-4" type="submit">
              Register
            </button>
            <Link to={"/login"} className="py-2">
              Already have an Account?{" "}
              <span className="font-bold text-primary">Login</span>
            </Link>
          </fieldset>
        </form>
        <h2 className="text-center font-bold text-xl py-2">Or</h2>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </>
  );
};

export default Register;
