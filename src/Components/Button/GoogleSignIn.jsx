import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import google from "../../assets/Google.svg";
const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        alert("Authentication Successful");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignIn}>
        <img src={google} alt="" />
        Register with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
