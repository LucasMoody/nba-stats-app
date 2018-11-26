import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import demoPlayers from "./demoPlayers";
import PlayerList from "./components/PlayerList";
import AddPlayerInput from "./components/AddPlayerInput";
import { space } from "styled-system";
import "./App.css";

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

export default App;
