import { getCost } from "@/modules/data/cost";
import { formatDuration, getDuration } from "@/modules/data/duration";
import styles from "./page.module.css";

export default function Selected({ isOpen, selected, onClick }: { isOpen: boolean, selected: string, onClick: () => void }) {
  const level = 5;

  const { wood, stone, iron, workers } = getCost(selected, level);
  const duration = getDuration(wood, stone, iron, level);

  return (
    <div className={styles.details + (isOpen ? ` ${styles.open}` : "")}>
      <div className={styles.image} style={{ backgroundImage: `url(/${selected}.png)` }} onClick={onClick}></div>
      <div className={styles.info}>
        <div className={styles.button} onClick={onClick}>X</div>
        <p>Infos de {selected} niveau {level} :</p>
        <p>Bois : {wood} - Pierre : {stone}</p>
        <p>Durée : {formatDuration(duration)}</p>
        <p>Consommation : {workers}</p>
      </div>
    </div>
  );
}
