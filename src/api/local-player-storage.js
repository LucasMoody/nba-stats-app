export function getFavoritePlayers() {
  return JSON.parse(localStorage.getItem("favoritePlayers"));
}

export function addPlayerToFavorites(playerId) {
  let favoritePlayers = getFavoritePlayers();
  if (!favoritePlayers) {
    favoritePlayers = [];
  }
  if (!favoritePlayers.includes(playerId)) {
    favoritePlayers.push(playerId);
    setFavoritePlayers(favoritePlayers);
  }
}

export function removePlayerFromFavorites(playerId) {
  const favoritePlayers = getFavoritePlayers();
  setFavoritePlayers(favoritePlayers.filter(id => id !== playerId));
}

function setFavoritePlayers(players) {
  localStorage.setItem("favoritePlayers", JSON.stringify(players));
}

export default {
  addPlayerToFavorites,
  removePlayerFromFavorites
};
