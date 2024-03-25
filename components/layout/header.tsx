import type { Camp } from "@prisma/client";
import Counter from "./counter";
import Workers from "./workers";

export default function Header({ camp }: { camp: Camp }) {
  return (
    <header>
      <Counter start={camp.lastUpdate} value={camp.wood} valuePerHour={camp.woodPerHour} label="Bois" />
      <Counter start={camp.lastUpdate} value={camp.stone} valuePerHour={camp.stonePerHour} label="Pierres" />
      <Counter start={camp.lastUpdate} value={1000} valuePerHour={500} label="Fer" />
      <Counter start={camp.lastUpdate} value={camp.food} valuePerHour={camp.foodPerHour} label="Nourriture" />
      <Workers workers={100} />
    </header>
  );
}
