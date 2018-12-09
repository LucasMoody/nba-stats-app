export function getFavoritePlayers() {
  return JSON.parse(localStorage.getItem("favoritePlayers"));
}

export function addFavoritePlayer(playerId) {
  let favoritePlayers = getFavoritePlayers();
  if (!favoritePlayers) {
    favoritePlayers = [];
  }
  favoritePlayers.push(playerId);
  setFavoritePlayers(favoritePlayers);
}

export function removeFavoritePlayer(playerId) {
  const favoritePlayers = getFavoritePlayers();
  setFavoritePlayers(favoritePlayers.filter(id => id !== playerId));
}

function setFavoritePlayers(players) {
  localStorage.setItem("favoritePlayers", JSON.stringify(players));
}

export default {
  addFavoritePlayer,
  removeFavoritePlayer
};
