export function getPlayerImageSrc(teamId, playerId) {
  return (
    "https://ak-static.cms.nba.com" +
    "/wp-content/uploads/headshots/nba/" +
    +teamId +
    "/2018/260x190/" +
    playerId +
    ".png"
  );
}
