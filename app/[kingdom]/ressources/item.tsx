import styles from "./page.module.css";

export default function Item({ item, level, onClick }: { item: string, level: number, onClick: () => void }) {
  // TODO: récupérer le level depuis l'intérieur du composant?
  return (
    <div className={styles.item} style={{ backgroundImage: `url(/${item}.png)` }} onClick={onClick}>
      <div className={styles.div}>{level}</div>
    </div>
  );
}
