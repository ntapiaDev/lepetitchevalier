import Link from "next/link";
import Signup from "@/modules/auth/components/signup";
import styles from "./page.module.css";

export default function Register() {
  return (
    <main>
      <h1>Créer un compte</h1>
      <Signup />
      <Link href="/">J'ai déjà un compte.</Link>
    </main>
  );
}
