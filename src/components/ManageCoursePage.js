import React from "react";

const MangeCoursePage = props => {
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
};

export default MangeCoursePage;
