import Link from "next/link";
import Signup from "@/modules/auth/components/signup";
import styles from "../../lobby.module.css";

export default function Register() {
  return (
    <section>
      <h2>Créer un compte</h2>
      <Signup />
      <Link href="/">J'ai déjà un compte.</Link>
    </section>
  );
}
