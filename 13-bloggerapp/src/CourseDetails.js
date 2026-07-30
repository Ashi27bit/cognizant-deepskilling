import React from 'react';

function CourseDetails(props) {
  const { show } = props;
  // Style 3: logical && operator
  return (
    <div>
      {show && <h3>Course Details: "Full Stack React Development"</h3>}
    </div>
  );
}

export default CourseDetails;
