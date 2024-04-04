import { useState } from "react";
import Mobile from "./mobile";
import styles from "./grid.module.css";

export default function Item({ item, selected, level, direction, onClick }: { item: string, selected: string, level: number, direction: 'left' | 'right', onClick: () => void }) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    if (isOpen && selected === item) setOpen(false);
    else if (!isOpen) setOpen(true);
    onClick();
  }
  // TODO: récupérer le level depuis l'intérieur du composant?
  return (
    <div className={styles.item} style={{ backgroundImage: `url(/${item}.png)` }} onClick={handleClick}>
      <div className={styles.div}>{level}</div>
      <Mobile isOpen={isOpen && item === selected} direction={direction} selected={selected} onClick={() => setOpen(false)} />
    </div>
  );
}
