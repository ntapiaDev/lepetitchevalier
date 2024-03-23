import type { Camp } from "@prisma/client";
import Counter from "./counter";

export default function Header({ camp }: { camp: Camp }) {
  const lastUpdate = Date.now();
  return (
    <header>
      <Counter start={lastUpdate} value={camp.wood} valuePerHour={camp.woodPerHour} />
      <Counter start={lastUpdate} value={camp.stone} valuePerHour={camp.stonePerHour} />
      <Counter start={lastUpdate} value={camp.food} valuePerHour={camp.foodPerHour} />
      {camp.workers}
    </header>
  );
}
