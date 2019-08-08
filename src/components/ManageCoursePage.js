import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const MangeCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?" />*/}
      <CourseForm course={course} onChange={handleChange}/>
    </>
  );
};

export default MangeCoursePage;
