"use client";

import Image from "next/image";
import { useState } from "react";
import Item from "./item";
import Selected from "./selected";
import styles from "./page.module.css";

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
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.infos}>
          <Image className={styles.image} src="/ressources-main.png" width={1024} height={512} alt="ressources" />
          <h1 className={styles.title}>Ressources :</h1>
          <Selected isOpen={isOpen} selected={selected} onClick={() => setOpen(false)} />
        </div>
        {/* TODO: Items font 170*174px et ne sont pas carrés */}
        {/* TODO: IDEM pour mobile */}
        <Item item="bucheron" level={12} onClick={() => onClick("bucheron")} />
        <Item item="carriere" level={11} onClick={() => onClick("carriere")} />
        <Item item="mine" level={9} onClick={() => onClick("mine")} />
        <Item item="ferme" level={10} onClick={() => onClick("ferme")} />
        <Item item="hangar" level={4} onClick={() => onClick("hangar")} />
        <Item item="entrepot" level={4} onClick={() => onClick("entrepot")} />
        <Item item="forge" level={2} onClick={() => onClick("forge")} />
        <Item item="grenier" level={3} onClick={() => onClick("grenier")} />
      </div>
    </main>
  );
}
