import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import { currentUser } from "@/modules/auth/user.utils";
import Username from "@/modules/auth/components/username";
import styles from "../lobby.module.css";

export default async function Bienvenue() {
  const user = await currentUser();
  // TODO: Redirection via le middleware?
  if (user?.username) redirect(LOBBY_URL);

  return (
    <main>
      <h1>Bienvenue</h1>
      <Username />
    </main>
  );
}
