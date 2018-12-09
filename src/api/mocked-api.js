import players from "./mockedData/players.json";
import localStorage from "./local-player-storage";

export function getAllPlayers() {
  return Promise.resolve(players);
}

export async function searchForPlayer(searchTerm) {
  const result = players.filter(player =>
    player.name.toUpperCase().includes(searchTerm.toUpperCase())
  );
  return Promise.resolve(result);
}

export function addPlayer(playerId) {
  return localStorage.addPlayer(playerId);
}

export function removePlayer(playerId) {
  return localStorage.removePlayer(playerId);
}

export function getStatsForPlayer(playerId) {
  return null;
}

export function getStatsforPlayers(playerId) {
  return null;
}

export default {
  getAllPlayers,
  searchForPlayer,
  removePlayer,
  getStatsForPlayer,
  getStatsforPlayers
};
