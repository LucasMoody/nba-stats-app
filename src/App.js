import React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { width, space, color, fontSize, style } from "styled-system";
import "./App.css";
import Input from "./components/Input";

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
  },
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

const StyledPlayerList = styled(PlayerList)`
  ${space}
`;

function App() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mx="auto"
      p="15px"
      css={{ maxWidth: 980 }}
    >
      <h1>NBA Player Statistics</h1>
      <AddPlayerInput />
      <StyledPlayerList mt={["10px", "40px"]} players={players} />
    </Flex>
  );
}

function PlayerImage(props) {
  return (
    <Flex bg="#22398d" alignItems="flex-end" justifyContent="center" p={10}>
      <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612742/2018/260x190/1629029.png" />
    </Flex>
  );
}

const TeamFlagContainer = styled(Flex)`
  position: absolute;
  writing-mode: vertical-rl;
  left: 0;
  top: 0;
`;

function TeamFlag({ className, style, team }) {
  return (
    <TeamFlagContainer
      bg="black"
      color="white"
      width={30}
      py={10}
      className={className}
      style={style}
      alignItems="center"
      css={{ borderTopLeftRadius: 10, borderBottomRightRadius: 10 }}
    >
      {team}
    </TeamFlagContainer>
  );
}

function StatBox({ className, style, statName, value }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width={["55px", "65px"]}
      css={{
        borderRadius: 10,
        border: "1px solid black"
      }}
      className={className}
      style={style}
    >
      <Box
        py={["4px", "8px"]}
        fontSize={["14px", "20px"]}
        css={{
          textAlign: "center",
          width: "100%",
          borderBottom: "1px solid black",
          fontWeight: "600"
        }}
      >
        {statName}
      </Box>
      <Flex
        py={["6px", "10px"]}
        alignItems="center"
        fontSize={["14px", "26px"]}
        css={{ fontWeight: "200" }}
      >
        {value}
      </Flex>
    </Flex>
  );
}

const StyledStatBox = styled(StatBox)`
  ${space}
`;

function PlayerStats({ className, style, ...otherProps }) {
  const {
    pointsPerGame,
    reboundsPerGame,
    assistsPerGame,
    effectiveFieldGoalPercentage,
    stealsPerGame,
    blocksPerGame,
    threePointPercentage,
    freeThrowPercentage
  } = otherProps;

  return (
    <Flex
      className={className}
      justifyContent="space-between"
      style={style}
      flexWrap="wrap"
    >
      <StyledStatBox m="8px" statName="PTS" value={pointsPerGame} />
      <StyledStatBox m="8px" statName="REB" value={reboundsPerGame} />
      <StyledStatBox m="8px" statName="AST" value={assistsPerGame} />
      <StyledStatBox
        m="8px"
        statName="EFG%"
        value={effectiveFieldGoalPercentage}
      />
      <StyledStatBox m="8px" statName="STL" value={stealsPerGame} />
      <StyledStatBox m="8px" statName="BLK" value={blocksPerGame} />
      <StyledStatBox m="8px" statName="3PT%" value={threePointPercentage} />
      <StyledStatBox m="8px" statName="FT%" value={freeThrowPercentage} />
    </Flex>
  );
}

const PlayerInfoHeader = styled.h2`
  ${fontSize}
  ${space}
`;

function PlayerInfo({ name, position, team, age }) {
  return (
    <div>
      <PlayerInfoHeader ml="8px" my="12px" fontSize={["20px", "30px"]}>
        {name} ({age} years) - {position}
      </PlayerInfoHeader>
    </div>
  );
}

function PlayerCard({ className, style, ...otherProps }) {
  return (
    <Flex
      bg="#f5f5f5"
      justifyContent="flex-start"
      css={{
        width: "100%",
        borderRadius: 10,
        position: "relative",
        overflow: "hidden"
      }}
      className={className}
      style={style}
      flexDirection={["column", "row"]}
    >
      <TeamFlag {...otherProps.playerInfo} />
      <PlayerImage />
      <PlayerCardContent {...otherProps} />
      <RemovePlayerButton />
    </Flex>
  );
}

function PlayerCardContent({ playerInfo, playerStats }) {
  return (
    <Flex flexDirection="column" p={10} css={{ width: "100%" }}>
      <PlayerInfo {...playerInfo} />
      <PlayerStats {...playerStats} />
    </Flex>
  );
}

const StyledPlayerCard = styled(PlayerCard)`
  ${space}
`;

function PlayerList({ players, className, style }) {
  return (
    <Flex
      className={className}
      style={style}
      flexDirection="column"
      css={{ width: "100%" }}
    >
      {players.map((player, idx) => (
        <StyledPlayerCard
          mt={idx !== 0 ? ["30px", "40px"] : null}
          key={player.playerInfo.name}
          {...player}
        />
      ))}
    </Flex>
  );
}

const StyledInput = styled(Input)`
  ${width}
  ${fontSize}
`;

function AddPlayerInput(props) {
  return (
    <StyledInput
      placeholder="Search for NBA player..."
      fontSize="26px"
      width={1}
    />
  );
}

const DeleteIcon = ({ width = "348.333px", height = width, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 348.333 348.334"
      className={className}
    >
      <path
        d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
      c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
      c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
      l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
      L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
      />
    </svg>
  );
};

const fill = style({
  // React prop name
  prop: "fill",
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: "fill",
  // key for theme values
  key: "fills"
});

const StyleDeleteIcon = styled(DeleteIcon)`
  ${fill}
`;

function RemovePlayerButton(props) {
  return (
    <Flex
      m="2px"
      p="8px"
      css={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
    >
      <StyleDeleteIcon fill={["white", "black"]} width="12px" />
    </Flex>
  );
}

export default App;
