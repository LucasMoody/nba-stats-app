export function getAllPlayers() {
  debugger;
  return fetch(
    "http://stats.nba.com/stats/commonallplayers?LeagueId=00&Season=2018-19&IsOnlyCurrentSeason=1"
  )
    .then(resp => resp.json())
    .then(resp => resp.resultSets[0]);
}

export default {
  getAllPlayers
};
