import React from 'react';

function CohortDetails(props) {
  const { cohort } = props;
  const titleStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className="box">
      <h3 style={titleStyle}>{cohort.code}</h3>
      <p>Status: {cohort.status}</p>
      <p>Trainer: {cohort.trainer}</p>
    </div>
  );
}

export default CohortDetails;
