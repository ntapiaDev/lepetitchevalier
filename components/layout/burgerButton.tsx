import styles from "./layout.module.css";

export default function BurgerButton({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) {
  return (
    <div className={styles.burgerButton} onClick={onClick}>
      <div className={styles.line + (isOpen ? ` ${styles.line1Active}` : "")}></div>
      <div className={styles.line + (isOpen ? ` ${styles.line2Active}` : "")}></div>
      <div className={styles.line + (isOpen ? ` ${styles.line3Active}` : "")}></div>
    </div>
  );
}
