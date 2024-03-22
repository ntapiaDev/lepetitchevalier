"use client";

import { useParams } from "next/navigation";
import { useCurrentCamp } from "@/modules/camp/hooks/use-current-camp";

export default function Header() {
  const params = useParams<{ kingdom: string }>();
  const camp = useCurrentCamp(params.kingdom);
  
  return (
    <header>
      {camp?.wood} - {camp?.stone} - {camp?.food} - {camp?.workers}
    </header>
  );
}
