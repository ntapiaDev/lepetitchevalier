import { signOut } from "@/auth";
import styles from "../auth.module.css";

export default function Logout() {
  const onSubmit = async () => {
    "use server";
    await signOut();
  }

  return (
    <form action={onSubmit}>
      <button type="submit">Déconnexion</button>
    </form>
  );
}
