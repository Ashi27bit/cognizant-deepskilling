import React from 'react';

function BookDetails(props) {
  // Style 1: if-else inside the function, returning early
  if (!props.show) {
    return null;
  }
  return <h3>Book Details: "React for Beginners" by John Doe</h3>;
}

export default BookDetails;
