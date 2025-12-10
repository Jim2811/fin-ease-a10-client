import React from "react";
import NotFound from "../assets/App-Error.png"
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex items-center justify-center flex-col py-10 min-h-[70vh]">
        <img src={NotFound} className="max-w-[300px]" />
        <button className="btn btn-primary mt-3">
          <Link to={"/"}>Go Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
