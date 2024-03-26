import Link from "next/link";
import { LOBBY_URL } from "@/routes";
import { currentUser } from "@/modules/auth/user.utils";
import Logout from "@/modules/auth/components/logout";
import styles from "./layout.module.css";

export default async function Footer() {
  const user = await currentUser();
  return (
    <footer className={styles.footer}>
      <span>Chevalier {user?.username}</span>
      <Link href={LOBBY_URL}>Liste des royaumes</Link>
      <Logout />
    </footer>
  );
}
