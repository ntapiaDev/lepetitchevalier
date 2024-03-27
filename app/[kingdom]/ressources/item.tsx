import Image from "next/image";
import styles from "./page.module.css";

export default function Item({ item, level, onClick }: { item: string, level: number, onClick: () => void }) {
  // TODO: récupérer le level depuis l'intérieur du composant?
  return (
    <div className={styles.item}>
      <Image className={styles.image} src={`/${item}.png`} width={512} height={512} alt={item} onClick={onClick} />
      <div className={styles.div}>{level}</div>
    </div>
  );
}
