import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to EduPlatform</h1>
      <p className="mt-2">Learn anything, anytime, anywhere.</p>

      <div className="mt-4 space-x-4">
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
        <Link to="/courses" className="text-blue-500">
          Browse Courses
        </Link>
        <Link to="/about" className="text-blue-500">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Home;

