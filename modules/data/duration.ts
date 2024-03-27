export const formatDuration = (duration: number) => {
  const seconds = duration * 3600;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (seconds < 60) {
    return `${s}s`;
  } else if (seconds < 3600) {
    return `${m}m ${s}s`;
  } else {
    return `${h}h ${m}m ${s}s`;
  }
}

export const getDuration = (
  wood: number = 0,
  stone: number = 0,
  iron: number = 0,
  level: number
) => {
  return (wood + stone + iron) / (2500 * (1 + 0) * 1 * (2 ** 0)) * (level < 6 ? (2 / (7 - (level - 1))) : 1);
}
