import React from "react";
import "./App.css";

const players = [
  {
    playerInfo: {
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      position: "G/F",
      age: 19.8
    },
    playerStats: {
      pointsPerGame: 20.2,
      reboundsPerGame: 6.3,
      assistsPerGame: 4.5,
      effectiveFieldGoalPercentage: 59.1,
      stealsPerGame: 0.9,
      blocksPerGame: 1.1,
      threePointPercentage: 39.1,
      freeThrowPercentage: 75.1
    }
  }
];

function App() {
  return (
    <>
      <h1>NBA Player Statistics</h1>
      <AddPlayerInput />
      <PlayerList players={players} />
    </>
  );
}

function PlayerImage(props) {
  return (
    <img src="https://d3gmc2itu3p9gx.cloudfront.net/public/media/nba2018/Luka-Doncic-3-small.png" />
  );
}

function TeamFlag({ team }) {
  return <div>{team}</div>;
}

function StatBox({ statName, value }) {
  return (
    <div>
      <span>{statName}</span>: <span>{value}</span>
    </div>
  );
}

function PlayerStats(props) {
  const {
    pointsPerGame,
    reboundsPerGame,
    assistsPerGame,
    effectiveFieldGoalPercentage,
    stealsPerGame,
    blocksPerGame,
    threePointPercentage,
    freeThrowPercentage
  } = props;

  return (
    <div>
      <StatBox statName="PTS" value={pointsPerGame} />
      <StatBox statName="REB" value={reboundsPerGame} />
      <StatBox statName="AST" value={assistsPerGame} />
      <StatBox statName="EFG%" value={effectiveFieldGoalPercentage} />
      <StatBox statName="STL" value={stealsPerGame} />
      <StatBox statName="BLK" value={blocksPerGame} />
      <StatBox statName="3PT%" value={threePointPercentage} />
      <StatBox statName="FT%" value={freeThrowPercentage} />
    </div>
  );
}

function PlayerInfo({ name, position, team, age }) {
  return (
    <div>
      {name} | {position} | {age}
    </div>
  );
}

function PlayerCard(props) {
  return (
    <div>
      <TeamFlag {...props.playerInfo} />
      <PlayerImage />
      <PlayerCardContent {...props} />
    </div>
  );
}

function PlayerCardContent({ playerInfo, playerStats }) {
  return (
    <div>
      <PlayerInfo {...playerInfo} />
      <PlayerStats {...playerStats} />
    </div>
  );
}

function PlayerList({ players }) {
  return (
    <div>
      {players.map(player => (
        <PlayerCard key={player.playerInfo.name} {...player} />
      ))}
    </div>
  );
}

function AddPlayerInput(props) {
  return <input />;
}

function RemovePlayerButton(props) {}

export default App;
