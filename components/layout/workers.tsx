import Image from "next/image";
import styles from "./layout.module.css";

export default function Workers({ workers }: { workers: number }) {
  const label = "Travailleurs";
  return (
    <div className={styles.workers}>
      <Image className={styles.resourceImg} src={`/${label.toLowerCase()}.png`} width={512} height={350} alt={label} />
      {workers}/{workers}
    </div>
  );
}
