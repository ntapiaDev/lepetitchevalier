import { getCost } from "@/modules/data/cost";
import { formatDuration, getDuration } from "@/modules/data/duration";
import styles from "./grid.module.css";

export default function Mobile({ isOpen, direction, selected, onClick }: { isOpen: boolean, direction: 'left' | 'right', selected: string, onClick: () => void }) {
  const level = 5;

  const { wood, stone, iron, workers } = getCost(selected, level);
  const duration = getDuration(wood, stone, iron, level);

  return (
    <div className={styles.mobile + (isOpen ? ` ${styles.open} ${styles[direction]}` : "")} onClick={e => e.stopPropagation()}>
      <div className={styles.button} onClick={onClick}>X</div>
      <p>Infos de {selected} niveau {level} :</p>
      <p>Bois : {wood} - Pierre : {stone}</p>
      <p>Durée : {formatDuration(duration)}</p>
      <p>Employés : {workers}</p>
      <button onClick={() => console.log(selected)}>Construire</button>
    </div>
  );
}
