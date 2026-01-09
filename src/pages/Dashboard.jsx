import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-4">
        <h3 className="text-xl">My Courses</h3>

        <ul className="mt-2 space-y-2">
          <li>
            <Link to="/course/1" className="text-blue-500">
              React for Beginners
            </Link>
          </li>
          <li>
            <Link to="/course/2" className="text-blue-500">
              Python Basics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
