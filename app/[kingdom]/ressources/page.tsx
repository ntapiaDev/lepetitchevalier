"use client";

import { useState } from "react";
import Container from "@/components/shared/grid/container";
import Item from "@/components/shared/grid/item";
import Summary from "@/components/shared/summaries/ressources";

export default function Ressources() {
  const [isOpen, setOpen] = useState(false);
  const [selected, select] = useState("bucheron");

  const onClick = (item: string) => {
    if (isOpen && selected === item) setOpen(false);
    else {
      if (selected !== item) select(item);
      if (!isOpen) setOpen(true);
    }
  }

  return (
    <main className="in-game">
      <Container>
        <Summary isOpen={isOpen} selected={selected} onClick={() => setOpen(false)} />
        <Item item="bucheron" selected={selected} level={12} direction="left" onClick={() => onClick("bucheron")} />
        <Item item="carriere" selected={selected} level={11} direction="left" onClick={() => onClick("carriere")} />
        <Item item="mine" selected={selected} level={9} direction="left" onClick={() => onClick("mine")} />
        <Item item="ferme" selected={selected} level={10} direction="left" onClick={() => onClick("ferme")} />
        <Item item="hangar" selected={selected} level={4} direction="right" onClick={() => onClick("hangar")} />
        <Item item="entrepot" selected={selected} level={4} direction="right" onClick={() => onClick("entrepot")} />
        <Item item="forge" selected={selected} level={2} direction="right" onClick={() => onClick("forge")} />
        <Item item="grenier" selected={selected} level={3} direction="right" onClick={() => onClick("grenier")} />
      </Container>
    </main>
  );
}
