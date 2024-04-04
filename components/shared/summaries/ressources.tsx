import Desktop from "../grid/desktop";
import styles from "./summaries.module.css";

export default function Summary({ isOpen, selected, onClick }: { isOpen: boolean, selected: string, onClick: () => void }) {
  return (
    <div className={styles.summary} style={{ backgroundImage: `url("/ressources-main.png")` }}>
      <h1 className={styles.title}>Ressources :</h1>
      <Desktop isOpen={isOpen} selected={selected} onClick={onClick} />
    </div>
  );
}
