import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Report</h2>
      <p><b>Name:</b> {name}</p>
      <p><b>School:</b> {school}</p>
      <p><b>Total Score:</b> {total}</p>
      <p><b>Goal:</b> {goal}</p>
      <p><b>Average Score:</b> {average}</p>
    </div>
  );
}

export default CalculateScore;
