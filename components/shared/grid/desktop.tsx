import { getCost } from "@/modules/data/cost";
import { formatDuration, getDuration } from "@/modules/data/duration";
import styles from "./grid.module.css";

export default function Desktop({ isOpen, selected, onClick }: { isOpen: boolean, selected: string, onClick: () => void }) {
  const level = 5;

  const { wood, stone, iron, workers } = getCost(selected, level);
  const duration = getDuration(wood, stone, iron, level);

  return (
    <div className={styles.desktop + (isOpen ? ` ${styles.open}` : "")}>
      <div className={styles.image} style={{ backgroundImage: `url(/${selected}.png)` }} onClick={onClick}></div>
      <div className={styles.info}>
        <div className={styles.button} onClick={onClick}>X</div>
        <p>Infos de {selected} niveau {level} :</p>
        <p>Bois : {wood} - Pierre : {stone}</p>
        <p>Durée : {formatDuration(duration)}</p>
        <p>Employés : {workers}</p>
      </div>
    </div>
  );
}
