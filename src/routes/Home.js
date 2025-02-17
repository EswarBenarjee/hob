import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <h1 className="text-5xl text-primary font-extrabold text-center mb-8 z-1">
        HOBB
      </h1>

      {/* Links to Login and Register pages */}
      <div className="flex space-x-6 mt-8">
        <Link
          to="/login"
          className="bg-primary z-1 text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300 transform hover:scale-105"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-primary z-1 text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
