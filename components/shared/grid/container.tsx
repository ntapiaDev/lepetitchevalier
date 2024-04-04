import styles from "./grid.module.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
