import React from 'react';

const players = [
  { name: 'Player1', score: 85 },
  { name: 'Player2', score: 45 },
  { name: 'Player3', score: 92 },
  { name: 'Player4', score: 60 },
  { name: 'Player5', score: 30 },
  { name: 'Player6', score: 75 },
  { name: 'Player7', score: 55 },
  { name: 'Player8', score: 68 },
  { name: 'Player9', score: 40 },
  { name: 'Player10', score: 90 },
  { name: 'Player11', score: 25 }
];

function ListofPlayers() {
  // filter players with score below 70 using arrow function (ES6)
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
