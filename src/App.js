import React, { useState, useEffect } from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import demoPlayers from "./demoPlayers";
import PlayerList from "./components/PlayerList";
import AddPlayerInput from "./components/AddPlayerInput";
import { space } from "styled-system";
import "./App.css";
import api from "./api/";

const StyledPlayerList = styled(PlayerList)`
  ${space}
`;

function App() {
  const players = usePlayers();
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mx="auto"
      p="15px"
      css={{ maxWidth: 980 }}
    >
      <h1>NBA Player Statistics</h1>
      <AddPlayerInput addPlayer={console.log} />
      <StyledPlayerList mt={["10px", "40px"]} players={players} />
    </Flex>
  );
}

function usePlayers() {
  const [players, setPlayers] = useState();
  useEffect(() => {
    api.getFavoritePlayers().then(players => setPlayers(players));
  });
  return players;
}

export default App;
