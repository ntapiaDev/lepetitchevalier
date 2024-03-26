import NavLinks from "./navLinks";
import styles from "./layout.module.css";

export default function Burger({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) {
  const openHeight = "calc(100svh - var(--header-height) - var(--footer-height))";
  return (
    <nav className={styles.burger} style={{ height: isOpen ? openHeight : "0" }} onClick={onClick} >
      <NavLinks />
    </nav>
  );
}
