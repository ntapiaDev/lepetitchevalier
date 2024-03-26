import NavLinks from "./navLinks";
import styles from "./layout.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLinks />
    </nav>
  );
}
