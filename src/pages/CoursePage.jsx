import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Course Details</h1>
      <p className="mt-2">Course ID: {id}</p>

      <div className="mt-4">
        <h3 className="text-xl">Lessons</h3>
        <ul className="mt-2 space-y-2">
          <li>Lesson 1: Introduction</li>
          <li>Lesson 2: Basics</li>
          <li>Lesson 3: Advanced Topics</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;
