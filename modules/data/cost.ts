export const getCost = (selected: string, level: number) => {
  const costs: { [key: string]: { wood?: number, stone?: number, iron?: number, food?: number, workers?: number } } = {
    bucheron: {
      wood: Math.floor(60 * (1.5 ** (level - 1))),
      stone: Math.floor(15 * (1.5 ** (level - 1))),
      workers: Math.floor(10 * level * (1.1 ** level)) - Math.floor(10 * (level - 1) * (1.1 ** (level - 1)))
    },
    carriere: {
      wood: Math.floor(48 * (1.6 ** (level - 1))),
      stone: Math.floor(24 * (1.6 ** (level - 1))),
      workers: Math.floor(10 * level * (1.1 ** level)) - Math.floor(10 * (level - 1) * (1.1 ** (level - 1)))
    },
    mine: {
      wood: Math.floor(225 * (1.5 ** (level - 1))),
      stone: Math.floor(75 * (1.5 ** (level - 1))),
      workers: Math.floor(20 * level * (1.1 ** level)) - Math.floor(20 * (level - 1) * (1.1 ** (level - 1)))
    },
    // TODO: valeurs à ajuster? = mine ?
    ferme: {
      wood: Math.floor(120 * (1.5 ** (level - 1))), // bucheron x2
      stone: Math.floor(45 * (1.5 ** (level - 1))), // bucheron x3
      workers: Math.floor(15 * level * (1.1 ** level)) - Math.floor(15 * (level - 1) * (1.1 ** (level - 1)))
    }
  };
  return costs[selected];
}
