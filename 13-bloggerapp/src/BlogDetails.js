import React from 'react';

function BlogDetails(props) {
  const { show } = props;
  // Style 2: ternary operator
  return (
    <div>
      {show ? <h3>Blog Details: "10 Tips for Learning React"</h3> : null}
    </div>
  );
}

export default BlogDetails;
