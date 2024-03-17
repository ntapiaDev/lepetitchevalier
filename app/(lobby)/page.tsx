import Link from "next/link";
import Login from "@/modules/auth/components/login";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Connexion</h1>
      <Login />
      <Link href="/enregistrement">Pas encore de compte?</Link>
    </main>
  );
}
