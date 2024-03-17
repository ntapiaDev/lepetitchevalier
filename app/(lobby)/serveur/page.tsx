import { auth, signOut } from "@/auth";
import styles from "./page.module.css";

export default async function Server() {
  const session = await auth();
  return (
    <main>
      <h1>Choisir un serveur</h1>
      {JSON.stringify(session)}
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Déconnexion</button>
      </form>
    </main>
  );
}
