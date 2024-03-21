import type { Camp } from "@prisma/client";

export default function Header({ camp }: { camp: Camp }) {
  return (
    <header>
      {camp.wood} - {camp.stone} - {camp.food} - {camp.workers}
    </header>
  );
}
