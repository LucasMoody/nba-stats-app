import React, { useState, useEffect, useRef } from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { width, height, space, color, fontSize } from "styled-system";
import "./App.css";
import Input from "./components/Input";
import { useOnClickOutside } from "./utils/hooks";
import PlayerList from "./components/PlayerList";

const demoPlayers = [
  {
    playerInfo: {
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      position: "G/F",
      age: 19.8,
      image:
        "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612742/2018/260x190/1629029.png"
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
      name: "Lebron James",
      team: "Los Angeles Lakers",
      position: "G/F",
      age: 35.1,
      image:
        "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612747/2018/260x190/2544.png"
    },
    playerStats: {
      pointsPerGame: 28.2,
      reboundsPerGame: 8.3,
      assistsPerGame: 8.5,
      effectiveFieldGoalPercentage: 63.1,
      stealsPerGame: 1.9,
      blocksPerGame: 1.9,
      threePointPercentage: 34.1,
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
      <StyledPlayerList mt={["10px", "40px"]} players={demoPlayers} />
    </Flex>
  );
}

const StyledInput = styled(Input)`
  ${width}
  ${fontSize}
`;

function AddPlayerInput(props) {
  const [searchString, setSearchString] = useState("");
  console.log(searchString);
  const players = usePlayerSearch(searchString);
  return (
    <Flex flexDirection="column" width="100%" css={{ position: "relative" }}>
      <StyledInput
        placeholder="Search for NBA player..."
        fontSize="26px"
        width={1}
        value={searchString}
        onChange={event => setSearchString(event.target.value)}
      />
      <PlayerResultList players={players} />
    </Flex>
  );
}

function usePlayerSearch(searchString) {
  const [players, setPlayers] = useState([]);
  useEffect(
    () => {
      if (searchString !== null && searchString !== "") {
        setPlayers(
          demoPlayers
            .map(player => player.playerInfo)
            .filter(player =>
              player.name.toUpperCase().includes(searchString.toUpperCase())
            )
        );
      } else {
        setPlayers([]);
      }
      return () => null;
    },
    [searchString]
  );
  return players;
}

function PlayerResultList({ players }) {
  const [showList, setShowList] = useState(
    players !== null && players.length > 0
  );
  useEffect(
    () => {
      if (players !== null && players.length > 0) {
        setShowList(true);
      } else {
        setShowList(false);
      }
    },
    [players]
  );
  const ref = useRef();
  useOnClickOutside(ref, () => setShowList(false));
  return showList ? (
    <Flex
      ref={ref}
      mt="10px"
      bg="#fff"
      css={{
        width: "100%",
        position: "absolute",
        top: "100%",
        border: "1px solid #d4d4d5",
        boxShadow:
          "0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)",
        zIndex: 1
      }}
      flexDirection="column"
    >
      {players.map((player, idx) => (
        <PlayerResult idx={idx} key={player.name} {...player} />
      ))}
    </Flex>
  ) : null;
}

const PlayerAvatar = styled.img`
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
  ${width}
  ${height}
  ${color}
`;

function PlayerResult({ image, name, team, idx }) {
  return (
    <Flex
      px="20px"
      py="15px"
      alignItems="center"
      css={{
        borderTop: idx === 0 ? "0" : "1px solid #d4d4d5"
      }}
    >
      <PlayerAvatar bg="#22398d" width="50px" height="50px" src={image} />
      <Box ml="20px" fontSize="20px">
        {name}
      </Box>
      <Box ml="20px" fontSize="20px">
        {team}
      </Box>
    </Flex>
  );
}

export default App;
