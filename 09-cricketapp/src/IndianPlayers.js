import React from 'react';

const oddTeam = ['Player1', 'Player3', 'Player5', 'Player7'];
const evenTeam = ['Player2', 'Player4', 'Player6', 'Player8'];

const T20players = ['Rohit', 'Virat', 'Bumrah'];
const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Ashwin'];

// merge using ES6 spread feature
const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

function IndianPlayers() {
  // Destructuring features of ES6
  const [firstOdd, ...restOdd] = oddTeam;
  const [firstEven, ...restEven] = evenTeam;

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team Players</h3>
      <p>First: {firstOdd}, Rest: {restOdd.join(', ')}</p>

      <h3>Even Team Players</h3>
      <p>First: {firstEven}, Rest: {restEven.join(', ')}</p>

      <h3>Merged T20 + Ranji Trophy Players</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
