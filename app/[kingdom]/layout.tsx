import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import { currentUser } from "@/modules/auth/user.utils";
import { getKingdomByName } from "@/modules/kingdom/kingdom.repository";

export default async function GameLayout({ children, params }: { children: React.ReactNode, params: { kingdom: string } }) {
  const kingdom = await getKingdomByName(params.kingdom);
  if (!kingdom) redirect(LOBBY_URL);

  const user = await currentUser();
  // TODO: à faire via le middleware?
  if (!kingdom.users.find(u => u.userId === user?.id)) redirect(LOBBY_URL);

  return (
    <>
      {/* <Header /> */}
      {/* <Navigation /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
