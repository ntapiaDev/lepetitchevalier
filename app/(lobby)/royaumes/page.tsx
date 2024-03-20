import { currentUser } from "@/modules/auth/user.utils";
import Logout from "@/modules/auth/components/logout";
import { addKingdom, getKingdoms } from "@/modules/kingdom/kingdom.repository";
import Kingdom from "@/modules/kingdom/components/kingdom";
import styles from "../lobby.module.css";

export default async function Royaumes() {
  const kingdoms = await getKingdoms();
  const user = await currentUser();
  // await addKingdom("Aragorn");
  // await addKingdom("Boromir");
  // await addKingdom("Celeborn");
  return (
    <main>
      <h1>Choisir un royaume</h1>
      {JSON.stringify(user)}
      <Logout />
      {kingdoms.map(kingdom => <Kingdom key={kingdom.id} kingdom={kingdom} />)}
    </main>
  );
}
