"use client";

import { useState } from "react";
import type { Camp } from "@prisma/client";
import Burger from "./burger";
import BurgerButton from "./burgerButton";
import Counter from "./counter";
import Workers from "./workers";
import styles from "./layout.module.css";

export default function Header({ camp }: { camp: Camp }) {
  const [isBurgerOpen, toogleBurger] = useState(false);
  return (
    <header className={styles.header}>
      <Counter start={camp.lastUpdate} value={camp.wood} valuePerHour={camp.woodPerHour} label="Bois" />
      <Counter start={camp.lastUpdate} value={camp.stone} valuePerHour={camp.stonePerHour} label="Pierres" />
      <Counter start={camp.lastUpdate} value={1000} valuePerHour={500} label="Fer" />
      <Counter start={camp.lastUpdate} value={camp.food} valuePerHour={camp.foodPerHour} label="Nourriture" />
      <Workers workers={100} />
      <BurgerButton isOpen={isBurgerOpen} onClick={() => toogleBurger(!isBurgerOpen)} />
      <Burger isOpen={isBurgerOpen} onClick={() => toogleBurger(!isBurgerOpen)} />
    </header>
  );
}
