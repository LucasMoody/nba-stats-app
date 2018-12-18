import React, { useMemo } from "react";
import { fill } from "../utils/style";
import { space, fontSize } from "styled-system";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { getPlayerImageSrc, getDecimalAge } from "../utils/playerUtils";
import api from "../api";

const StyledPlayerCard = styled(PlayerCard)`
  ${space}
`;

export default function PlayerList({ players, className, style }) {
  return players ? (
    <Flex
      className={className}
      style={style}
      flexDirection="column"
      css={{ width: "100%" }}
    >
      {players.map((player, idx) => (
        <StyledPlayerCard
          mt={idx !== 0 ? ["30px", "40px"] : null}
          key={player.playerInformation.playerId}
          {...player}
        />
      ))}
    </Flex>
  ) : (
    <div>loading...</div>
  );
}

function PlayerCard({ className, style, ...otherProps }) {
  const { playerId, teamId } = otherProps.playerInformation;
  const imageSrc = getPlayerImageSrc(teamId, playerId);
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
      <TeamFlag {...otherProps.playerInformation} />
      <PlayerImage image={imageSrc} />
      <PlayerCardContent {...otherProps} />
      <RemovePlayerButton {...otherProps.playerInformation} />
    </Flex>
  );
}

const TeamFlagContainer = styled(Flex)`
  position: absolute;
  writing-mode: vertical-rl;
  left: 0;
  top: 0;
`;

function TeamFlag({ className, style, teamCity, teamName }) {
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
      {teamCity} {teamName}
    </TeamFlagContainer>
  );
}

function PlayerImage({ image }) {
  return (
    <Flex bg="#002f52" alignItems="flex-end" justifyContent="center" p={10}>
      <img src={image} alt="" />
    </Flex>
  );
}

function PlayerCardContent({ playerInformation, playerStats }) {
  return (
    <Flex flexDirection="column" p={10} css={{ width: "100%" }}>
      <PlayerInfo {...playerInformation} />
      <PlayerStats {...playerStats} />
    </Flex>
  );
}

const PlayerInfoHeader = styled.h2`
  ${fontSize}
  ${space}
`;

function PlayerInfo({ firstName, lastName, position, birthDate }) {
  const decimalAge = useMemo(() => getDecimalAge(birthDate).toFixed(1), [
    birthDate
  ]);
  return (
    <div>
      <PlayerInfoHeader ml="8px" my="12px" fontSize={["20px", "30px"]}>
        {firstName} {lastName} ({decimalAge} years) - {position}
      </PlayerInfoHeader>
    </div>
  );
}

function PlayerStats({ className, style, ...stats }) {
  const {
    points,
    rebounds,
    assists,
    effectiveFieldGoalPercentage,
    steals,
    blocks,
    threePointPercentage,
    freeThrowPercentage
  } = stats;

  return (
    <Flex
      className={className}
      justifyContent="space-between"
      style={style}
      flexWrap="wrap"
    >
      <StyledStatBox m="8px" statName="PTS" value={points.toFixed(1)} />
      <StyledStatBox m="8px" statName="REB" value={rebounds.toFixed(1)} />
      <StyledStatBox m="8px" statName="AST" value={assists.toFixed(1)} />
      <StyledStatBox
        m="8px"
        statName="EFG%"
        value={(effectiveFieldGoalPercentage * 100).toFixed(1)}
      />
      <StyledStatBox m="8px" statName="STL" value={steals.toFixed(1)} />
      <StyledStatBox m="8px" statName="BLK" value={blocks.toFixed(1)} />
      <StyledStatBox
        m="8px"
        statName="3PT%"
        value={(threePointPercentage * 100).toFixed(1)}
      />
      <StyledStatBox
        m="8px"
        statName="FT%"
        value={(freeThrowPercentage * 100).toFixed(1)}
      />
    </Flex>
  );
}

const StyledStatBox = styled(StatBox)`
  ${space}
`;

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

function RemovePlayerButton({ playerId }) {
  return (
    <Flex
      m="2px"
      p="8px"
      css={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
      onClick={() => api.removePlayer(playerId)}
    >
      <StyleDeleteIcon fill={["white", "black"]} width="12px" />
    </Flex>
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

const StyleDeleteIcon = styled(DeleteIcon)`
  ${fill}
`;
