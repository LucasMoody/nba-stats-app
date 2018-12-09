import React, { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "../utils/hooks";
import { width, height, color, fontSize } from "styled-system";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import Input from "./Input";
import api from "../api/";
import { getPlayerImageSrc } from "../utils/playerUtils";

const StyledInput = styled(Input)`
  ${width}
  ${fontSize}
`;

export default function AddPlayerInput({ addPlayer }) {
  const [searchString, setSearchString] = useState("");
  const players = usePlayerSearch(searchString);
  const handlePlayerChosen = id => {
    addPlayer(id);
    setSearchString("");
  };
  return (
    <Flex flexDirection="column" width="100%" css={{ position: "relative" }}>
      <StyledInput
        placeholder="Search for NBA player..."
        fontSize="26px"
        width={1}
        value={searchString}
        onChange={event => setSearchString(event.target.value)}
      />
      <PlayerResultList
        players={players}
        handlePlayerChosen={handlePlayerChosen}
      />
    </Flex>
  );
}

function usePlayerSearch(searchString) {
  const [players, setPlayers] = useState([]);
  useEffect(
    () => {
      if (
        searchString !== null &&
        searchString !== "" &&
        searchString.length > 2
      ) {
        api.searchForPlayer(searchString).then(setPlayers);
      } else {
        setPlayers([]);
      }
      return () => null;
    },
    [searchString]
  );
  return players;
}

function PlayerResultList({ players, handlePlayerChosen }) {
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
  const handlePlayerResultClicked = id => {
    handlePlayerChosen(id);
    setShowList(false);
  };
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
        <PlayerResult
          onClick={() => handlePlayerResultClicked(player.name)}
          idx={idx}
          key={player.name}
          {...player}
        />
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

function PlayerResult({ onClick, teamId, playerId, name, team, idx }) {
  return (
    <Flex
      px="20px"
      py="15px"
      alignItems="center"
      css={{
        borderTop: idx === 0 ? "0" : "1px solid #d4d4d5"
      }}
      onClick={onClick}
    >
      <PlayerAvatar
        bg="#22398d"
        width="50px"
        height="50px"
        src={getPlayerImageSrc(teamId, playerId)}
      />
      <Box ml="20px" fontSize="20px">
        {name}
      </Box>
      <Box ml="20px" fontSize="20px">
        {team}
      </Box>
    </Flex>
  );
}
