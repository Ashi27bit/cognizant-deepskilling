import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
  const [showCourse, setShowCourse] = useState(true);

  // Style 4: element variable
  let courseElement;
  if (showCourse) {
    courseElement = <CourseDetails show={showCourse} />;
  } else {
    courseElement = <p>Course details hidden.</p>;
  }

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setShowBook(!showBook)}>Toggle Book</button>
      <button onClick={() => setShowBlog(!showBlog)}>Toggle Blog</button>
      <button onClick={() => setShowCourse(!showCourse)}>Toggle Course</button>

      <BookDetails show={showBook} />
      <BlogDetails show={showBlog} />
      {courseElement}
    </div>
  );
}

export default App;
