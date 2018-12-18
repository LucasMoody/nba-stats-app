import players from "./mockedData/players.json";
import playerStats from "./mockedData/playerStats.json";
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
  return localStorage.addPlayerToFavorites(playerId);
}

export function removePlayer(playerId) {
  return localStorage.removePlayerFromFavorites(playerId);
}

export async function getFavoritePlayers() {
  const favoritePlayerIds = localStorage.getFavoritePlayers();
  return getStatsforPlayers(favoritePlayerIds);
}

export async function getStatsForPlayer(playerId) {
  return playerStats.find(
    player => player.playerInformation.playerId === playerId
  );
}

export async function getStatsforPlayers(playerIds) {
  return playerStats.filter(
    player => playerIds.indexOf(player.playerInformation.playerId) !== -1
  );
}

export default {
  getAllPlayers,
  searchForPlayer,
  addPlayer,
  removePlayer,
  getStatsForPlayer,
  getStatsforPlayers,
  getFavoritePlayers
};
