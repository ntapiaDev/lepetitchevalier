import Link from "next/link";
import Login from "@/modules/auth/components/login";
import styles from "../lobby.module.css";

export default function Accueil() {
  return (
    <section>
      <h2>Connexion</h2>
      <Login />
      <Link href="/enregistrement">Pas encore de compte?</Link>
    </section>
  );
}
