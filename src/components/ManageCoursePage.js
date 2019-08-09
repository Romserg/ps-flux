import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

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

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course);
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?" />*/}
      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
};

export default MangeCoursePage;
