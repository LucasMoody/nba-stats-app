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

export function getDecimalAge(birthDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const days = (new Date() - Date.parse(birthDate)) / oneDay;
  return days / 365;
}
